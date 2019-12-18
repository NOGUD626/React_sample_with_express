// src/components/Themes.js
import React from "react";
import reducer from "../reducers/reducer";


// React Contextの作成
const ThemeContext = React.createContext();
// Reducer関数の初期値
const initialState = {
  color: {
    name: "Light",
    text: "#000000",
    back: "#FFFFFF"
  },
  user: null,

};

// コンテキストプロバイダーコンポーネント
function ThemeContextProvider(props) {
  // useReducerでreducer関数と初期値をセット
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    // コンテキストプロバイダーとしてuseReducerのstateとdispatchをコンテキストに設定
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

// コンテキストコンシュマーの作成(今回未使用)
const ThemeContextConsumer = ThemeContext.Consumer;

export {
  initialState,
  ThemeContext,
  ThemeContextProvider,
  ThemeContextConsumer
};