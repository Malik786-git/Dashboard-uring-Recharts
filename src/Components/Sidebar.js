import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import myContext from '../context/context'

const Sidebar = () => {
  const {close, closeSidebar} = useContext(myContext);

  return (

    <div className={close? 'sidebar-hide': 'sidebar'}>
      <div className="close">
        <span
        onClick={closeSidebar}
        >X</span>
      </div>
       <div className="sidebar-heading">
      
          <i className="fa fa-window-maximize" aria-hidden="true"></i>
          <h2 className='dashboar_logo'>EcMAI</h2>
       </div>
       <div className="sidebar-menu">
        <div className='menu'>
           {/* <h3>
           <NavLink  activeClassName="active" to="/" >Dashboard</NavLink>
           </h3>
           <h3>
           <NavLink  activeClassName="active" to="/admin" >Admin</NavLink>
           </h3>
           <h3>
           <NavLink  activeClassName="active" to="/static" >Statistics</NavLink>
            </h3>
           <h3>
           <NavLink  activeClassName="active" to="/customize" >Reviews</NavLink>
           </h3>
           <h3>
           <NavLink  activeClassName="active" to="/setting" >Setting</NavLink>
           </h3> */}

           
        </div>
       </div>
    </div>
  )
}


export default Sidebar;