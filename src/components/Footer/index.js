import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsEnvelopeFill } from "react-icons/bs";
import './index.css'


const Footer = () => {
  return (
    <div className='footer-section'>
      <div>
        <RiInstagramFill />
        <FaLinkedin />
        <BsEnvelopeFill />
        {/* <pre>Copyright &copy; 2024.  All rights reserved</pre> */}
      </div>
      <pre>Copyright &copy; 2024.  All rights reserved</pre>
    </div>
  )
}

export default Footer