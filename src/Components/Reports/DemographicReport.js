import React from "react";
import { useContext } from "react";
import myContext from "../../context/context";

const DemographicReport = () => {
  const { close } = useContext(myContext);
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
      <h1 className="text-light container">DemographicReport</h1>
    </div>
  );
};

export default DemographicReport;
