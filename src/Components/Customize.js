import { useContext } from "react";
import myContext from "../context/context";
import Review from "./Review";


const Customize = () => {
    const { close } = useContext(myContext);
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
      <h1 className="text-center py-5">Reviews</h1>
          <Review/>      
    </div>
  )
}

export default Customize
