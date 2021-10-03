import { GetAllPartnerSchedules } from "../../../../utils/firebase";

export default async function handler(req, res) {
  const partnerId = req.query.partnerId;
  const templateId = req.query.id;
  const limit = 5;
  try {
    const data = await GetAllPartnerSchedules(partnerId, templateId, limit);

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(200).json({});
    }
  } catch (err) {
    // res.status(500).json({ statusCode: 500, message: err.message });
    return null;
  }
}
