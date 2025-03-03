import { useState } from 'react';
import './App.css'

function Navbar() {
  const [active, setactive] = useState(Number)

  return (
    <>
      <nav>
        <div className="navi1" onClick={()=> {setactive(1)}} style={active == 1? {
          filter: 'drop-shadow(0 0 5px #FCA311)',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }   :  
        {flex: 1}}>
          Projects
        </div>
        <div className="navi2" onClick={()=> {setactive(2)}} style={active == 2? {
          filter: 'drop-shadow(0 0 5px #FCA311)',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }   :  
        {flex: 1}}>
          Home
        </div>
        <div className="navi2" onClick={()=> {setactive(3)}} style={active == 3? {
          filter: 'drop-shadow(0 0 5px #FCA311)',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }   :  
        {flex: 1}}>
          Contact Me
        </div>
      </nav>
    </>
  );
}

function Showcase() {
  return (
    <>
      <div className='showcase-cont'>
        <div className='showcase-title'>
          Hi
        </div>
        <div className='showcase-desc'>
          My name is Ethan and I code stuff 
        </div>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <Navbar />
      <Showcase />
    </>
  )
}

export default App
