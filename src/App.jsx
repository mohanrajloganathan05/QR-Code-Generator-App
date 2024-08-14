import { useState } from 'react'

import './App.css'
import Data from './Data.jsx'


function App() {
 

  return (
    <>
      <div className="container">

              <div className="home">
                    <div className="title-box"> 
                          <h2 className='title'> QR CODE GENERATOR </h2>
                    </div>

                    <div className="data">
                      <Data/>
                    </div>

               </div>

      </div>
    </>
  )
}

export default App