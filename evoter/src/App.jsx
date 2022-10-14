import { useState } from 'react'
import './App.css'
import Child from './Child'
import Voter from './Voter'
function App() {
  const [age, setAge] = useState(18)

  return (
    <div className="App">
        <input className='input' type="text" value={age} onChange={e => setAge(e.target.value)} />
        {age >= 18 ? <Voter age={age} /> : <Child age={age} />}
    </div>
  )
}

export default App
