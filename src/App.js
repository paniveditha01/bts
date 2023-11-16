import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
const App = () => {

  function clickme(){
    console.log("action done");
  }
  
  return (
    <div className="container">

      <div className="header"><Header/></div>
      <div className="body"><Body fun={clickme} /></div>
    </div>
  )
}

export default App