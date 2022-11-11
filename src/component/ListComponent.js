import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

const ListComponent = (props) => {
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        console.log(count)
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }
    return (

        <div className="d-flex flex-row" style={{paddingTop:"2rem",paddingBottom:"1rem",paddingLeft:"3rem"}}>
       {props.add &&<div> counter {props.text+1}    <Button onClick={increaseCount} style={{backgroundColor:"blue",color:"white"}}>+</Button>
         <Button >{count}</Button>
            <Button onClick={decreaseCount} style={{backgroundColor:"blue",color:"white"}}>-</Button></div>}
            {props.submit && <div>counter {props.text+1} <Button >{count}</Button></div> }
        </div>
        
       
    );

};

export { ListComponent };