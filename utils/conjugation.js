export const convertToTa = (wordObj) => {
  const { hiragana, group, word } = wordObj;

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
          if (identifier == "り" || identifier == "い" || identifier == "ち") {
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
};

export const convertToPlain = (wordObj) => {
  const { hiragana, group, word } = wordObj;

  if (word.includes("来")) {
    const irregIndex = hiragana.indexOf("ます") - 1;
    return hiragana.substring(0, irregIndex) + "くる";
  }
  if (word.includes("行")) {
    const irregIndex = hiragana.indexOf("ます") - 1;
    return hiragana.substring(0, irregIndex) + "く";
  }
  if (word === "します") {
    return "する";
  }

  if (hiragana) {
    const verbGroup = group.toString();
    const identifierIndex = hiragana.indexOf("ます");
    const identifier = hiragana[identifierIndex - 1];

    switch (verbGroup) {
      case "1":
        if (identifierIndex === 0) {
          return hiragana.substring(0, identifierIndex + 1) + "る";
        } else {
          if (identifier == "い") {
            return hiragana.substring(0, identifierIndex) + "う";
          }

          if (identifier == "き") {
            return hiragana.substring(0, identifierIndex) + "く";
          }

          if (identifier == "ぎ") {
            return hiragana.substring(0, identifierIndex) + "ぐ";
          }

          if (identifier == "し") {
            return hiragana.substring(0, identifierIndex) + "す";
          }

          if (identifier == "ち") {
            return hiragana.substring(0, identifierIndex) + "つ";
          }

          if (identifier == "び") {
            return hiragana.substring(0, identifierIndex) + "ぶ";
          }

          if (identifier == "み") {
            return hiragana.substring(0, identifierIndex) + "む";
          }

          if (identifier == "り") {
            return hiragana.substring(0, identifierIndex) + "る";
          }
        }
      case "2":
        const masuIndex = hiragana.indexOf("ます");
        return hiragana.substring(0, masuIndex) + "る";
      case "3":
        const shiIndex = hiragana.indexOf("し");
        return hiragana.substring(0, shiIndex) + "する";

      default:
        break;
    }
  }
};

export const convertToNai = (wordObj) => {
  const { hiragana, group, word } = wordObj;

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
};
