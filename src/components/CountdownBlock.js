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

  const timerComponents = {};

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    const dict = (word) => {
      if (word === 'days') {
        return 'Дней';
      }
      if (word === 'hours') {
        return 'Часов';
      }
      if (word === 'minutes') {
        return 'Минут';
      }
      if (word === 'seconds') {
        return 'Секунд';
      }
    };
    timerComponents[interval] = timeLeft[interval];
  });

  return (
    <Container className="mt-3 d-flex flex-column align-items-center justify-content-center">
      <h3 style={{ color: 'white' }} className="title mb-1">
        До события осталось:
      </h3>
      {timerComponents ? (
        <div style={{ color: 'white' }} className="d-flex flex-row">
          <div style={{ width: '44.95px' }} className="me-2 d-flex flex-column">
            <div
              style={{ height: '44.95px' }}
              className="d-flex align-items-center justify-content-center rounded border border-white"
            >
              <h3
                style={{ fontSize: 27 }}
                className="p-1 m-0 title text-center"
              >
                {timerComponents.days
                  ? String(timerComponents.days).padStart(2, '0')
                  : '00'}
              </h3>
            </div>
            <p className="subtitle mb-0 countdown-text">Дней</p>
          </div>
          <div style={{ width: '44.95px' }} className="d-flex flex-column me-2">
            <div
              style={{ height: '44.95px' }}
              className="d-flex align-items-center justify-content-center rounded border border-white"
            >
              <h3
                style={{ fontSize: 27 }}
                className="p-1 m-0 title text-center"
              >
                {timerComponents.hours
                  ? String(timerComponents.hours).padStart(2, '0')
                  : '00'}
              </h3>
            </div>
            <p className="subtitle mb-0 countdown-text">Часов</p>
          </div>
          <div style={{ width: '44.95px' }} className="d-flex flex-column me-2">
            <div
              style={{ height: '44.95px' }}
              className="d-flex align-items-center justify-content-center rounded border border-white"
            >
              <h3
                style={{ fontSize: 27 }}
                className="p-1 m-0 title text-center"
              >
                {timerComponents.minutes
                  ? String(timerComponents.minutes).padStart(2, '0')
                  : '00'}
              </h3>
            </div>
            <p className="subtitle mb-0 countdown-text">Минут</p>
          </div>
          <div className="d-flex flex-column">
            <div
              style={{ height: '44.95px' }}
              className="d-flex align-items-center justify-content-center rounded border border-white"
            >
              <h3
                style={{ fontSize: 27 }}
                className="p-1 m-0 title text-center"
              >
                {timerComponents.seconds
                  ? String(timerComponents.seconds).padStart(2, '0')
                  : '00'}
              </h3>
            </div>
            <p className="subtitle mb-0 countdown-text">Секунд</p>
          </div>
        </div>
      ) : (
        <h2 style={{ color: 'white' }} className="title h-2">
          Сегодня свадьба!
        </h2>
      )}
    </Container>
  );
}

export default CountdownBlock;
