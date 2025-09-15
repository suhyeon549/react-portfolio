import React, { useState, useEffect } from 'react';

function Dday() {
  const [dday, setDday] = useState('');

  useEffect(() => {
    const graduationDate = new Date('2026-03-01');
    const today = new Date();

    // To calculate the time difference of two dates
    const timeDiff = graduationDate.getTime() - today.getTime();

    // To calculate the no. of days between two dates
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff === 0) {
      setDday('D-day');
    } else if (daysDiff > 0) {
      setDday(`D-${daysDiff}`);
    } else {
      setDday(`D+${Math.abs(daysDiff)}`);
    }
  }, []);

  return (
    <div>
      <h2>🎓 졸업까지</h2>
      <p>{dday}</p>
    </div>
  );
}

export default Dday;
