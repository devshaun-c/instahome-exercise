import emailjs from "emailjs-com";

export default async function handler(req, res) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_PARTNER_ENQUIRY_ID;
  const formData = req.body.formData;

  console.log(userId);
  console.log(formData.target);

  //   try {
  //     const sendEmail = await emailjs
  //       .sendForm(serviceId, templateId, e.target, userId)
  //       .then(
  //         (result) => {
  //           return true;
  //         },
  //         (error) => {
  //           return false;
  //         }
  //       );
  //     console.log(sendEmail);
  //     res.status(200).json(sendEmail);
  //   } catch (err) {
  //     // console.log(err);
  //     // res.status(500).json({ statusCode: 500, message: err.message });
  //     return null;
  //   }
}
