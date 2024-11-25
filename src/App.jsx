import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="container mx-auto bg-red-100 rounded-xl my-4 p-3 min-h-[80vh]">
      <div className="addTodo my-4">
        <h2 className="text-lg font-bold">Add a Todo</h2>
        <input type="text" className='w-1/2 h-8 rounded-md'/>
        <button className='bg-red-500 hover:bg-red-700 font-bold mx-2 my-1 text-red-200 px-2 py-1 rounded-lg'>Add</button>
      </div>
        <h2 className='text-lg font-bold'>Yours Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="buttons">
              <button className='bg-red-500 hover:bg-red-700 font-bold mx-3 -my-1 text-red-200 px-2 py-1 rounded-lg'>Edit</button>
              <button className='bg-red-500 hover:bg-red-700 font-bold mx-1 -my-1 text-red-200 px-2 py-1 rounded-lg'>Delete</button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
