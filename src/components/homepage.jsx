import React from 'react'
// import '../index.css';
import IconList from './iconList';

export default function Homepage() {
  return (
    <div className="h-screen w-screen flex" style={{backgroundColor: '#191d2b',height: '100vh', width: '100vw' ,overflow:'hidden',display:'flex'}}>
        <div className="polygon-svg relative top-0 left-0 w-1/4"></div>
        <div className="h-1/4 w-1/4 "  style={{height: '100vh', width: '30vw'}}>
        <img src="portipic.jpg" alt="pic"  className=" h-4/5 " style={{position: 'absolute', top:'80px',left:'85px'}} />
        </div>
        <div className="h-4/5 w-20 flex flex-col justify-center items-center" style={{height: '100vh', width: '30vw'}}>
            <div className="">
                <h1 className="text-white text-5xl font-bold ">Hi, I'm <br /> <span className="text-[#27AE60] font-bold ">Mugisha Dorcus</span> <br /> A Frontend Developer </h1>
            </div>
            <div className="">
                <p className="text-white text-xl mt-16">I'm a freelance frontend developer, I love to create beautiful and functional websites. 
                    I would like to be a part of an organization where I could use and enhance my knowledge and talent for the development of both the organization and myself.</p>
            </div>
        </div>
        <div className="h-4/5 w-1/5 flex items-center justify-center">
         <IconList/>
        </div>
    </div>
  )
}
