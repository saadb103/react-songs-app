import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "I want it that way", duration: "2:45" },
    { title: "Voices", duration: "2:11" },
    { title: "Haunted", duration: "4:41" },
    { title: "Macarena", duration: "3:54" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
