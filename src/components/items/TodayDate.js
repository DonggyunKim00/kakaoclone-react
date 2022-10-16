import { useState, useEffect } from "react";

function TodayDate() {
  const [nowDate, setNowDate] = useState("00월 0일 0요일");
  useEffect(() => {
    let todays = new Date();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const time = {
      month: todays.getMonth() + 1,
      date: todays.getDate(),
      day: week[todays.getDay()],
    };
    setNowDate(`${time.month}월 ${time.date}일 ${time.day}요일 `);
  }, []);

  return <span>{nowDate}소식입니다.</span>;
}

export default TodayDate;
