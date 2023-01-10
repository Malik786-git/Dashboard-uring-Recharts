import { useContext } from "react";
import myContext from "../context/context";
import QuestionAns from "./QuestionAns";
import data from '../data';


const Statis = () => {
  const { close } = useContext(myContext);

  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
     
     {
      data.map((item)=><QuestionAns data={item}/>)
     }

    </div>
  );
};

export default Statis;

