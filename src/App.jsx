import './App.css'
import Count from './components/Count'
import ScrollTop from './components/scroll'

function App() {

  return (
    <div className="App">
      
          <Count init={5} buttonText='button '/>
       <ScrollTop/>
    </div>
  )
}

export default App
