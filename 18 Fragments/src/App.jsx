import './App.css'
import React from 'react' 

function App() {
 let warriors = ["Maharathi Radheya Ravindra", "Highness Yuvarani Sruthi", "Srujan", "Yok Shit", "Sanvika pit"]
 
  return (
    <>
      <h1>Strong Warriors of the Empire</h1>
      {warriors.length >= 3 ? <h3>In Highness Yuvarani Sruthi's Empire Maharathi Ravindra is General</h3> : null }
      <ul className="list-group">
        {warriors.map((warrior) => (<li key={warrior} className='list-group-item'>{warrior}</li>))}
      </ul>
    </>
  )
}

export default App
