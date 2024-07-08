"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [currentDate, setCurrentDate] = useState("");
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const dateString = now.toLocaleDateString();
      const timeString = now.toLocaleTimeString();
      setCurrentDate(`${dateString} ${timeString}`);
    };

    // Mettre à jour immédiatement
    updateDate();

    // // Mettre à jour toutes les secondes
    // const intervalId = setInterval(updateDate, 1000);

    // // Nettoyage de l'intervalle lors du démontage du composant
    // return () => clearInterval(intervalId);
  }, []);

  return <div>{currentDate}</div>;
}

export default Page;
