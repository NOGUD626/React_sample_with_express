import React, {Component} from 'react'
import {ThemeContextProvider} from "./components/Themes";
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './home'
import Home2 from './home2'
/*ルーティングさせるためのメインコンポーネント*/

const App = () => (
    < ThemeContextProvider >
    < BrowserRouter >
    < div >
    < Route exact path = '/' component = {Home}/>
    < Route exact path = '/home' component = {Home2}/>
    < /div>
    < /BrowserRouter>
    < /ThemeContextProvider>
)


export default App;

