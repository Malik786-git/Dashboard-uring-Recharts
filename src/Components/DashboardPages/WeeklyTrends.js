import React from 'react'

import { useContext } from 'react';
import myContext from '../../context/context';


const WeeklyTrends = () => {
  const { close } = useContext(myContext);
  
  
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
     <h1 className='text-light container'>   WeeklyTrends </h1>
      

    </div>
  )
}


export default WeeklyTrends
