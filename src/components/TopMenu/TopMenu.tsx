import { useState, useEffect } from 'react';
import { memo } from 'react';
import { SiSessionize } from 'react-icons/si';
import { MdAccessTime } from 'react-icons/md';
import { GiHealingShield } from 'react-icons/gi';
import { useDate } from '../../hooks/useDate';
import { websocket, disconnectWebsocket } from '../../services/websocket';
import './TopMenu.scss';

const TopMenu = () => {
  const [sessions, setSessions] = useState<number>(0);

  const { dayOfWeek, day, month, year, time } = useDate();

  useEffect(() => {
    websocket(setSessions);

    return () => {
      disconnectWebsocket();
    };
  }, []);

  return (
    <header className="top-menu d-flex justify-content-between align-items-center p-3 shadow-sm">
      <div className="d-flex align-items-center gap-5">
        <div className="d-flex align-items-center gap-3">
          <GiHealingShield color="green" size="45" />
          <div className=" fw-bold text-success">INVENTORY</div>
        </div>
        <input className="" type="text" placeholder="Поиск" />
      </div>
      <div className="top-menu__datetime d-flex">
        <div className=" me-4">
          <span className="d-flex">{dayOfWeek}</span>
          <div className="d-flex gap-3">
            <span>
              {day} {month}. {year}
            </span>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <MdAccessTime color="green" size="15" />
              <span>{time}</span>
            </div>
          </div>
        </div>
        <div className="top-menu__session d-flex align-items-end justify-content-center gap-2">
          <span className="top-menu__icon ">
            <SiSessionize color="green" />
          </span>
          <span className="top-menu__sessions fw-bold h-1 mb-1">{sessions}</span>
        </div>
      </div>
    </header>
  );
};

export default memo(TopMenu);
