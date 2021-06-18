import Actions from "./actions";

export interface GlobalState {
  a: string;
  b: number;
}

const initialState: GlobalState = {
  a: "start",
  b: 1,
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
    case Actions.GO:
      return { ...state, a: "go", b: state.b + action.payload.gggg };
    case Actions.STOP:
      return { ...state, a: "stop" };
    case Actions.PLUS:
      // state.b++; --> usestate처럼 새로운 객체로 반환해줘야한다.
      return { ...state, b: state.b + 1 };
  }
  return state;
}

export default reducer;
