import React from 'react'
import { useState,useEffect} from 'react'



const Data = () => {
    
        const [value,setValue] = useState('')
        const [qr,setQr] = useState("")
        const [isLoading,setIsLoading] = useState(false)
        const [error,setError] = useState(false)

        const handleChange = (e)=>{

                setValue( e.target.value)
                console.log(value)

        }

        const handleKey = (e)=>{
             if(  e.key =="Enter")
            handleClick();
        }

        const handleClick = async ()=>{

               
                    
                  setIsLoading(true)
            

            try {
                // Fetch the QR code image from the API
                const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`);
                if (!response.ok) {
                    throw  Error('Network response was not ok');
                }
                // Set the URL of the generated QR code
                setQr(response.url);
                 setTimeout(() => {
                    setIsLoading(false)
                 }, 1000);
                    setValue("")
            } catch (error) {
                console.error('Error generating QR code:', error);
                setError(true)
            }
        }


    
  return (
    <>
    <div className='input-container'>
        <input className='input' type='text' value={value} onChange={handleChange} onKeyDown={handleKey} placeholder='Enter any data or your url link to generate QR code'/>
    </div>

    <div className="button-box">
            <button className='button' onClick={handleClick}>Generate QR Code</button>
        </div>

        {
            isLoading && !error&&<div className="loading-box">
                        <p className='loading-text'>Generating your QR code......</p>
            </div>
        }

      

       { !isLoading &&  qr&& ( <div className="img-box">
                           { <div className='sub-title'> Your QR Code  is :</div>}
                    
                            <img className='qr-img' src={qr}></img>
                            <div className="download-box">
                          <a href={qr} download={`QRCode_${Date.now()}.png`} className="download-link">Download QR Code</a>
          </div>

                         </div>)
                         
       }
       {isLoading && !qr&&<div className='error'> <p>Error! Enter any data..!</p></div>} 

    </>
  )
}

export default Data