import { Dayjs } from 'dayjs';

interface IWeekDaysProps {
  weekdays: Dayjs[];
}

const WeekDays: React.FC<IWeekDaysProps> = ({ weekdays }) => {
  function showWeekDay(n: number): boolean {
    return n === 0 || n === 2 || n === 4;
  }

  return (
    <>
      {weekdays.map((day, ind) =>
        showWeekDay(ind) ? (
          <span key={ind} className="week-day upper-text">
            {day.format('dd')}
          </span>
        ) : (
          <span key={ind}></span>
        )
      )}
    </>
  );
};

export default WeekDays;
