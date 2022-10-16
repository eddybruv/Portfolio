import React from "react";
import miniMe from "../assets/images/mini-me.png";
import style from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <header className={style.header}>
      <section className={style.navBar}>
        <section className={style.pictureSection}>
          <div className={style.imageContainer}>
            <img src={miniMe} alt="header shot" />
          </div>
          <p className={style.eddyBruv}>EddyBruv_</p>
        </section>
        <section className={style.rightSide}>
          <nav className={style.navigation}>
            <ul className={style.linkContainer}>
              <li className={style.navListItems}>
                <a className={style.navLinks} href="#home">
                  Home
                </a>
              </li>
              <li className={style.navListItems}>
                <a className={style.navLinks} href="#features">
                  Features
                </a>
              </li>
              <li className={style.navListItems}>
                <a className={style.navLinks} href="#projects">
                  Projects
                </a>
              </li>
              <li className={style.navListItems}>
                <a className={style.navLinks} href="#resume">
                  Resume
                </a>
              </li>
              <li className={style.navListItems}>
                <a className={style.navLinks} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className={style.button}>Resume</button>
        </section>
      </section>
    </header>
  );
};

export default Navbar;
