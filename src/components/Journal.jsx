import { useEffect } from "react";
import DateRow from "./DateRow";

function getDatesInMonth(date) {
  let days = [];
  let month = date.getMonth();
  console.log("month is", month);

  let year = date.getYear();
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i).toDateString());
  }
  return days;
}

export default function Journal({ d, habits, addHabit }) {
  console.log(d);
  let days = getDatesInMonth(d);
  console.log(days);
  useEffect(() => {}, []);
  return (
    <div className="journal-container">
      <div className="dailyLine">
        {days.map((day) => {
          return (
            <DateRow date={day} />
          );
        })}
      </div>
      <div className="habitGrid">

      </div>
    </div>
  );
}
