import moment from "moment";

export const convertFirebaseTimestamp = (timestamp) => {
  return new Date(timestamp.seconds * 1000);
};

export const getTimeDifference = (endDate, startDate, convert) => {
  const diffInSec =
    (convertFirebaseTimestamp(endDate) - convertFirebaseTimestamp(startDate)) /
    1000;

  var value = diffInSec;

  if (diffInSec < 3600) {
    value = value / 60;
  } else {
    if (convert === "min") {
      value = value / 60;
    }
    if (convert === "hr") {
      value = value / 60 / 60;
    }
  }

  return value;
};

export const GetDurationText = (endDateTime, startDateTime) => {
  var durationInSeconds =
    (convertFirebaseTimestamp(endDateTime) -
      convertFirebaseTimestamp(startDateTime)) /
    1000;
  // calculate (and subtract) whole days
  var days = Math.floor(durationInSeconds / 86400);
  durationInSeconds -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(durationInSeconds / 3600) % 24;
  durationInSeconds -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(durationInSeconds / 60) % 60;
  durationInSeconds -= minutes * 60;

  var summary = "";

  if (days >= 1) {
    summary += `${days} day(s) `;
  }
  if (hours >= 1) {
    summary += `${hours} hr${hours > 1 ? "(s)" : ""} `;
  }
  if (minutes >= 1) {
    summary += `${minutes} min. `;
  }

  return summary;
};

export const GetTimeSummary = (startDateTime, endDateTime) => {
  const startTime = moment(convertFirebaseTimestamp(startDateTime)).format(
    "LT"
  );

  const endTime = moment(convertFirebaseTimestamp(endDateTime)).format("LT");

  const summary = `${startTime} - ${endTime}`;

  return summary;
};

export const ConverToDate = (date) => {
  return moment(convertFirebaseTimestamp(date)).format("DD MMM, YYYY");
};
