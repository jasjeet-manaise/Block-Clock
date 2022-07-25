import React from 'react'
import Blocks from './Blocks'
import { useEffect,useState } from 'react';


function Seconds() {
  const date = new Date();
  const [sec, setSec] = useState(date.getSeconds())

  useEffect(() => {
    const second = setTimeout(() => {
      if(sec>=60){
        setSec(0)
      }
      else{
        setSec(sec+1)
      }
      console.log(sec);
    }, 1000);
    return ()=> clearTimeout(second)
  }, [sec]);

  return (
    <div className="container">
        <div className="seconds">
            <Blocks num={Math.floor(sec/5)} color="red" isGrid={true}/>
        </div>
    </div>
  )
}

export default Seconds