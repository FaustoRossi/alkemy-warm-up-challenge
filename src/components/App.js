import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "./LogIn";
import Home from "./Home";

function App() {
  return (
    // <LogIn />
    <BrowserRouter>
      <Route path="/" exact component={LogIn} />

      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
