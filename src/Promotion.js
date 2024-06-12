import React from 'react'
import './Promotion.css'
import img5 from './Assets2/Service Tips.svg'
import img6 from './Assets2/Travel Agency.svg'
import img7 from './Assets2/Wedding Gift.svg'
const Promotion = () => {
  return (
   <>
    <div>
        <h1 className='heading1'>Why To Travel with Us</h1>
        <p  className='para1'>
        Ambitious about your next adventure but sick of saving money? End up sneaking into those savings because well. You’re bored? Lost motivation? You don’t feel the funds are growing fast enough? Saving just sucks? Trasave has introduced an epic new way to reward you for your savings for travel
        </p>
    </div>

    <div className='setlogos'>
    
    <div className='set1'>
    <img src={img5}></img>
     <h1 className='subhead1'>Save money</h1>
     <p className='subpara1'>Invest in trasave securily for future</p>
    </div>


    <div className='set2'>
    <img src={img7}></img>
    <h1 className='subhead2'>Earn rewards</h1>
    <p className='subpara2'>Earn rewards and track your money</p>
    </div>


    <div className='set3'>
    <img src={img6}></img>
    <h1 className='subhead3'>Travel Global</h1>
    <p className='subpara3'>Use this money for your travelling</p>
    </div>

   
    
    </div>
   </>
  )
}

export default Promotion
