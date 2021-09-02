import { GetSpecificDocFromFirebase } from "../../../lib/firebase";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const productId = req.body.productId;
    const metadata = req.body.metadata;
    const redirectUrl = req.body.redirectUrl;
    const quantity = req.body.quantity;
    try {
      const { defaultPrice, activityName, partnerId, coverImage } =
        await GetSpecificDocFromFirebase(productId, "templates");

      // Create Checkout Sessions from body params.
      const params = {
        mode: "payment",
        payment_method_types: ["card", "fpx"],
        line_items: [
          {
            price_data: {
              currency: "myr",
              product_data: {
                name: activityName,
                description: `${activityName} by ${partnerId} @ ${metadata.bookedSession}`,
                images: [coverImage[0].url],
              },
              unit_amount: defaultPrice * 100,
            },
            quantity,
          },
        ],
        metadata,
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
