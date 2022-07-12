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
const iconList= icons.map((icon)=>
    <li>{icon}</li>)
  return (
    <div>
        <ul>{iconList}</ul>
    </div>
  )
}

export default IconList