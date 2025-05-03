"use client";

import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";

const TIMEZONES = [
  'Europe/Istanbul',
  'Europe/Berlin',
  'America/New_York',
  'Asia/Tokyo',
  'Europe/London',
  'Australia/Sydney'
];

function TimeShow() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedZone, setSelectedZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {

    let intervalId;

    if(isRunning) {
      intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleTimeZoneChange = (e) => {
    setSelectedZone(e.target.value);
    set
  }

  const toggleClock = () => {
    setIsRunning( prev => !prev);
  };

  return (
    <>
        <h1>Cok Bolgeli Saat</h1>

        <select onChange={handleTimeZoneChange} value={selectedZone}>
          {TIMEZONES.map( tz => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>

        <Clock 
        time={ currentTime.toLocaleTimeString('de-DE', {timeZone: selectedZone}) }
        date={ currentTime.toLocaleDateString('de-DE', {timeZone: selectedZone}) }
        timeZone={selectedZone} 
        />
        <button onClick={toggleClock}>
          { isRunning ? 'Saati Durdur' : 'Saati Baslat' }
        </button>
    </>
  )
}

export default TimeShow;
