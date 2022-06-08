import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

function CountdownBlock() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-07-16`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    const dict = (word) => {
      if (word === 'days') {
        return 'дней';
      }
      if (word === 'hours') {
        return 'часов';
      }
      if (word === 'minutes') {
        return 'минут';
      }
      if (word === 'seconds') {
        return 'секунд';
      }
    };
    timerComponents.push(
      <span className="text-center">
        {timeLeft[interval]} {dict(interval)}{' '}
      </span>
    );
  });

  return (
    <Container className="mt-3 d-flex flex-column align-items-center justify-content-center">
        <p style={{ color: 'white' }} className="title mb-0">До события осталось:</p>
      <div style={{ color: 'white' }} className="title h3 text-center">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Обратный отсчет!</span>
        )}
      </div>
    </Container>
  );
}

export default CountdownBlock;
