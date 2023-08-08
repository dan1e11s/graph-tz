import ky from 'ky';
import { useEffect, useState } from 'react';
import WeekDays from './WeekDays';
import OneDay from './OneDay';
import GraphLevels from './GraphLevels';
import { getDates, getMonths } from '../utils/date';

const API = 'https://dpg.gg/test/calendar.json';

const days = getDates();
const months = getMonths();

const MainGraph = () => {
  const [contributions, setContributions] = useState<Record<string, number>>(
    {}
  );

  async function fetchContributions() {
    try {
      const res = await ky(API).json<Record<string, number>>();
      setContributions(res);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchContributions();
  }, []);

  return (
    <>
      <div>
        <div className="t-head">
          {months.map((month) => (
            <p key={month} className="upper-text">
              {month}
            </p>
          ))}
        </div>
        <div className="t-body">
          <WeekDays weekdays={days.slice(0, 7)} />
          {days.map((day, index) => (
            <OneDay key={index} day={day} contributions={contributions} />
          ))}
        </div>
        <GraphLevels />
      </div>
    </>
  );
};

export default MainGraph;
