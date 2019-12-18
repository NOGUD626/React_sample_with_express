// reducers/reducer.js
import { initialState } from "../components/Themes";

// reducer関数
// スプレッド構文
// ...（ピリオド３つ） と書きます。
// 配列ライクなオブジェクト（正確には for of で展開できるオブジェクト）を個々の値に展開することができる。
const reducer = (state, action) => {
  switch (action.type) {
    case "change-color":
      return { ...state,...action.payload };
    case "reset-color":
      return initialState;
    case "user-record":
      return { ...state,...action.payload };
    default:
      return state;
  }
};

export default reducer;