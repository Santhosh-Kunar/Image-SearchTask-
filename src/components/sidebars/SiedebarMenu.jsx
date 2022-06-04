import React, { useContext } from 'react'
import { SidebarContext } from '../../apis/SidebarContext'
import HeaderMenu from './HeaderMenu';

const SiedebarMenu = () => {
    let { toggle, setToggle } = useContext(SidebarContext);
    let ShowSidebarMenu = () => {
    return (
      <nav
        className={`${toggle === true ? <SiedebarMenu /> : "close"} sidebar`}
        onClick={e => e.stopPropagation()}
      >
        <span
          style={{ backgroundColor: "orange",fontFamily:"sans-serif",fontSize:"50px",marginLeft:"-10px",height:"50px",width:"50px",paddingTop:"-50px" }}
          className="closeIcon"
          onClick={() => setToggle(!toggle)}
        >
         x
          <HeaderMenu />
        </span>
      </nav>
    );
  };
  return (
   <ShowSidebarMenu/>
  )
}

export default SiedebarMenu