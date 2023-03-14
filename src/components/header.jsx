import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  function scrollToSection(id) {
    setActive(id);
    const section = document.getElementById(id);
    const header = document.querySelector("header");

    if (section && header) {
      const headerHeight = header.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  }

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <header role="header" className="header">
      <div className="container">
        <h1>A E</h1>
        <nav>
          <FontAwesomeIcon
            icon={faBars}
            className="menu-icon"
            onClick={handleClick}
          />
          <ul className={open ? "open" : ""}>
            <li
              className={active === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className={active === "skills" ? "active" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li
              className={active === "about-me" ? "active" : ""}
              onClick={() => scrollToSection("about-me")}
            >
              About Me
            </li>
            <li
              className={active === "projects" ? "active" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className={active === "contacts" ? "active" : ""}
              onClick={() => scrollToSection("contacts")}
            >
              Contacts
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
