
import React from 'react'
import "./main.css"

var counters=[{id:0, value:0}];

function initCounters({nCounters, initValue}){
  if(nCounters<0)
    throw new Error("not valid values")
  if(nCounters>0){
    counters=[]
    for(let i=0; i<nCounters;i++) {
      counters.push({id:i, value:initValue})
    }

  }
}


export default function Base() {
    return (
      <div>

      </div>
    )
}
