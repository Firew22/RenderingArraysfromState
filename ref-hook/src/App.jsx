import {useRef,useState} from 'react'

import './App.css'

function App() {
 const ref = useRef(0)
 ref.current = 0
 function handleClick(){
   ref.current = ref.current + 1
   alert('clicked'+ ref.current +'times')

 }
  return (
    <>
      Hello
    </>
  )
}

export default App
