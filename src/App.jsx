import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [color, setColor] = useState('white')
  const[todoComponentColor, settodoComponentColor] = useState('black')

  // function changeColor(color){
  //     setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      {/* <div className='flex justify-center items-center'>
          <Todo color={todoComponentColor}/>
      </div> */}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-orange-500 px-3 py-2 rounded-3xl'>
           {/* <button
           onClick={()=>setColor(
            "red"
           )}
           className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'red'}}
           >Red</button>
            <button
            onClick={()=>setColor(
              "green"
             )}
           className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'green'}}
           >Green</button>
           <button
            onClick={()=>setColor(
              "orange"
             )}
           className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'orange'}}
           >Orange</button>
           <button
            onClick={()=>setColor(
              "black"
             )}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}
           >Black</button> */}
          <button
           onClick={()=>{setColor("white"); settodoComponentColor('black')}}
           className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'white'}}
          >Light Mode
          </button>
          <button
            onClick={()=>{setColor("black"); settodoComponentColor('white')}}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}
           >Dark Mode</button>
        </div>
      </div>
    </div>
  )
}

export default App
