import Actions from "./actions";

export interface GlobalState {
  mainContentsModeIdx: number;
  musicList: string[];
}

const initialState: GlobalState = {
  mainContentsModeIdx: 0,
  musicList: [],
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
    case Actions.MAIN_CONTENTS_MODE_CHANGE:
      return { ...state, mainContentsModeIdx: action.payload.modeNum };
    case Actions.RESET_MUSIC_LIST:
      return { ...state, musicList: action.payload.listFromApi };
    // case Actions.PLUS:
    //    state.b++; --> usestate처럼 새로운 객체로 반환해줘야한다.
    //   return { ...state, b: state.b + 1 };
  }
  return state;
}

export default reducer;
