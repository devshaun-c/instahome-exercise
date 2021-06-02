const JishoApi = require("unofficial-jisho-api");

export default async function handler(req, res) {
  const jisho = new JishoApi();
  const { word } = req.query;

  try {
    const result = await jisho.searchForPhrase(word);
    res.status(200).json(result);
  } catch (err) {
    res.json(err);
    res.status(405).end();
  }
}
