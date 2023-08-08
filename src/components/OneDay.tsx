import { useState } from 'react';
import { Dayjs } from 'dayjs';

interface IOneDayProps {
  day: Dayjs;
  contributions: Record<string, number>;
}

const OneDay: React.FC<IOneDayProps> = ({ day, contributions }) => {
  const formattedDay = day.format('YYYY-MM-DD');

  const [open, setOpen] = useState<boolean>(false);

  const handleEnter = () => {
    setOpen(true);
  };

  const handleLeave = () => {
    setOpen(false);
  };

  const getColor = () => {
    if (contributions[formattedDay] < 10) {
      return 'level-2';
    } else if (contributions[formattedDay] < 20) {
      return 'level-3';
    } else if (contributions[formattedDay] < 30) {
      return 'level-4';
    } else if (contributions[formattedDay] > 30) {
      return 'level-5';
    } else {
      return 'level-1';
    }
  };

  return (
    <div
      className={`one-day ${getColor()}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {open && (
        <div className="items">
          {contributions[formattedDay] ? (
            <p className="text">
              {contributions[formattedDay]} contributions in{' '}
            </p>
          ) : (
            <p className="text">No contributions on</p>
          )}
          <p className="second-text">{day.format('dddd, MMMM D, YYYY')}</p>
        </div>
      )}
    </div>
  );
};

export default OneDay;
