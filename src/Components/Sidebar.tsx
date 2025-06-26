import React, { FC } from 'react'
import { IoHomeSharp } from "react-icons/io5";
 import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import Link from 'next/link';

interface Toogling{
  toogle:boolean
}

const Sidebar:FC<Toogling> = ({toggle}) => {

  
  return (
    <div className={` flex justify-center items-center w-full h-full bg-gray-900/5 md:min-h-max`}>
    <div className={`  flex justify-around w-full md:fixed  ${toggle ? ` md:flex md:flex-col  md:w-58  md:h-screen `:` md:w-full md:h-screen md:flex md:flex-col md:z-50 `}`}>
      <div className={`${toggle ?` md:flex-center md:justify-between md:px-11`:`  flex-center flex-col lg:hidden `}`}>
        <Link href={'/'}>
         <IoHomeSharp className={`${toggle ? ` size-11`: ` size-11`}`} ></IoHomeSharp>
        </Link>
         <div className={`${toggle ? ` text-xl `: ` text-xl`}`} >Home</div>
      </div>
      <div className={`${toggle ?` md:flex-center md:justify-between md:px-11`:`  flex-center flex-col lg:hidden`}`}>
        <Link href={'/shorts'}>
          <SiYoutubeshorts className={`${toggle ? ` size-11`: ` size-11`}`}></SiYoutubeshorts>  
        </Link>
        <div className={`${toggle ? ` text-xl `: ` text-xl`}`} >Shorts</div>
      </div>
      <div className={`${toggle ?`md:flex-center md:justify-between md:px-11`:`  flex-center flex-col lg:hidden`}`}>
        <Link href={'/subscriptions'}> 
          <MdSubscriptions className={`${toggle ? ` size-11`: ` size-11`}`}></MdSubscriptions>
        </Link>
      <div className={`${toggle ? ` text `: ` text`}`} >Subscriptions</div>
      </div>
      <div className={`${toggle ?` md:flex-center md:justify-between md:px-11`:`  flex-center flex-col lg:hidden`}`}>
        <Link href={'/watch-later'}>  
          <CiClock1 className={`${toggle ? ` size-11`: ` size-11`}`}></CiClock1>
        </Link>
        <div className={`${toggle ? ` text `: ` text`}`}>Watch Later</div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar