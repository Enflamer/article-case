import React from "react";
import Art from "./components/Article";
import "./App.css";
import "./style/logbook.scss";
import "./style/navbar.scss";

function App() {
  return (
    <div className="app">
      <div className="navbar"></div>
      <div className="logbook">
        <div className="logbook-page">
          <div className="logbook-page__title">Бортовой журнал</div>
          <div className="logbook-page__title">Бортовой журнал</div>
          <Art></Art>
        </div>
      </div>
    </div>
  );
}

export default App;
