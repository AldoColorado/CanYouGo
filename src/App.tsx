import React, { useEffect }  from "react";
import logo from './logo.svg';
import './App.css';
import CanyouGo from './components/CanYouGo/CanYouGo';
import Sidebar from './components/Sidebar/Sidebar';
import { useApp } from "./hooks/useApp";
import {
  BrowserRouter as Switch,
  Routes,
  Route
} from "react-router-dom";
import NegocioInfo from "./components/NegocioInfo/NegocioInfo";
import { routes } from "./enum/routes";
import Header from "./components/Header/Header";

function App() {
   const {handleHideSidebar,id} = useApp();


  return (
   <React.Fragment>
     <Sidebar handleHideSidebar={()=>handleHideSidebar()} id={id}/>
     <Header handleHideSidebar={handleHideSidebar} id={id} />
    <Switch>
      <Routes>
        <Route index element={<CanyouGo handleHideSidebar={()=>handleHideSidebar()} id={id}/>}/>

        <Route path={routes.INFONEGOCIO} element={<NegocioInfo />} />
      </Routes>
    </Switch>
    
    
   </React.Fragment>
  );
}

export default App;
