import { io, Socket } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

let socket: Socket | null;

type SetSessions = (count: number) => void;

export const websocket = (setSessions: SetSessions) => {
  if (!socket) {
    socket = io(SOCKET_URL, { transports: ['websocket'] });

    socket.on('sessions', (count: number) => {
      setSessions(count);
    });
  }
  return socket;
};

export const disconnectWebsocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
