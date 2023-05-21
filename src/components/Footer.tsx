import React from 'react'

interface FooterProps {
    isBackgroundBlue: boolean;
  }
const Footer = ({isBackgroundBlue}: FooterProps) => {
  return <div className='mt-10'>
    <hr/>
    <span className={`p-10 font-orelegaOne flex flex-col justify-center ${isBackgroundBlue ? 'text-blue1 bg-white' : 'bg-blue1 text-white'}`} > 
    <span className='text-2xl m-0 p-0'>
    Contact me:
    </span> 
    <br/>
    <span>
    Mobile: +91-8637486041
    </span> 
    <br/>
    <span>
    Email: lakshmanprabhu219@gmail.com
    </span>
    </span>
  </div>
}

export default Footer