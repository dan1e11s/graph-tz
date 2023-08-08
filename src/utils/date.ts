import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const getDates = (date = dayjs()) => {
  const end = date.endOf('week');
  const start = end.subtract(357, 'day');

  const days = [];

  for (let i = 8; i < 358; i++) {
    days.push(start.add(i, 'day'));
  }

  return days;
};

export const getMonths = (month = dayjs()) => {
  const start = month.subtract(11, 'month');
  const months = [];

  for (let i = 0; i < 12; i++) {
    months.push(start.add(i, 'month').format('MMM'));
  }
  return months;
};
