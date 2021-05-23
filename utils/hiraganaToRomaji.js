export const ConvertToRomaji = (word) => {
  const hiraganaList = [
    { romaji: "a", hiragana: "あ" },
    { romaji: "i", hiragana: "い" },
    { romaji: "u", hiragana: "う" },
    { romaji: "e", hiragana: "え" },
    { romaji: "o", hiragana: "お" },
    { romaji: "ha", hiragana: "は" },
    { romaji: "hi", hiragana: "ひ" },
    { romaji: "fu", hiragana: "ふ" },
    { romaji: "e", hiragana: "へ" },
    { romaji: "ho", hiragana: "ほ" },
    { romaji: "ba", hiragana: "ば" },
    { romaji: "bi", hiragana: "び" },
    { romaji: "bu", hiragana: "ぶ" },
    { romaji: "be", hiragana: "べ" },
    { romaji: "bo", hiragana: "ぼ" },
    { romaji: "pa", hiragana: "ぱ" },
    { romaji: "pi", hiragana: "ぴ" },
    { romaji: "pu", hiragana: "ぷ" },
    { romaji: "pe", hiragana: "ぺ" },
    { romaji: "po", hiragana: "ぽ" },
    { romaji: "sa", hiragana: "さ" },
    { romaji: "shi", hiragana: "し" },
    { romaji: "su", hiragana: "す" },
    { romaji: "se", hiragana: "せ" },
    { romaji: "so", hiragana: "そ" },
    { romaji: "za", hiragana: "ざ" },
    { romaji: "ji", hiragana: "じ" },
    { romaji: "zu", hiragana: "ず" },
    { romaji: "ze", hiragana: "ぜ" },
    { romaji: "zo", hiragana: "ぞ" },
    { romaji: "ka", hiragana: "か" },
    { romaji: "ki", hiragana: "き" },
    { romaji: "ku", hiragana: "く" },
    { romaji: "ke", hiragana: "け" },
    { romaji: "ko", hiragana: "こ" },
    { romaji: "ga", hiragana: "が" },
    { romaji: "gi", hiragana: "ぎ" },
    { romaji: "gu", hiragana: "ぐ" },
    { romaji: "ge", hiragana: "げ" },
    { romaji: "go", hiragana: "ご" },
    { romaji: "ta", hiragana: "た" },
    { romaji: "chi", hiragana: "ち" },
    { romaji: "tsu", hiragana: "つ" },
    { romaji: "te", hiragana: "て" },
    { romaji: "to", hiragana: "と" },
    { romaji: "da", hiragana: "だ" },
    { romaji: "di", hiragana: "ぢ" },
    { romaji: "du", hiragana: "づ" },
    { romaji: "de", hiragana: "で" },
    { romaji: "do", hiragana: "ど" },
    { romaji: "ma", hiragana: "ま" },
    { romaji: "mi", hiragana: "み" },
    { romaji: "mu", hiragana: "む" },
    { romaji: "me", hiragana: "め" },
    { romaji: "mo", hiragana: "も" },
    { romaji: "na", hiragana: "な" },
    { romaji: "ni", hiragana: "に" },
    { romaji: "nu", hiragana: "ぬ" },
    { romaji: "ne", hiragana: "ね" },
    { romaji: "no", hiragana: "の" },
    { romaji: "ra", hiragana: "ら" },
    { romaji: "ri", hiragana: "り" },
    { romaji: "ru", hiragana: "る" },
    { romaji: "re", hiragana: "れ" },
    { romaji: "ro", hiragana: "ろ" },
    { romaji: "wa", hiragana: "わ" },
    { romaji: "o", hiragana: "を" },
    { romaji: "n", hiragana: "ん" },
    { romaji: "yo", hiragana: "よ" },
    { romaji: "ya", hiragana: "や" },
    { romaji: "yu", hiragana: "ゆ" },
  ];
  const convertHiraganaToRomaji = (character) => {
    const filtered = hiraganaList.filter((word) => word.hiragana === character);
    if (filtered.length) {
      return filtered[0].romaji;
    } else {
      return "-";
    }
  };

  var convertedString = "";
  const wordSplit = word.replace(/\s+/g, "").split("");
  wordSplit.forEach((char) => {
    if (char !== " ") {
      convertedString = convertedString.concat(convertHiraganaToRomaji(char));
    }
  });

  if (convertedString.includes("-")) {
    var regex = /-/gi,
      result,
      indices = [];
    while ((result = regex.exec(convertedString))) {
      indices.push(result.index);
    }

    indices.forEach((index) => {
      const charAfterDash = convertedString[index + 1];
      convertedString = convertedString.replace("-", charAfterDash);
    });
  }

  return convertedString;
};
