import React from 'react'
import Logo from './Logo'
// import Menu from './Menu';
import Search from './Search'
import Styles from "./navbar.module.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <section className={Styles.navbarSection}>
        <div className={Styles.navbarDiv}>
          <Logo />
          {/* <Search /> */}
          {/* <Menu /> */}
          <Link
            style={{
              textDecoration: "none",
              fontFamily: "sans-serif",
              textTransform:"uppercase",
              color: "orange",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
            to="/songs"
          >
            Phone
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
            to="/carosule"
          >
            carousel
          </Link>
        </div>
      </section>
    );
}

export default Navbar