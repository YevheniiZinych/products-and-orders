import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDateFull = (dateStr: string) => {
  const date = new Date(dateStr);

  let month = format(date, 'MMM', { locale: ru });

  month = month.replace('.', '');

  month = month.charAt(0).toUpperCase() + month.slice(1);

  const day = format(date, 'dd', { locale: ru });
  const year = format(date, 'yyyy', { locale: ru });

  const formatted = `${day} / ${month} / ${year}`;

  return formatted;
};

export const formatDateFullNum = (dateStr: string) => {
  const date = new Date(dateStr);

  const month = format(date, 'MM', { locale: ru });

  const day = format(date, 'dd', { locale: ru });
  const year = format(date, 'yyyy', { locale: ru });

  const formatted = `${day} / ${month} / ${year}`;

  return formatted;
};
