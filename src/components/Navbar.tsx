import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".header ul a");
    const handleClick = (event: MouseEvent) => {
      if (window.innerWidth <= 1024) return;
      event.preventDefault();
      const target = (event.currentTarget as HTMLAnchorElement).dataset.href;
      if (target) {
        document.querySelector(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });
    return () => links.forEach((elem) => elem.removeEventListener("click", handleClick));
  }, []);
  return (
    <>
      <div className="header">
        <a href="#landingDiv" className="navbar-title" data-cursor="disable">
          MG
        </a>
        <a
          href="mailto:mayankgoyal587@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          mayankgoyal587@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
