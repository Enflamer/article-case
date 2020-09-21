import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import "./style/logbook.scss";
import axios from "axios";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://sweb.ru/export/turbojournal/", {})
      .then((response) => {
        let parser = new DOMParser();
        let htmlNodes = parser
          .parseFromString(response.data, "text/xml")
          .getElementsByTagName("item");
        let array = [];
        for (let index = 0; index < htmlNodes.length; index++) {
          let element = {
            title: htmlNodes[index].firstChild.innerHTML,
            text: htmlNodes[index].getElementsByTagName("turbo:content")[0]
              .innerHTML,
          };
          array.push(element);
        }

        setArticles(array);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <div className="app-main">
        <Navbar />
        <div className="logbook">
          <div className="logbook-info">
            <div className="logbook-info__balance">100.00 ₽</div>
            <div className="logbook-info-user logbook-info-user__bell">
              vikavishny
            </div>
            <div className="logbook-info__exit">Выйти</div>
          </div>
          <div className="logbook-page">
            <div className="logbook-page__title">Бортовой журнал</div>
            <div className="logbook-page__title logbook-page__title__second">
              Бортовой журнал
            </div>
            {articles.map((item, index) => (
              <Article key={index} article={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
