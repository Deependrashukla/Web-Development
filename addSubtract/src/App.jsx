import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayComponent from './components/DisplayComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

function increment(){
  setCount(count + 1)
}

function decrement(){
  setCount(count - 1)
}

function renderButton(){
  if(count > 0){
    return <button onClick = {decrement}>Subtract</button>
  }
  else{
    return null
  }
}

  return (
    <>
      <button onClick={increment}>Add</button>
      <DisplayComponent count={count} /> 
      {/* {count > 0 && (<button onClick={decrement}>Subtract</button>)} */}
      {renderButton()}
    </>
  )
}

export default App
