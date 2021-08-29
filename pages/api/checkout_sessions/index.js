const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    // console.log(req.body);
    const line_items = req.body.line_items;
    const redirectUrl = req.body.redirectUrl;
    try {
      // Validate the amount that was passed from the client.
      if (line_items.length <= 0) {
        console.log("NO ITEMS");
      }

      // Create Checkout Sessions from body params.
      const params = {
        mode: "payment",
        payment_method_types: ["card", "fpx"],
        line_items,
        success_url: `${req.headers.origin}/success?id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/${redirectUrl}`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
