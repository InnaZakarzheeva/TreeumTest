export const msToTime = (ms: number) => {
  return new Date(ms * 1000).toISOString().slice(14, -5);
};
