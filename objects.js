var playlist = {Beyonce: "Single Ladies"};

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}