import { HashLink as Link } from "react-router-hash-link";

import classes from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav>
      <div className={classes["nav__bar"]}>
        <div className={classes["logo__box"]}>
          <Link className={classes["logo__text"]} to="#home">
            Logo
          </Link>
        </div>

        <ul className={classes["nav__link"]}>
          <li>
            <Link to="#about-me" smooth>
              HOME
            </Link>
          </li>
          <li>
            <Link to="#resume" smooth>
              MISSION & POLICY
            </Link>
          </li>
          <li>
            <Link to="#my-works" smooth>
              GET TO KNOW DANIEL
            </Link>
          </li>
          <li>
            <Link className="border-r" to="#contact" smooth>
              JOIN THE TEAM
            </Link>
          </li>
        </ul>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.menu}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={props.onClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Nav;
