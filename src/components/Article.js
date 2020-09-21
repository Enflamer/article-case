import React, { useState } from "react";
import "../style/article.scss";
// import parser from "xml2json"

export default function Article(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => setIsOpen(!isOpen);

  return (
    <div
      className={isOpen ? "article__opened" : "article"}
      onClick={openHandler}
    >
      <hr className="article__line"></hr>
      <div className="article-topic">
        <div className="article-topic__title">{props.article.title}</div>
        <div className={isOpen? "article-topic-rectangle__opened" : "article-topic-rectangle"}></div>
      </div>
      {isOpen ? (
        <div dangerouslySetInnerHTML={{ __html: props.article.text }} />
      ) : null}
    </div>
  );
}
