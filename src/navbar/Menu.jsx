import React, { useContext } from "react";
import { SidebarContext } from "../apis/SidebarContext";
import Styles from "./menu.module.css";
const Menu = () => {
  let { setToggle } = useContext(SidebarContext);
  return (
    <div className={Styles.menudiv}>
      <ul className={Styles.menuul}>
        <li>
          <a href="">Download-Songs</a>
        </li>
        <li>
          <button
            href="#"
            onClick={() => {
              setToggle(true);
            }}
          >
            Sign-In
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
