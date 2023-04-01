import { Outlet } from "react-router-dom";
import { useContext } from "react";
import NavBar from './components/layouts/NavBar.cmp';

import { ThemeContext } from "./context/Theme.context";

import './App.scss'

function App() {
  const {theme} = useContext(ThemeContext);
  return (
   <div id={theme}>
    <NavBar />
    <Outlet />
    </div>
  )
}

export default App
