export const formatTime = (seconds) => {
  if (seconds == null || isNaN(seconds)) {
    return null;
  } else if (seconds < 0) {
    return null;
  } else {
    return formatEngine(seconds);
  }
};

const formatEngine = seconds => {

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const secs = seconds % 60;

  return [hours, minutes, secs]
    .map(v => v < 10 ? '0' + v : v)
    .join(':');
};

