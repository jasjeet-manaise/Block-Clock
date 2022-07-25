import React from 'react'
import './Blocks.css'

type BlockProp ={
    num:number,
    color:string,
    isGrid:boolean
}

function Blocks(props:BlockProp) {
    let ColouredBlock=[],UncolouredBlock=[];
    for(let _i =0;_i<props.num;_i++){
        ColouredBlock.push(<div className={`hour cell ${props.color}`} style={{borderColor:props.color}}></div>)
    }
    for(let _i =props.num;_i<12;_i++){
        UncolouredBlock.push(<div className={`hour cell`} style={{borderColor:props.color}}></div>)
    }

  return (
    <div className="container">
        <div className={props.isGrid?"grid":""}>
            {ColouredBlock}
            {UncolouredBlock}
        </div>
    </div>
    )
}

export default Blocks