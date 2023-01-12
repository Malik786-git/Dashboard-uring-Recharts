import React, { useContext } from "react";
import myContext from "../context/context";
import MenuList from "./SidebarContent/MenuList";


const Sidebar = () => {
  const { close, closeSidebar } = useContext(myContext);

  const menuData = [
    {
      title: "Dashboard",
      options: [
        "Primary Dashboard",
        "Avg. LWOS for Queue",
        "LWOS for Queue",
        "Weekly Trends",
      ],
      faClass: "fa fa-th-large",
      path: [
        '/dashboard/primary',
       '/dashboard/avgLWOSforqueue',
       '/dashboard/LWOSforqueue',
       '/dashboard/weeklytrends'
      ]
    },
    {
      title: "Reports",
      options: ["Weekly", "Demographic Report", "Daily Report"],
      faClass: "fa fa-line-chart",
      path: [
        '/reports/weekly',
       '/reports/demographicreport',
       '/reports/dailyreport',
      ]

    },
    {
      title: "Schedule",
      options: ["Email Scheduler", "SMS Alerts"],
      faClass: "fa fa-calendar",
      path: [
        '/schedule/emailscheduler',
       '/schedule/smsalerts',
      ]
    },
    {
      title: "Maintainance",
      options: ["Advance Settings"],
      faClass: "fa fa-cogs",
      path: ['/maintainance/advancesettings']
    },
  ]; 

  return (
    <div className={close ? "sidebar-hide" : "sidebar"}>
      <div className="close">
        <span onClick={closeSidebar}>X</span>
      </div>
      <div className="sidebar-heading">
        <i class="fa fa-cube dash-logo" aria-hidden="true"></i>
        <h2 className="dashboar_logo">EcMAI</h2>
      </div>
      <div className="sidebar-menu">
        <div className="menu">
          {menuData.map((data, index) => (
            <MenuList key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;