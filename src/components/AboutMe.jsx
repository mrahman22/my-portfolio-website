import React from "react";
import Footer from "./Footer";

function AboutMe() {
  return (
    <div className="flexbox-container">
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          Hi, thank you for visiting my portfolio wesbite. I am junior software
          developer open to new opportunities.
        </p>
        <p>
          After years of spending my life in jobs that I wasn't truly passionate
          about I decided to dip my toes into software developement on the
          advice from my father inlaw. I used my time in the evenings after work
          to work through some basic tutorials on HTML and CSS on Youtube. From
          there I purchased a course on Udemy which allowed me to further my
          knowledge with HTML and CSS. Once I was comfortable with HTML and CSS I repeated the
          same process with JavaScript. After only a few weeks of learning
          JavaScript I knew I had found something I truly enjoyed doing.
        </p>
        <p>
          Once I was confident programming was going to play a big role in my future, I
          decided that I was going to enroll at Northcoders bootcamp in January
          2020. I learnt more about JavaScript fundamentals and testing with
          mocha and chai. I learnt how to build REST API's. I learnt how to
          create SQL databases. I built front-end projects for all the backend
          projects I created, including mobile applications using react-native and AWS.
        </p>
        <p>
          I do have other passions than just coding though! I am a keen runner and
          can be found pounding the pavement most mornings. I also enjoy going
          out for hiking and walking with family and friends.
        </p>
        <p className="red">
          Please don't leave without having a look at my projects section. I hope
          this section can provide clear evidence of the skills that I have
          developed over time.
        </p>
        <p className="underline"></p>
      <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
