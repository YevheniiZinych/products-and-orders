import { useEffect, useState } from 'react';

import { format } from 'date-fns';
import { uk, ru } from 'date-fns/locale';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const useDate = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const dayOfWeek = capitalize(format(now, 'EEEE', { locale: ru }));
  const day = format(now, 'dd', { locale: ru });
  const month = capitalize(format(now, 'MMM', { locale: ru }).replace('.', ''));
  const year = format(now, 'yyyy', { locale: ru });
  const time = format(now, 'HH:mm', { locale: uk });

  return {
    dayOfWeek,
    day,
    month,
    year,
    time,
  };
};
