import Actions from "./actions";
import SpotifyWebApi from "spotify-web-api-node";

export interface Music {
  title: string;
  artist: string;
  album: string;
  albumImg: string;
  popularity: number;
  url: string;
}

export interface GlobalState {
  mainContentsModeIdx: number;
  musicList: string[];
  entraceCode: string;
  accessTokenNow: string;
  selectedMusicGenre: string;
  nameOfTitle: string;
  colorOfTitleBar: string;
  searchResult: string;
  searchBarOnOff: boolean;
  searchBarEnterOnOff: boolean;
  trackList: Music[];
  trackNow: Music;
  spotifyApi: SpotifyWebApi;
}

const initialState: GlobalState = {
  mainContentsModeIdx: 0,
  musicList: [],
  entraceCode: "code",
  accessTokenNow: "",
  selectedMusicGenre: "pop",
  nameOfTitle: "Recommand",
  colorOfTitleBar: "#72B1C5",
  searchResult: "",
  searchBarOnOff: false,
  searchBarEnterOnOff: false,
  trackList: [],
  trackNow: {
    title: "",
    artist: "",
    album: "",
    albumImg: "",
    popularity: 0,
    url: "",
  },
  spotifyApi: new SpotifyWebApi({
    clientId: "e4ef76d98ff348cfbe2fe41f11d87279",
  }),
};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.CHANGE_MAIN_CONTENTS_MODE_TO_MAIN:
      return {
        ...state,
        mainContentsModeIdx: 0,
        nameOfTitle: "Recommand",
        colorOfTitleBar: "#72B1C5",
        selectedMusicGenre: "pop",
      };
    case Actions.CHANGE_MAIN_CONTENTS_MODE_TO_GENRE:
      return {
        ...state,
        mainContentsModeIdx: 1,
        nameOfTitle: "Genre",
        colorOfTitleBar: "#7972C5",
      };
    case Actions.CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH:
      return {
        ...state,
        mainContentsModeIdx: state.mainContentsModeIdx,
        searchBarOnOff: action.payload.searchBarOnOff,
      };
    case Actions.SET_API_ENTRACE_CODE:
      return { ...state, entraceCode: action.payload.apiEntraceCode };
    case Actions.SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.searchResult,
      };
    case Actions.SET_SEARCH_ENTER_ACTIVATED:
      return {
        ...state,
        mainContentsModeIdx: 3,
        searchBarEnterOnOff: !state.searchBarEnterOnOff,
        nameOfTitle: `search result : ${state.searchResult}`,
        colorOfTitleBar: "#D96BC1",
        searchBarOnOff: false,
      };
    case Actions.SET_TRACK_LIST:
      return {
        ...state,
        trackList: action.payload.trackList,
      };
    case Actions.SET_ACCEES_TOKEN_NOW:
      return {
        ...state,
        accessTokenNow: action.payload.accessTokenNow,
      };
    case Actions.CHOICE_MUSIC_GENRE:
      return {
        ...state,
        selectedMusicGenre: action.payload.genre,
        mainContentsModeIdx: 0,
        nameOfTitle: action.payload.nameOfTitle,
        colorOfTitleBar: action.payload.colorOfTitleBar,
      };
  }
  return state;
}

export default reducer;
