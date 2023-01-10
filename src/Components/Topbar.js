import { useContext, useState } from "react";
import myContext from "../context/context";
const Topbar = () => {
  const { close, openSidebar } = useContext(myContext);

  return (
    <>
      <nav
        className={
          close
            ? "TopbarFull navbar navbar-light"
            : "Topbar navbar navbar-light"
        }
      >
        <div className="container-fluid">
          <span className="navbar-brand" onClick={openSidebar} >
            {close ? <i class="fa fa-bars" aria-hidden="true"></i> : ""}
          </span>
          
        </div>
      </nav>
    </>
  );
};



export default Topbar;