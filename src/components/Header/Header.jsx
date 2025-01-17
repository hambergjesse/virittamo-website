// import context
import { useContext, useState } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import icons from assets
import { ReactComponent as Facebook_icon } from "../assets/facebook-icon.svg";
import { ReactComponent as Linkedin_icon } from "../assets/linkedin-icon.svg";
import { ReactComponent as Instagram_icon } from "../assets/instagram-icon.svg";

// import virittämö helsinki logo
import VirittamoLogo from "./assets/virittamo-helsinki.webp";

import { motion } from "framer-motion";

import { Hamburger } from "./Hamburger";
import { Hamburger_X } from "./Hamburger";

export const Header = () => {
  const { lang, setLocale, fi } = useContext(LanguageContext);
  const { home_page, projects, stories, contact } = lang.header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <ul className="header__nav--list">
      <li className="header__nav--list-item">
        <a href="/">{home_page}</a>
      </li>
      <li className="header__nav--list-item">
        <a href="/projects">{projects}</a>
      </li>
      <li className="header__nav--list-item">
        <a href="/stories">{stories}</a>
      </li>
      <li className="header__nav--list-item">
        <a href="/:contact">{contact}</a>
      </li>
    </ul>
  );

  const languageButton = (
    <button
      onClick={() => {
        setLocale(lang === fi ? "en" : "fi");
        localStorage.setItem("virittamo-lang", lang === fi ? "en" : "fi");
      }}
    >
      {lang === fi ? "EN" : "FI"}
    </button>
  );

  const socialIcons = (
    <section className="header__socials">
      <a
        href="https://www.facebook.com/virittamohelsinki/"
        alt="Virittämö Facebook Link"
        rel="noreferrer"
        target="_blank"
      >
        <Facebook_icon className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/company/virittamohelsinki/"
        alt="Virittämö Linkedin Link"
        rel="noreferrer"
        target="_blank"
      >
        <Linkedin_icon className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/virittamohelsinki/"
        alt="Virittämö Instagram Link"
        rel="noreferrer"
        target="_blank"
      >
        <Instagram_icon className="social-icon" />
      </a>
      <div className="header__language">{languageButton}</div>
    </section>
  );

  return (
    <main className="header__wrapper">
      <div className="header__container">
        <a href="/">
          <img src={VirittamoLogo} alt="Virittämö Helsinki" />
        </a>
        <nav className="header__nav">{navLinks}</nav>
        {socialIcons}
        {isMenuOpen ? (
          <Hamburger_X onClick={handleClick} />
        ) : (
          <Hamburger onClick={handleClick} />
        )}
      </div>
      {isMenuOpen && (
        <motion.div
          className="header__hamburgerMenu"
          initial={{ opacity: 0, ease: "easeInOut" }}
          animate={{ opacity: 1, ease: "easeInOut" }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <nav className="header__nav">{navLinks}</nav>
          {socialIcons}
        </motion.div>
      )}
    </main>
  );
};
