import { useState, useRef } from "react";
import Link from "next/link";
import useSWR from "swr";
import { trackGoal } from "fathom-client";

import fetcher from "@/lib/fetcher";
import { Text, Spinner, Input, Button } from "@chakra-ui/react";

export default function Subscribe() {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);
  const { data } = useSWR("/api/subscribers", fetcher);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: "success",
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <div>
      <Text>Subscribe to the newsletter</Text>
      <Text>
        Get emails from me about web development, tech, and early access to new
        articles.
      </Text>
      <form onSubmit={subscribe}>
        <Input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="bob@bob.com"
          type="email"
          autoComplete="email"
          required
        />
        <Button variant="solid" type="submit">
          {form.state === "loading" ? <Spinner /> : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
