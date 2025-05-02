import { useState , } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'



function App() {
  const [length,setlength]=useState(8)
  const [numall,setnumall]=useState(false)
  const [charall,setcharall]=useState(false)
  const [pass,setpass]=useState("")






  const passRef=useRef(null)

  const copyTo= useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass)
  },[pass])



  const passgen =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMOPQRSTUVWXYZ"
    if(numall) str+="0123456789"
    if(charall) str +="!@#$%^&*()"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
    }
     setpass(pass)
    
  } ,[length,numall,charall,setpass])
  useEffect(()=>{
    passgen()
  },[length,numall,charall,setpass])
  

  return (
    <>
    <div className='bg-black h-screen fixed w-full'>
      <div className='bg-gray-400 inline-block   my-30 rounded-2xl  mx-80  p-3'>
        <div className='text-3xl flex justify-center m-4'>
          <p>Password Generator</p>
        </div>


      <div>
      <input className='bg-white rounded-xl  h-10 w-3xl m-3' type="text"
      ref={passRef}
      value={pass}
      readOnly 
      
      />
       <button className='bg-blue-600 h-10 w-15 m-2 rounded-2xl border border-black 
       hover:bg-blue-200' onClick={copyTo} >COPY</button>

      </div>
      <div >
        <input className="m-3 cursor-pointer   " type="range"
        min={8}
        max={15}
        value={length}
        onChange={(e)=>{setlength(e.target.value)}}
       />

        <label >Length {length}</label>


        <input  type="checkbox"
        className='m-3 ml-10 '
        defaultChecked={numall}
        onChange={()=>{
          setnumall((prev)=>!prev);
        }}
        />
        <label >Number{numall}</label>

        
        <input  type="checkbox"
        className='m-3 ml-10 '
        defaultChecked={charall}
        onChange={()=>{
          setcharall((prev)=>!prev);
        }}
        />
        <label >Character{charall}</label>

      </div>
    </div>
  </div>
     

    </>
  )
}

export default App
