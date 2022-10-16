import React, { useEffect, useState } from "react";
import style from "../styles/hero.module.css";
import ReactTextTransition, { presets } from "react-text-transition";
import IconBody from "./misc/IconBody.component";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import bigMe from "../assets/images/big-me.png";

const Hero = () => {
  const texts = [
    "Programmer",
    "Tech Enthusiast",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Web Developer",
    "Mobile App Developer",
  ];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex) => textIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <section id="home" className={style.body}>
      <section className={style.content}>
        <section className={style.leftSide}>
          <h3 className={style.welcome}>welcome to my world</h3>
          <h1 className={style.h1}>
            Hi, I'm <span className={style.myName}>Edwin Ajong</span> <br />{" "}
            <span className={style.profession}>
              a{" "}
              {
                <ReactTextTransition
                  springConfig={presets.gentle}
                  style={{ margin: "0 4px" }}
                  inline
                >
                  {texts[textIndex % texts.length]}
                </ReactTextTransition>
              }
              .
            </span>
          </h1>
          <p className={style.bio}>
            I use animation as a third dimension by which to simplify
            experiences and building thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <section className={style.lowerLeft}>
            <div className={style.connect}>
              <p className={style.title}>Find me with</p>
              <div className={style.platforms}>
                <IconBody
                  key={1}
                  icon={<TwitterIcon sx={{ fill: "#c4cfde" }} />}
                  link={"https:twitter.com/eddybruv_"}
                />
                <IconBody
                  key={2}
                  icon={<LinkedInIcon sx={{ fill: "#c4cfde" }} />}
                  link={"https://www.linkedin.com/in/edwin-ajong/"}
                />
                <IconBody
                  key={2}
                  icon={<FacebookIcon sx={{ fill: "#c4cfde" }} />}
                  link={"https://www.facebook.com/eddybruv24"}
                />
              </div>
            </div>
            <div className={style.skill}>
              <p className={style.title}></p>
            </div>
          </section>
        </section>
        <section className={style.rightSide}>
          <div className={style.imgDiv}>
            <img src={bigMe} alt="" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
