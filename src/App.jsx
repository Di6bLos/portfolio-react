import { Outlet } from "react-router-dom";
import { Fragment } from 'react'
import Header from './components/Header.cmp';

import './App.css'

function App() {

  return (
   <Fragment>
    <Header />
    <Outlet />
   </Fragment>
  )
}

export default App
