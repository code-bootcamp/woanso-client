export const getTimes = (value: string) => {
  const date = new Date(value);
  const now = new Date();
  const times = now.getTime() - date.getTime();
  const tt = times / 1000 / 60 / 60;
  const result = Math.floor(tt) + " 시간 전";
  return result;
};

export const getDays = (value: string) => {
  const date = new Date(value);
  const yyyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return String(`${yyyyy}.${mm}.${dd}`);
};
