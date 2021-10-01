import { GetActiveActivities } from "../../../utils/firebase";

export default async function handler(req, res) {
  const id = req.query.id;
  try {
    const data = await GetActiveActivities(id, undefined);
    res.status(200).json(data);
  } catch (err) {
    // console.log(err);
    // res.status(500).json({ statusCode: 500, message: err.message });
    return null;
  }
}
