import React, { useState } from "react";

const MenuList = ({ data }) => {
  const [openDropDown, setDropDown] = useState(true);
  console.log(data);
  return (
    <>
      <div className="menu-items">
        <div
          className="menu-head d-flex justify-content-between dropdown dropdown-6"
          onClick={() => setDropDown(!openDropDown)}
        >
          <h3>
            <i class={data.faClass} aria-hidden="true"></i>
            &nbsp;{data.title}
          </h3>

          {openDropDown ? (
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>
        <ul
          className={
            openDropDown
              ? "drop-down-show nested-list"
              : "drop-down nested-list"
          }
        >
          {data.options.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
