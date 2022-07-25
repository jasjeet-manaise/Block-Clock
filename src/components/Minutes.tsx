import React from 'react'
import Blocks from './Blocks'
import { useEffect,useState } from 'react';


function Minutes() {
  const date = new Date();
  const [min, setMin] = useState(date.getMinutes())
  useEffect(()=>{
    const minute = setTimeout(() => {
      if(min>=60){
        setMin(0)
      }
      else{
        setMin(min+1)
      }
    }, 60000);
    return () => clearTimeout(minute);
  },[min])
  return (
    <Blocks num={Math.floor(min/5)} color="green" isGrid={false}/>
  )
}

export default Minutes