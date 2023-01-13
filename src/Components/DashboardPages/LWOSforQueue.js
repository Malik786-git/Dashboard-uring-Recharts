import React from 'react'
import { useContext } from 'react';
import myContext from '../../context/context';



const LWOSforQueue = () => {
  const { close } = useContext(myContext);

  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
      <h1 className='text-light container'>
      LWOSforQueue
    </h1>
    </div>
  )
}



export default LWOSforQueue;