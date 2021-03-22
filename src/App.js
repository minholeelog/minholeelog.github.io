import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Router from "./routes/Router";
import "./assets/styles/global.css";

const info = {
  email: "mailto:minholee.log@gmail.com",
  github: "https://www.github.com/minholeelog",
  username: "minholeelog",
};

function App() {
  return (
    <div className='App'>
      <AppHeader info={info} />
      <Router />
      <AppFooter info={info} />
    </div>
  );
}

export default App;
