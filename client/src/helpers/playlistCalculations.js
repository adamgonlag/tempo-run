export const convertMillisecondsToString = (milliseconds) => {
  // Convert to h:mm:ss
  var date = new Date(null);
  date.setSeconds(milliseconds / 1000);

  return date.toISOString().substr(14, 5);
  // return milliseconds.toString;
};

export const playlistDuration = (playlist) => {
  if (playlist.length < 1) return;
  const milliseconds = playlist
    .map((track) => track.duration_ms)
    .reduce((total, trackDuration) => {
      return total + trackDuration;
    });
  // Convert to h:mm:ss
  var date = new Date(null);
  date.setSeconds(milliseconds / 1000);

  return date.toISOString().substr(11, 8);
  // return milliseconds.toString;
};
