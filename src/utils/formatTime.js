export const formatTime = (seconds) => {
  if (seconds == null || isNaN(seconds)) {
    return null;
  } else if (seconds < 0) {
    return null;
  } else {
    return formatTimeEngine(seconds);
  }
};

const formatTimeEngine = seconds => {

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const secs = seconds % 60;

  return [hours, minutes, secs]
    .map(v => v < 10 ? '0' + v : v)
    .join(':');
};

export const formatDate = (days) => {
  if (days == null) {
    return null;
  } else if (days <= 0) {
    return '';
  } else {
    return formatDateEngine(days);
  }
};

const formatDateEngine = days => {
  if (days > 1) {
    return days + ' days to summer!';
  } else {
    return days + ' day to summer!';
  }
};




/*
return leftToSummer + ' days to summer!';
} else {
  return leftToSummer + ' day to summer!';
}
*/
