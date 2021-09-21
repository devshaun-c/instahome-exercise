import { GetSpecificDocFromFirebase } from "../../../lib/firebase";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const productId = req.body.productId;
    const metadata = req.body.metadata;
    const redirectUrl = req.body.redirectUrl;
    const payeeEmail = JSON.parse(metadata.payee).email;
    const quantity = parseInt(req.body.quantity);
    const { bookedDate, bookedTime } = metadata;

    try {
      const { defaultPrice, activityName, partnerId, coverImage } =
        await GetSpecificDocFromFirebase(productId, "templates");
      const serviceFee = Math.ceil(parseInt(defaultPrice) * 0.02);
      const unitPrice = parseInt(defaultPrice) + serviceFee;

      const params = {
        mode: "payment",
        payment_method_types: ["card", "fpx"],
        line_items: [
          {
            price_data: {
              currency: "myr",
              product_data: {
                name: activityName,
                description: `By ${partnerId} @ ${bookedDate} ${bookedTime}`,
                images: [coverImage[0].url],
              },
              unit_amount: unitPrice * 100,
            },
            quantity,
          },
        ],
        customer_email: payeeEmail,
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
