import React from "react";
import { ThemeContext } from "./components/Themes";
//import MyForm from "./MyForm";

function Home2(props) {
  // useContextでThemeContextのstateとdispatchを使用する(コンテキスト値)
  const { state, dispatch } = React.useContext(ThemeContext);

  // state.colorの変更に併せてスタイルを変更する
  // データの購読は state.color が変更された場合にのみ再作成されるようになりま
  React.useEffect(
      () => {
        document.body.style.backgroundColor = state.color.back;
        document.body.style.color = state.color.text;
      },
      [state.color]
  );

  // "reset-color"をdispatchしてテーマリセットを行うハンドラ関数
  const resetColor = () =>
      dispatch({
        type: "reset-color"
      });

  // "chnage-color"をdispatchしてテーマ変更を行うハンドラ関数
  // payloadには変更する値が入る
  const setColor = color => () =>
      dispatch({
        type: "change-color",
        payload: {
          color: { name: color.name, text: color.text, back: color.back }
        }
      });

  return (
      <>
      <p> UID:{state.user.uid} </p>
        <h1>テーマカスタマイズ</h1>
        <p>現在の情報</p>
        <ul>
          <li>テーマ名: {state.color.name}</li>
          <li>文字色: {state.color.text}</li>
          <li>背景色: {state.color.back}</li>
        </ul>
        <h2>新しいテーマを作成</h2>
        <p>16進数と色名（例:red）での指定が可能です。</p>
        {/* テーマ変更のボタン */}
        <button onClick={setColor({
          name: "Dark", text: "#ffffff", back: "#000000"
        })}>
          変更
        </button>
        <button onClick={resetColor}>初期テーマにリセット</button>
      </>
  );
}

export default Home2;