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
    const [isLoginVisible, setIsLoginVisible] = useState(false); 
  
    const handleSignInClick = () => {
      setIsLoginVisible(prevState => !prevState); 
    };
  
    return (
      <>


        <div className="w-340 h-16 absolute top-[0px] z-[9999] font-graphik-regular" style={{ backgroundColor: '#9B1536' }}>
          <h1 className="text-opacity-0 font-graphik-regular" style={{ color: '#C0C0C0' }}>FactUp</h1>
          <button className="absolute right-5 top-3" type="button" onClick={handleSignInClick}> Join Us </button>
        </div>

       



        <div className="absolute items-center justify-end w-full text-center right-5 top-25">
  <main className="flex flex-col items-center w-full p-5">
    <section className="mb-10 max-w-2xl">
      <h2 className="text-2xl font-semibold">About Us</h2>
      <p className="mt-2 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section className="mb-10 max-w-2xl">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <p className="mt-2 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </section>
  </main>
</div>
































<div className="w-full h-20 absolute bottom-0 z-[9999] font-graphik-regular bg-[#9B1536] p-2 flex flex-col">
  <h2 className="text-lg font-semibold text-white text-left pl-2">Contact Us</h2>

</div>












        
















        {isLoginVisible && (
          <div className="bg-gray-400 px-2 py-2 h-98 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div>
              <h2 className="text-2xl font-bold text-center mb-[-17]">Log in to FactUp</h2>
            </div>
  
            <div className="mt-6 flex flex-col items-center">
              <p className="text-center text-gray-500">You can be our friend by login in with your best account</p>
              <div className="flex flex-col justify-center space-y-4 mt-8 w-43">
  
                <button className="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
                  <img src={Logoinsta} className="w-6 h-6" />
                  <p className="text-[8px] font-bold">Log in with Instagram</p>
                </button>
  
                <button className="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
                  <img src={Logoface} className="w-6 h-6" />
                  <p className="text-[8px] font-bold">Log in with Facebook</p>
                </button>
  
                <button className="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
                  <img src={Logogo} className="w-6 h-5" />
                  <p className="text-[8px] font-bold">Log in with Google</p>
                </button>
  
                <button className="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
                  <img src={Logogi} className="w-4 h-4" />
                  <p className="text-[8px] font-bold">Log in with Github</p>
                </button>
  
                <button className="bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center space-x-5 h-7">
                  <img src={Logodi} className="w-4 h-4" />
                  <p className="text-[8px] font-bold">Log in with Discord</p>
                </button>
              </div>
  
              <p className="w-full break-words text-sm text-center text-gray-500 absolute bottom-[10px]">*if you login on our app, you accept our terms and licenses</p>
            </div>
          </div>
        )}
      </>


    );
  }
export default App
