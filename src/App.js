import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { AppProvider } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Topbar from "./Components/Topbar";
import AvgLWOSforqueue from "./Components/DashboardPages/AvgLWOSforqueue";
import LWOSforQueue from "./Components/DashboardPages/LWOSforQueue";
import WeeklyTrends from "./Components/DashboardPages/WeeklyTrends";
import Primary from "./Components/DashboardPages/Primary";
import Weekly from "./Components/Reports/Weekly";
import DemographicReport from "./Components/Reports/DemographicReport";
import DailyReport from "./Components/Reports/DailyReport";
import Advancesettings from "./Components/Maintainance/Advancesettings";



function App() {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Sidebar />
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Dashboard menu */}
            <Route path="/dashboard/primary" element={<Dashboard />} />
            <Route path="/dashboard/avgLWOSforqueue" element={<AvgLWOSforqueue />} />
            <Route path="/dashboard/LWOSforqueue" element={<LWOSforQueue />} />
            <Route path="/dashboard/weeklytrends" element={<WeeklyTrends />} />
             {/* Report menu */}
            <Route path="/reports/weekly" element={<Weekly />} />
            <Route path="/reports/demographicreport" element={<DemographicReport />} />
            <Route path="/reports/dailyreport" element={<DailyReport />} />
             {/* Schedule menu */}
            <Route path="/schedule/emailscheduler" element={<Weekly />} />
            <Route path="/schedule/smsalerts" element={<DemographicReport />} />
             {/* Maintainance menu */}
            <Route path="/maintainance/advancesettings" element={<Advancesettings/>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}


export default App;