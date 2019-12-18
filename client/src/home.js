import React from "react";
import { ThemeContext } from "./components/Themes";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import firebase from './js/firebase'
function Home(props) {
  // useContextでThemeContextのstateとdispatchを使用する(コンテキスト値)
  const { state, dispatch } = React.useContext(ThemeContext);

  // React.useEffect(
  //     () => {
  //       document.body.style.backgroundColor = state.color.back;
  //       document.body.style.color = state.color.text;
  //     },
  //     [state.color]
  // );

  // // "reset-color"をdispatchしてテーマリセットを行うハンドラ関数
  // const resetColor = () =>
  //     dispatch({
  //       type: "reset-color"
  //     });


    const login = () =>{
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
    }

    const logout = () =>{
        firebase.auth().signOut()
    }

    React.useEffect(
        () => {
            firebase.auth().onAuthStateChanged(user => {
                console.log(user);
                    dispatch({
                        type: "user-record",
                        payload: {
                            user:user,
                        }
                    });
            })
        },
        []
    );


  return (
      <>
      <p className="App-intro">
        UID: {state.user && state.user.uid}
        </p>

    {state.user ? (
        <button onClick={logout}>Google Logout</button>
    ) : (
    <button onClick={login}>Google Login</button>
    )}
<li><Link to='/home'>About</Link></li>
      </>
  );
}

export default Home;