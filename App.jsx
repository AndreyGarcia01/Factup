import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logoinsta from "./img/instagrano.jpg"
import Logoface from "./img/facebook.jpg"
import Logogo from "./img/google.jpg"
import Logogi from "./img/github.jpg"
import Logodi from "./img/discord.jpg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div class="w-340 h-16 bg-blue-300 absolute top-[0px] z-[9999]">
     <h1 className='text-blue-500'>FactUp</h1>
    </div>
    
    <div class="bg-gray-400 px-2 py-2 h-98 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div>
        <h2 class="text-2xl font-bold text-center mb-6">Log in to FactUp</h2>
    </div>

    <div class="mt-6 flex flex-col items-center">
        <p class="text-center text-gray-500">You can be our friend by login in with your best account</p>
        <div class="flex flex-col justify-center space-y-4 mt-8 w-43">

        <button class="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
            <img src={Logoinsta} class="w-6 h-6"/>
            <p class="text-[8px] font-bold">Log in with Instagram</p>
         </button>

        <button class="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">  
            <img src={Logoface} class="w-6 h-6"/>
            <p class="text-[8px]">Log in with Facebook</p>  
        </button>

        <button class="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
            <img src={Logogo} class="w-6 h-5"/> 
           <p class="text-[8px]">Log in with Google</p>
        </button>

        <button class="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
             <img src={Logogi} class="w-4 h-4"/>
            <p class="text-[8px]">Log in with Github</p>
        </button>

        <button class="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
             <img src={Logodi} class="w-4 h-4" />
            <p class="text-[8px]">Log in with Discord</p>
        </button>
        </div>

        <p class="w-full break-words text-sm text-center text-gray-500 absolute bottom-[10px]">*if you login on our app, you accept our terms and licenses</p>
    </div>
</div>
    </>
  )
}

export default App
