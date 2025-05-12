import React, { useEffect, useState } from "react";

function DateCom() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(today);
  }, []);

  return <p>Today's Date: {currentDate}</p>;
}

export default DateCom;
