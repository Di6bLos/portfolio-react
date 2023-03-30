import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from './components/Header.cmp';

import { ThemeContext } from "./context/Theme.context";

import './App.scss'

function App() {
  const {theme} = useContext(ThemeContext);
  return (
   <div id={theme}>
    <Header />
    <Outlet />
    </div>
  )
}

export default App
