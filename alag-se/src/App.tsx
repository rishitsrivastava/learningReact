import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState("");
  const refe = useRef("");

  const handleButton = () => {
    console.log(val)
    console.log(refe.current)
    refe.current.focus();
  }

  return (
    <div>
      <h1>working with useref</h1>
      <label>enter the value you dumb fuck:  </label>
      <input ref={refe} type="text" placeholder='input 1' value={val} onChange={(e) => {setVal(e.target.value)}} />
      <button onClick={handleButton}>on Click</button>
    </div>
  )
}

export default App
