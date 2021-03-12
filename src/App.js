import React from "react";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Router from "./routes/Router";

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Router />
      <AppFooter />
    </div>
  );
}

export default App;
