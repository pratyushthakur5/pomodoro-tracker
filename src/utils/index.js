export const formatTimeForDisplay = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  return `
  ${hours ? `${hours} : ` : ""}
  ${minutes ? `${minutes} : ` : ""}
  ${seconds > 9 ? seconds : `0${seconds}`}
  `;
};
