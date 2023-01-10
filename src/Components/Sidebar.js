import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import myContext from '../context/context'
import MenuList from './SidebarContent/MenuList';

const Sidebar = () => {
  const {close, closeSidebar} = useContext(myContext);
  const [openDropDown, setDropDown] = useState(false);

  const menuData = [
    {
      title: "Dashboard",
      options : ['Primary Dashboard',
       'Avg. LWOS for Queue',
        'LWOS for Queue',
         'Weekly Trends'],
         faClass: 'fa fa-th-large'
    },
    {
      title: "Reports",
      options : ['Weekly',
       'Demographic Report',
        'Daily Report'],
        faClass: 'fa fa-line-chart'
    },
    {
      title: "Schedule",
      options : ['Email Scheduler', 'SMS Alerts'],
      faClass: 'fa fa-calendar'
    },
    {
      title: "Maintainance",
      options : ['Advance Settings'],
      faClass: 'fa fa-cogs'
    },
  ]

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
             {
              menuData.map((data, index)=> <MenuList key={index} data={data}/>)
             }

              {/* <MenuList/> */}






           {/* <div className="menu-items">
            <div className="menu-head d-flex justify-content-between dropdown dropdown-6"
            onClick={()=> setDropDown(!openDropDown)}
            >
           <h3 >
           <i class="fa fa-th-large" aria-hidden="true"></i>
           &nbsp;Dashbaord 
          
          </h3>
         
            {
              openDropDown ? <span>&#8743;</span>  : <span>&#8744;</span>
            }
           
      
            </div>
          <ul className={openDropDown? "drop-down-show nested-list" : "drop-down nested-list"}>
            <li>Primary Dashboard</li>
            <li>Avg. LWOS for Queue</li>
            <li>LWOS for Queue</li>
            <li>LWOS River Flow</li>
            <li>Weekly Trends</li>
          </ul>
           </div> */}
{/*            
           <div className="menu-items">

           <h3>
            Dashbaord  
          </h3>
          <ul>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
          </ul>
           </div>
           
           <div className="menu-items">

           <h3>
            Dashbaord  
          </h3>
          <ul>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
      
          </ul>
           </div>
           <div className="menu-items">

           <h3>
            Dashbaord  
          </h3>
          <ul>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
   
          </ul>
           </div>
           <div className="menu-items">

           <h3>
            Dashbaord  
          </h3>
          <ul>
            <li>Primary Dashboard</li>
            <li>Primary Dashboard</li>
          </ul>
           </div> */}
           
        </div>
       </div>
    </div>
  )
}


export default Sidebar;