import React, { useState, useEffect } from "react";
import Article from "./components/Article";
import "./App.css";
import "./style/logbook.scss";
import "./style/navbar.scss";
import axios from "axios";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://sweb.ru/export/turbojournal/", {})
      .then((response) => {
        var convert = require("xml-js");
        const result = convert.xml2json(response.data, {
          compact: true,
          spaces: 4,
        });
        let json = JSON.parse(result);
        console.log(json.rss.channel.item['title']);
        setArticles(json.rss.channel.item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className="app">
      <div className="navbar"></div>
      <div className="logbook">
        <div className="logbook-page">
          <div className="logbook-page__title">Бортовой журнал</div>
          <div className="logbook-page__title">Бортовой журнал</div>
          {articles.map((item, index) => (
            <Article 
              key={index} 
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
