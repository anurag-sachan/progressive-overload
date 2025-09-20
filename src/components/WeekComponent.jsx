// import React, { useState, useEffect } from "react";
// import DayComponent from "./DayComponent";

// const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// export default function WeekComponent() {
//   const todayIdx = new Date().getDay(); // 0 = Sunday
//   const today = todayIdx === 0 ? "Sunday" : daysOfWeek[todayIdx - 1];
//   const [showWeek, setShowWeek] = useState(false);
//   const [weekData, setWeekData] = useState({});

//   useEffect(() => {
//     const saved = localStorage.getItem("weekData");
//     if (saved) {
//       setWeekData(JSON.parse(saved));
//     } else {
//       fetch("https://drive.google.com/uc?export=download&id=1an0twxip68HPNN2o1_5LY1LkljbdxuIX")
//         .then((res) => res.json())
//         .then((data) => setWeekData(data));
//     }
//   }, []);


//   const updateDay = (day, newData) => {
//     const updated = { ...weekData, [day]: newData };
//     setWeekData(updated);
//     localStorage.setItem("weekData", JSON.stringify(updated));
//   };

//   if (!showWeek) {
//     return (
//       <div className="max-w-2xl mx-auto p-4">
//         <DayComponent
//           day={today}
//           data={weekData[today] || { diet: [], steps: false, workout: [] }}
//           onUpdate={(newData) => updateDay(today, newData)}
//           onBack={() => setShowWeek(true)}
//         />
//       </div>
//     );
//   }

//   const todayIndex = daysOfWeek.indexOf(today);
//   const visibleDays = daysOfWeek.slice(0, todayIndex + 1);

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Workout Plan</h1>
//       {visibleDays.map((day) => (
//         <DayComponent
//           key={day}
//           day={day}
//           data={weekData[day] || { diet: [], steps: false, workout: [] }}
//           onUpdate={(newData) => updateDay(day, newData)}
//         />
//       ))}
//     </div>
//   );
// }

import React from "react";
import DayComponent from "./DayComponent";

export default function WeekComponent() {
  const today = new Date();
  const weekday = today.getDay(); // 0=Sun … 6=Sat

  // Only render Monday → today
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - (weekday === 0 ? 6 : weekday - 1));

  const days = [];
  for (let i = 0; i <= (weekday === 0 ? 6 : weekday - 1); i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    days.push(d.toISOString().split("T")[0]); // YYYY-MM-DD
  }

  return (
    <div className="week">
      <h2>This Week</h2>
      {days.map((date) => (
        <DayComponent key={date} date={date} />
      ))}
    </div>
  );
}
