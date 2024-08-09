export const FormatHour = (date: number) => {
  var d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  var timeString = d.toLocaleString("en-US", options);
  const index = timeString.indexOf(":") + 1;
  return (
    timeString.substring(0, index) + "00" + timeString.substring(index + 2)
  );
};

export const FormatTemp = (temp: number) =>
  Math.round(temp).toString().slice(0, 2) + "\u00B0";

export const GetDates = (count: number) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dates = [];
  var d = new Date();
  for (let i = 0; i < count; i++) {
    var nextDay = new Date(d);
    nextDay.setDate(d.getDate() + i);
    const date = weekday[nextDay.getDay()];
    dates[i] = date;
  }
  return dates;
};
