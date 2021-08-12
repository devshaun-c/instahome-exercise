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

export const ConvertToDurationText = (days = 0, hours = 0, minutes = 0) => {
  var durationInSeconds = ConvertToSeconds(days, hours, minutes);

  var inDays = Math.floor(durationInSeconds / 86400);
  durationInSeconds -= inDays * 86400;

  var inHours = Math.floor(durationInSeconds / 3600) % 24;
  durationInSeconds -= inHours * 3600;

  var inMinutes = Math.floor(durationInSeconds / 60) % 60;
  durationInSeconds -= inMinutes * 60;

  var summary = "";
  if (inDays >= 1) {
    summary += `${inDays} day${inDays === 1 ? "" : "(s) "} `;
  }
  if (inHours >= 1) {
    summary += `${inHours} hr${inHours === 1 ? "" : "(s) "} `;
  }
  if (inMinutes >= 1) {
    summary += `${inMinutes} min(s) `;
  }
  return summary;
};

export const ConvertToDaysHoursMinutes = (durationInSeconds) => {
  var inDays = Math.floor(durationInSeconds / 86400);
  durationInSeconds -= inDays * 86400;

  var inHours = Math.floor(durationInSeconds / 3600) % 24;
  durationInSeconds -= inHours * 3600;

  var inMinutes = Math.floor(durationInSeconds / 60) % 60;
  durationInSeconds -= inMinutes * 60;

  var result = { days: inDays, hours: inHours, minutes: inMinutes };

  return result;
};

export const ConvertToSeconds = (days = 0, hours = 0, minutes = 0) => {
  var durationInSeconds =
    parseInt(days) * 24 * 60 * 60 +
    parseInt(hours) * 60 * 60 +
    parseInt(minutes) * 60;

  return durationInSeconds;
};

// URL formatting
export const GetClickableLink = (link) => {
  return link.startsWith("http://") || link.startsWith("https://")
    ? link
    : `http://${link}`;
};
