import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import { BiBriefcase } from 'react-icons/bi';
import { BiWindows } from "react-icons/bi";
import {BsEnvelopeOpen} from "react-icons/bs"
function IconList() {
    const icons= [
        <AiOutlineHome/>,
        <AiOutlineUser/>,
        <BiBriefcase/>,
        <BiWindows/>,
        <BsEnvelopeOpen/>,
    ]
const oneIcon ={
  marginTop:'0.9em',
  padding: '18px',
  borderRadius: '50px',
  

}   
const iconList= icons.map((icon)=>
  
  <li style={oneIcon} className=' bg-[#454e56] hover:bg-[#27AE60] '>{icon}</li>)

const iconStyle={
  paddingLeft:'3em',
  paddingTop:'5em',
  fontSize:'2em',
  color:'#b2becd',
  justifyContent:'space-around',
  

}    
  return (
    <div>
        <ul style={iconStyle}>{iconList}</ul>
    </div>
  )
}

export default IconList