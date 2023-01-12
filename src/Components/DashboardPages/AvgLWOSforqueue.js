import React from 'react'

import { useContext } from 'react';
import myContext from '../../context/context';



const AvgLWOSforqueue = () => {
  const { close } = useContext(myContext);
 
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
     <h1 className='text-light'>   AvgLWOSforqueue </h1>

    </div>
  )
}

export default AvgLWOSforqueue
