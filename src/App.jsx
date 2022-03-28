import react from "react";
import "./App.css";
import Counters from "./components/Counters";


function App() {
  return (
    <div className="App">
      <Counters className="counters" nCounters={3} initValue={4} />
    </div>
  );
}

export default App;
