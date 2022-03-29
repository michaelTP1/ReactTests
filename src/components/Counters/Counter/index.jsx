
import React from 'react'
import {useState} from 'react'
import "./main.css"
import CountButton from "./CountButton"

const Counter=(props)=>{
  const {id, counter, onIncrement, onDecrement, onDelete, color}=props;

return(
  <div id={id} className= 'contenedor' color={color}>
    <h1>{counter.value}</h1>
    <CountButton onClick={()=>onIncrement(id)} buttonText='up'/>
    <CountButton onClick={()=>onDecrement(id)} buttonText='down'/>
    <button onClick={()=>onDelete(id)}>Delete</button>
  </div>
)
}

export default Counter;