import React from "react";
import "./About.css";
import avatar from "../../images/avatar.jpg";

function About() {
  return (
    <section className="about">
      <img src={avatar} alt="Avatar" className="about__ava" />
      <div className="about__container">
        <p className="about__title">Об авторе</p>
        <p className="about__intro">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__intro">
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
}

export default About;
