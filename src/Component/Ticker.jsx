import React, { useEffect, useState } from "react";

const Ticker = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    let visits = localStorage.getItem("visitorCount");
    visits = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem("visitorCount", visits);
    setCount(visits);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black-light p-5 text-white font-semibold ">
        <div className="max-w-7xl mx-auto flex justify-between ">
            <span>{dateTime.toLocaleString()} | Location: Bakerz HQ</span>
            <span>Visitor Count: {count}</span>
        </div>
    </div>
  );
};

export default Ticker;