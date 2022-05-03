import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import './clock.css';

const Clock: FC = ({ children }) => {
  const [isIdle, setIdle] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const milliSeconds = 1000;
  const seconds = 60;
  const minutes = 1;
  const timeout = minutes * seconds * milliSeconds;

  useIdleTimer({
    timeout,
    onIdle: () => {
      setIdle(true);
    },
  });

  useEffect(() => {
    window.addEventListener('mousemove', () => {
      setIdle(false);
    });
    window.addEventListener('keydown', () => {
      setIdle(false);
    });
    window.addEventListener('click', () => {
      setIdle(false);
    });
    const timeInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('mousemove', () => {
        setIdle(false);
      });
      window.removeEventListener('keydown', () => {
        setIdle(false);
      });
      window.removeEventListener('click', () => {
        setIdle(false);
      });
    };
  }, []);

  return (
    <div>
      {children}
      <div className='clock-space' style={{ display: isIdle ? 'flex' : 'none' }}>
        <div className='clock-container'>
          <div>
            <ul className='clock'>
              <li className='numbers'>
                <span>1</span>
              </li>
              <li className='numbers'>
                <span>2</span>
              </li>
              <li className='numbers'>
                <span>3</span>
              </li>
              <li className='numbers'>
                <span>4</span>
              </li>
              <li className='numbers'>
                <span>5</span>
              </li>
              <li className='numbers'>
                <span>6</span>
              </li>
              <li className='numbers'>
                <span>7</span>
              </li>
              <li className='numbers'>
                <span>8</span>
              </li>
              <li className='numbers'>
                <span>9</span>
              </li>
              <li className='numbers'>
                <span>10</span>
              </li>
              <li className='numbers'>
                <span>11</span>
              </li>
              <li className='numbers'>
                <span>12</span>
              </li>
              <li
                className='hours'
                style={{
                  transform: `translate(-50%, 0%) rotate(${date.getHours() * 30 + date.getMinutes() / 2 - 180}deg)`,
                }}
              >
                <span>hour</span>
              </li>
              <li
                className='minutes'
                style={{
                  transform: `translate(-50%, 0%) rotate(${date.getMinutes() * 6 - 180}deg)`,
                }}
              >
                <span>minute</span>
              </li>
              <li
                className='seconds'
                style={{ transform: `translate(-50%, 0%) rotate(${date.getSeconds() * 6 - 180}deg)` }}
              >
                <span>second</span>
              </li>
            </ul>
          </div>
          <div className='digital-clock-container'>
            <ul className='digital-clock'>
              <li className='digital-hours'>
                <span>{format(date, 'hh')}</span>
                <span className='unit'>H</span>
              </li>
              <li className='digital-minutes'>
                <span>{format(date, 'mm')}</span>
                <span className='unit'>M</span>
              </li>
              <li className='digital-seconds'>
                <span>{format(date, 'ss')}</span>
                <span className='unit'>S</span>
              </li>
              <li className='digital-seconds'>
                <span>{format(date, 'a')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
