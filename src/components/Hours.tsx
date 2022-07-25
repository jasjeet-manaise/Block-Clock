import React from 'react'
import Blocks from './Blocks'
import { useEffect,useState } from 'react';

function Hours() {
  const date = new Date();
  const [hour, setHour] = useState(date.getHours())

  useEffect(()=>{
    const hr = setTimeout(() => {
      if(hour>=24){
        setHour(0)
      }
      else{
        setHour(hour+1)
      }
    }, 3600000);
    return () => clearTimeout(hr);
  },[hour])

  return (
    <Blocks num={hour>12?hour-12:hour} color="blue" isGrid={false}/>
  )
}

export default Hours