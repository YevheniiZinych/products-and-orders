export const formatDateShort = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${String(date.getDate()).padStart(2, '0')} / ${String(date.getMonth() + 1).padStart(2, '0')}`;
};
