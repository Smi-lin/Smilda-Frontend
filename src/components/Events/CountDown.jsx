import React, { useEffect, useState } from 'react';

const CountDown = ({data}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }); // Add an empty dependency array here

  function calculateTimeLeft() {
    const difference = +new Date('2023-08-17') - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60), // Fix this line, missing parentheses
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span className='text-[25px] text-[#475ad2]' key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });
  

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className='text-[red] text-[25px]'>Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
