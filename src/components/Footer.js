import React from "react";
import "../style/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        © 2001– 2018 ООО <a className="footer__links" >«СпейсВэб»</a>
        <br /> Все права защищены.
        <br /> Лицензия <a className="footer__links" >№163230</a>
      </div>
      <div className="footer__contacts">
        <a className="footer__links" href="#">
          +7 (812) 334-12-22
        </a>{" "}
        (в Санкт-Петербурге)
        <br />{" "}
        <a className="footer__links" href="#">
          +7 (495) 663-16-12
        </a>{" "}
        (в Москве)
        <br />{" "}
        <a className="footer__links" href="#">
          (800) 100-16-15
        </a>{" "}
        (бесплатно по России)
      </div>
    </div>
  );
}
