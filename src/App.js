import React from "react";
import './App.css';
import BroadRoutes from './routes/BroadRoutes';
import HeaderComponent from './component/headercomponent/HeaderComponent';
import FooterComponent from './component/footercomponent/FooterComponent';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <BroadRoutes />
    <FooterComponent />
    </BrowserRouter>
    </>
    );
}

export default App;
