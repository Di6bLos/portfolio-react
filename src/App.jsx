import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from './components/layouts/Header.cmp';

import { ThemeContext } from "./context/Theme.context";

import './App.css'

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
