import React, { useEffect, useState } from "react";
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Switch, Route } from "react-router-dom";

function App() {
  return <div>
    <NavBar/>
    <Home/>
  </div>;
}

export default App;
