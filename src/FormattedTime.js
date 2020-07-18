import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let month = now.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day}-{month}/{date} {hours}:{minutes}
    </div>
  );
}
