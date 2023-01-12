import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import myContext from "../context/context";
const Topbar = () => {

  const { close, openSidebar } = useContext(myContext);
  // get url path to show on top bar
  const location = useLocation();
  let path = location.pathname.split("/");
  path.shift();
  const [menu, option] = path;

  return (
    <>
      <nav
        className={
          close
            ? "TopbarFull navbar navbar-light"
            : "Topbar navbar navbar-light"
        }
      >
        <div className="container-fluid topbarItems">
          <span className="navbar-brand" onClick={openSidebar} >
            {close ? <i className="fa fa-bars" aria-hidden="true"></i> : ""}
          </span>
           <span className={close? `URLpathPadding`: `URLpath`}>
             {menu.charAt(0).toLocaleUpperCase() + menu.slice(1)} {">"} 
             {option.charAt(0).toLocaleUpperCase() + option.slice(1)}
            </span> 
          <figure className="user_img">
            <img src="/img/user1.png" width={45}/>
          </figure>
         
        </div>
      </nav>
    </>
  );
};



export default Topbar;