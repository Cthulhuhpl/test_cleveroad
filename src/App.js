import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
