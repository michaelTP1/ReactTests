import React from "react";
import "./main.css";
import Counter from "./Counter";
import { useState } from "react";

const combination = "5-6-2-1";

function initCounters({ nCounters, initValue }) {
  var counters = [];
  if (nCounters < 0) throw new Error("not valid values");
  if (nCounters > 0) {
    counters = [];
    for (let i = 0; i < nCounters; i++) {
      counters.push({ id: i, value: initValue });
    }
  }
  return counters;
}

const Counters = (props) => {
  const [counters, setCounters] = useState(initCounters(props));

  function checkCombination() {
    //find the combination sequence in the counters array and delete all if is found
    var currentCombination = "";
    var combinationArray =combination.split("-");
    var combinationIndex = 0;
    var countersIndex = 0;
    console.log(combinationArray)
    while (combinationIndex < combinationArray.length && countersIndex < counters.length) {
      if (combinationArray[combinationIndex] == counters[countersIndex].value) {
        currentCombination += counters[countersIndex].id;
        combinationIndex++;
        countersIndex++;
      } else {
        currentCombination="";
        countersIndex++;
      }
      console.log(currentCombination);
    }
    if (combinationIndex == combinationArray.length) {
      setCounters([]);
    }

  }

  function handleIncrement(id) {
    //find the counter on counters array and increment it
    counters.find((c) => c.id === id).value++;
    setCounters([...counters]);
    checkCombination();
  }

  //find the counter on counters array and decrement it only if value is greater than 0
  function handleDecrement(id) {
    var counter = counters.find((c) => c.id === id);
    if (counter.value > 0) 
      counter.value--;

    setCounters([...counters]);
    checkCombination();
  }
  function incrementAll() {
    counters.map((c) => c.value++);
    setCounters([...counters]);
    checkCombination();
  }
  //decrement all counters only if value is greater than 0
  function decrementAll() {
    counters.map((c) => c.value > 0 && c.value--);
    setCounters([...counters]);
  }
  function resetCounters() {
    counters.map((c) => (c.value = 0));
    setCounters([...counters]);
    checkCombination();
  }
  function handleDelete(id) {
    counters.splice(
      counters.findIndex((c) => c.id === id),
      1
    );
    setCounters([...counters]);
    checkCombination();
  }
  //function that get the first available unique id from counters
  function getUniqueId() {
    var id = 0;
    while (counters.find((c) => c.id === id)) {
      id++;
    }
    return id;
  }

  /*add nCounters elements to counters array with unique id. If ncounters <=0 or >10 ad only 1*/
  function addCounters(nCounters) {
    if (nCounters <= 0 || nCounters > 10) nCounters = 1;
    for (let i = 0; i < nCounters; i++) {
      counters.push({ id: getUniqueId(), value: 0 });
    }
    setCounters([...counters]);
    checkCombination();
  }

  return (
    <div className="counters">
      {counters.map((counter) => (
        <Counter
          id={counter.id}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          key={counter.id}
          counter={counter}
        />
      ))}
      <input id="nCounters" type="number" />
      <button
        onClick={() => addCounters(document.getElementById("nCounters").value)}
      >
        Add Counters
      </button>
      <br />
      <button onClick={incrementAll}>incrementAll</button>
      <button onClick={decrementAll}>decrementAll</button>
      <button onClick={resetCounters}>Reset</button>
    </div>
  );
};
export default Counters;
