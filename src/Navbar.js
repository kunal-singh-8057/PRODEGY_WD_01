import React from 'react'
import './Navbar.css'
import Mask from './Assets2/Mask Group.svg'
import a from './Assets2/Ellipse 1.png'
import b from './Assets2/girl.png'
const Navbar = () => {
  return (
  <>
<img src={Mask} className='logo'></img>
    <div className='container'>
     <div className='navbar'>
        <ul>
          <li>
            <a href='#'>Home</a>
            <a href='#'>Save</a>
            <a href='#'>Travel</a>
            <a href='#'>Experience</a>
            <a href='#'>Wallet</a>
            <button className='btn'>Contact</button>
          </li>
        </ul>
        <div className='back'>
        <img src={a} className='logo2'></img>
        <img src={b} className='logo3'></img>
        </div>

        <div className='heading'>
      <p>
      SAVING YOUR MONEY FOR TRAVEL THROUGH TRAVEL FUND
      </p>

      <p className='p'>
      Save your money for travel securely and explore the whole world with trasave, we provide you the best travel services.
      </p>
       </div>
      </div>
      <div className='setbtn'>
      <button  className='btn1'>Save More</button>
      <button className='btn1'>Ux/Ui Case Study</button>
      </div>
    </div>
    </>
  )
}

export default Navbar

