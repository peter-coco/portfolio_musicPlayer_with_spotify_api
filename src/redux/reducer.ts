import Actions from "./actions";

export interface GlobalState {
  mainContentsModeIdx: number;
  musicList: string[];
  entraceCode: string;
  selectedMusicGenre: string;
  nameOfTitle: string;
  colorOfTitleBar: string;
  searchResult: string;
  searchBarOnOff: boolean;
}

const initialState: GlobalState = {
  mainContentsModeIdx: 0,
  musicList: [],
  entraceCode: "",
  selectedMusicGenre: "pop",
  nameOfTitle: "Recommand",
  colorOfTitleBar: "#72B1C5",
  searchResult: "",
  searchBarOnOff: false,
};

/**
 * while (true){
    wait LoginRequest
    if(success){
       // 로그인이 됐음으로 데이터 추가...
       wait LogoutRequest
       // 로그아웃이 됐음으로 데이터 제거...
    }
 * }
 * 
 */

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.CHANGE_MAIN_CONTENTS_MODE:
      return {
        ...state,
        mainContentsModeIdx: action.payload.modeNum,
        nameOfTitle: action.payload.nameOfTitle,
        colorOfTitleBar: action.payload.colorOfTitleBar,
      };
    case Actions.SET_API_ENTRACE_CODE:
      return { ...state, entraceCode: action.payload.apiEntraceCode };
    case Actions.CHOICE_MUSIC_GENRE:
      return {
        ...state,
        selectedMusicGenre: action.payload.genre,
        mainContentsModeIdx: 0,
        nameOfTitle: action.payload.nameOfTitle,
        colorOfTitleBar: action.payload.colorOfTitleBar,
      };
    case Actions.SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.searchResult,
      };
    case Actions.SET_SEARCH_MODE_ONOFF:
      return {
        ...state,
        searchBarOnOff: !state.searchBarOnOff,
      };
    // case Actions.RESET_MUSIC_LIST:
    //   return { ...state, musicList: action.payload.listFromApi };
    // case Actions.PLUS:
    //    state.b++; --> usestate처럼 새로운 객체로 반환해줘야한다.
    //   return { ...state, b: state.b + 1 };
  }
  return state;
}

export default reducer;
