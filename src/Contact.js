import React from 'react'
import img9 from './Assets2/back.jpg'
import './Contact.css'
import img12 from './Assets2/Mask Group.svg'
const Contact = () => {
  return (
   <>
    <div>
    <img src={img9} className='logo8'></img>
    <div className='cons'>
    <img src={img12} className='logo9'></img>
    </div>
    </div>
    <h1 className='finalhead'>
    TRASAVE travel fund is a good way to track your travel money.
    </h1>

    <div className='about'>
    <h1>About</h1>
    <p className='he'>• Technical Info</p>
    <p className='he'>• Other Products</p>
    </div>

    <div className='contacts'>
    <h1>Contacts</h1>
    <p className='she'>Bengaluru, India</p>
    <br></br>
    <p className='she'>80030 10108</p>
    <br></br>
    <p className='she'>hr@curlistic.com</p>
    </div>

    <div className='search'>
    <h1>Subscribe Newsletter</h1>
    <input placeholder='Enter Your Email'></input><button className='btns'>Subscribe</button>
    </div>
   </>
  )
}

export default Contact
