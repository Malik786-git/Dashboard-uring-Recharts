import React from 'react'

import { useContext } from 'react';
import myContext from '../../context/context';
const Advancesettings = () => {
    const { close } = useContext(myContext);


  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
     <h1 className='text-light container'>Advance settings</h1>
    </div>
  )
}


export default Advancesettings