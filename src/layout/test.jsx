import React, { useState, useEffect } from "react";

export default function Test() {
  const colors = ["text-red-500", "text-blue-500", "text-green-500"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 100); // har 1 sekundda o'zgaradi

    return () => clearInterval(interval); // component unmount bo'lganda tozalash
  }, []);

  return (
    <h1 className={`text-7xl font-bold p-12 ${colors[colorIndex]}`}>
      vazifa bajarilmoqda tez orada yuklanadi
    </h1>
  );
}
