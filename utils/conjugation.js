import { wordType } from "../constants/wordType";

export const convertToTa = (wordObj) => {
  const { hiragana, group, word } = wordObj;
  if (group) {
    if (word.includes("来")) {
      const irregIndex = hiragana.indexOf("ます") - 1;
      return hiragana.substring(0, irregIndex) + "きた";
    }
    if (word.includes("行")) {
      const irregIndex = hiragana.indexOf("ます") - 1;
      return hiragana.substring(0, irregIndex) + "った";
    }
    if (word === "します") {
      return "した";
    }

    if (hiragana) {
      const verbGroup = group.toString();
      const identifierIndex = hiragana.indexOf("ます") - 1;
      const identifier = hiragana[identifierIndex];

      switch (verbGroup) {
        case "1":
          if (identifierIndex === 0) {
            return hiragana.substring(0, identifierIndex + 1) + "た";
          } else {
            if (
              identifier == "り" ||
              identifier == "い" ||
              identifier == "ち"
            ) {
              return hiragana.substring(0, identifierIndex) + "った";
            } else if (identifier == "み" || identifier == "び") {
              return hiragana.substring(0, identifierIndex) + "んだ";
            } else if (identifier == "き") {
              return hiragana.substring(0, identifierIndex) + "いた";
            } else if (identifier == "ぎ") {
              return hiragana.substring(0, identifierIndex) + "いだ";
            } else if (identifier == "し") {
              return hiragana.substring(0, identifierIndex) + "した";
            }
          }
        case "2":
          const masuIndex = hiragana.indexOf("ます");
          return hiragana.substring(0, masuIndex) + "た";
        case "3":
          const shiIndex = hiragana.indexOf("し");
          return hiragana.substring(0, shiIndex + 1) + "た";

        default:
          break;
      }
    }
  }
  return hiragana;
};

export const convertToPlain = (wordObj) => {
  const { hiragana, group, word } = wordObj;

  var convertedHiragana = hiragana;

  if (group) {
    if (word.includes("来")) {
      const irregIndex = convertedHiragana.indexOf("ます") - 1;
      return convertedHiragana.substring(0, irregIndex) + "くる";
    }
    if (word.includes("行")) {
      const irregIndex = convertedHiragana.indexOf("ます") - 1;
      return convertedHiragana.substring(0, irregIndex) + "く";
    }
    if (word === "します") {
      return "する";
    }

    if (convertedHiragana) {
      const verbGroup = group.toString();
      const identifierIndex = convertedHiragana.indexOf("ます");
      const identifier = convertedHiragana[identifierIndex - 1];

      switch (verbGroup) {
        case "1":
          if (identifierIndex === 0) {
            return convertedHiragana.substring(0, identifierIndex - 1) + "る";
          } else {
            if (identifier == "い") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "う";
            }

            if (identifier == "き") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "く";
            }

            if (identifier == "ぎ") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "ぐ";
            }

            if (identifier == "し") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "す";
            }

            if (identifier == "ち") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "つ";
            }

            if (identifier == "び") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "ぶ";
            }

            if (identifier == "み") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "む";
            }

            if (identifier == "り") {
              return convertedHiragana.substring(0, identifierIndex - 1) + "る";
            }
          }
        case "2":
          return convertedHiragana.substring(0, identifierIndex) + "る";
        case "3":
          return convertedHiragana.substring(0, identifierIndex - 1) + "する";

        default:
          break;
      }
    }
  }
  return convertedHiragana;
};

export const convertToNai = (wordObj) => {
  const { hiragana, group, word, type } = wordObj;

  if (type === wordType.verb) {
    if (word.includes("来")) {
      const irregIndex = hiragana.indexOf("ます") - 1;
      return hiragana.substring(0, irregIndex) + "こない";
    }
    if (word.includes("行")) {
      const irregIndex = hiragana.indexOf("ます") - 1;
      return hiragana.substring(0, irregIndex) + "かない";
    }
    if (word === "します") {
      return "しない";
    }

    if (hiragana) {
      const verbGroup = group.toString();

      switch (verbGroup) {
        case "1":
          const identifierIndex = hiragana.indexOf("ます") - 1;
          const identifier = hiragana[identifierIndex];
          if (identifierIndex === 0) {
            return hiragana.substring(0, identifierIndex) + "ない";
          } else {
            if (identifier == "い") {
              return hiragana.substring(0, identifierIndex) + "わない";
            }

            if (identifier == "き") {
              return hiragana.substring(0, identifierIndex) + "かない";
            }

            if (identifier == "ぎ") {
              return hiragana.substring(0, identifierIndex) + "がない";
            }

            if (identifier == "し") {
              return hiragana.substring(0, identifierIndex) + "さない";
            }

            if (identifier == "ち") {
              return hiragana.substring(0, identifierIndex) + "たない";
            }

            if (identifier == "び") {
              return hiragana.substring(0, identifierIndex) + "ばない";
            }

            if (identifier == "み") {
              return hiragana.substring(0, identifierIndex) + "まない";
            }

            if (identifier == "り") {
              return hiragana.substring(0, identifierIndex) + "らない";
            }
          }

        case "2":
          const masuIndex = hiragana.indexOf("ます");
          return hiragana.substring(0, masuIndex) + "ない";
        case "3":
          const shiIndex = hiragana.indexOf("し");
          return hiragana.substring(0, shiIndex + 1) + "ない";

        default:
          return "";
      }
    }
  }
  return hiragana;
};
