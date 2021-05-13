export const convertToTa = (wordObj) => {
  const { hiragana, group, irreg } = wordObj;
  if (hiragana) {
    var newWord = hiragana;
    const verbGroup = group.toString();

    switch (verbGroup) {
      case "1":
        const identifierIndex = newWord.indexOf("ます") - 1;
        const identifier = newWord[identifierIndex];
        if (identifierIndex === 0) {
          newWord = newWord.substring(0, identifierIndex + 1) + "た";
          return newWord;
        } else {
          if (identifier == "り" || identifier == "い" || identifier == "ち") {
            newWord = newWord.substring(0, identifierIndex) + "った";
          } else if (identifier == "み" || identifier == "び") {
            newWord = newWord.substring(0, identifierIndex) + "んだ";
          } else if (identifier == "き") {
            if (irreg) {
              newWord = newWord.substring(0, identifierIndex) + "った";
            } else {
              newWord = newWord.substring(0, identifierIndex) + "いた";
            }
          } else if (identifier == "ぎ") {
            newWord = newWord.substring(0, identifierIndex) + "いだ";
          } else if (identifier == "し") {
            newWord = newWord.substring(0, identifierIndex) + "した";
          }
        }
        return newWord;

      case "2":
        const masuIndex = newWord.indexOf("ます");
        newWord = newWord.substring(0, masuIndex) + "た";
        return newWord;

      case "3":
        const shiIndex = newWord.indexOf("し");
        newWord = newWord.substring(0, shiIndex + 1) + "た";
        return newWord;

      default:
        break;
    }
  }
};

export const convertToPlain = (wordObj) => {
  const { hiragana, group, irreg } = wordObj;
  if (hiragana) {
    var newWord = hiragana;
    const verbGroup = group.toString();

    switch (verbGroup) {
      case "1":
        const identifierIndex = newWord.indexOf("ます") - 1;
        const identifier = newWord[identifierIndex];

        if (identifierIndex === 0) {
          newWord = newWord.substring(0, identifierIndex + 1) + "る";
          return newWord;
        } else {
          if (identifier == "い") {
            newWord = newWord.substring(0, identifierIndex) + "う";
          }

          if (identifier == "き") {
            newWord = newWord.substring(0, identifierIndex) + "く";
          }

          if (identifier == "ぎ") {
            newWord = newWord.substring(0, identifierIndex) + "ぐ";
          }

          if (identifier == "し") {
            newWord = newWord.substring(0, identifierIndex) + "す";
          }

          if (identifier == "ち") {
            newWord = newWord.substring(0, identifierIndex) + "つ";
          }

          if (identifier == "び") {
            newWord = newWord.substring(0, identifierIndex) + "ぶ";
          }

          if (identifier == "み") {
            newWord = newWord.substring(0, identifierIndex) + "む";
          }

          if (identifier == "り") {
            newWord = newWord.substring(0, identifierIndex) + "る";
          }
        }

        return newWord;

      case "2":
        const masuIndex = newWord.indexOf("ます");
        newWord = newWord.substring(0, masuIndex) + "る";
        return newWord;
      case "3":
        const shiIndex = newWord.indexOf("し");
        newWord = newWord.substring(0, shiIndex) + "する";
        return newWord;

      default:
        break;
    }
  }
};

export const convertToNai = (wordObj) => {
  const { hiragana, group, irreg } = wordObj;
  if (hiragana) {
    var newWord = hiragana;
    const verbGroup = group.toString();

    switch (verbGroup) {
      case "1":
        const identifierIndex = newWord.indexOf("ます") - 1;
        const identifier = newWord[identifierIndex];

        if (identifierIndex === 0) {
          newWord = newWord.substring(0, identifierIndex) + "ない";
          return newWord;
        } else {
          if (identifier == "い") {
            newWord = newWord.substring(0, identifierIndex) + "わない";
          }

          if (identifier == "き") {
            newWord = newWord.substring(0, identifierIndex) + "かない";
          }

          if (identifier == "ぎ") {
            newWord = newWord.substring(0, identifierIndex) + "がない";
          }

          if (identifier == "し") {
            newWord = newWord.substring(0, identifierIndex) + "さない";
          }

          if (identifier == "ち") {
            newWord = newWord.substring(0, identifierIndex) + "たない";
          }

          if (identifier == "び") {
            newWord = newWord.substring(0, identifierIndex) + "ばない";
          }

          if (identifier == "み") {
            newWord = newWord.substring(0, identifierIndex) + "まない";
          }

          if (identifier == "り") {
            newWord = newWord.substring(0, identifierIndex) + "らない";
          }
        }

        return newWord;

      case "2":
        const masuIndex = newWord.indexOf("ます");
        newWord = newWord.substring(0, masuIndex) + "ない";
        return newWord;
      case "3":
        const shiIndex = newWord.indexOf("し");
        newWord = newWord.substring(0, shiIndex + 1) + "ない";
        return newWord;

      default:
        break;
    }
  }
};
