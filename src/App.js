import {Outlet} from "react-router";
import './App.css'
import TopNav from "./Components/TopNav";
//import menuBar from "./Components/menuBar.js"

export default function App () {
  return (
    <div className="App">
      <TopNav/>
      <div className="page-container">
        <Outlet/>
      </div>
    </div>
  )
}