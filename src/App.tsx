import React, { useEffect }  from "react";
import logo from './logo.svg';
import './App.css';
import CanyouGo from './components/CanYouGo/CanYouGo';
import Sidebar from './components/Sidebar/Sidebar';
import { useApp } from "./hooks/useApp";

function App() {
   const {handleHideSidebar,id} = useApp();


  return (
   <React.Fragment>
    <Sidebar handleHideSidebar={()=>handleHideSidebar()} id={id}/>
    <CanyouGo handleHideSidebar={()=>handleHideSidebar()} id={id}/>
   </React.Fragment>
  );
}

export default App;
