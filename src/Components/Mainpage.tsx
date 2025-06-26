'use client'
import Image from 'next/image'
import React, { FC } from 'react'



interface User{
  title:string,
  subtitle:string,
  views:string,
  age:string,
  duration:string,
  quote:string
  thumbnail:string
  toggle:boolean
}

const Mainpage:FC<User> = ({title,subtitle,views,age,duration,quote,thumbnail,toggle}) => {
  return (
    <div className={`  p-6 flex-center flex-col gap-y-3 ${toggle ? `  md:h-80 md:flex-center md:flex-col md:justify-start  lg:flex-center lg:justify-start lg:flex-col`:` md:flex-center md:flex-col md:justify-start  lg:flex-center lg:flex-col  lg:justify-start`}`}>
      {/* Thumbnail */}
      <div className={`  m-auto w-[80vw] h-[32vh] rounded-3xl ${toggle ? ` md:w-[30vw] md:h-40  lg:w-[22vw] lg:h-[30vh]`:` md:w-[35vw] md:h-44 lg:w-[22vw]`}`}>
      <Image className={` object-cover bg-center h-full w-full rounded-3xl `} alt='' width={500} height={500} src={thumbnail}></Image>
      </div>
      {/* Title */}
      <div className={` w-[80vw] flex-center justify-start flex px-2 gap-x-2 ${toggle ? `   md:flex-center md:justify-start md:w-[30vw] lg:w-[22vw] lg:flex lg:justify-start`:` md:w-[35vw] lg:w-[22vw]`}`}>
        {/* //Logo */}
        <div className={`border w-14 h-14  rounded-full ${toggle ? ` md:w-24 md:h-12  md:rounded-full lg:w-16 lg:h-12 lg:rounded-full`:` md:w-20 md:h-14 md:rounded-full`}`}>
          <Image className={` object-cover h-full w-full bg-center rounded-full`} src={thumbnail} width={500} height={500} alt=''></Image>
        </div>
        {/* Title subtitle */}
        <div className={` flex flex-col ${toggle ? ` md:flex md:flex-col md:justify-start`:` md:grid md:grid-cols-1`}`}>
          {/* Title */}
          <div className={`font-bold text-md ${toggle ? ` md:text-sm`:`  md:text-sm`}`}>{title}</div>
          {/* Subtitle */}
          <div className={`${toggle ? ` md:text-xs`:`  md:text-xs md:font-extralight`}`}>{subtitle}</div>
          {/* age and views */}
          <div className={` flex justify-start gap-x-4 ${toggle ? `md:text-xs`:`  md:text-xs md:font-extralight`}`}>
            {/* Views */}
            <div>{views}</div>
            {/* Age */}
            <div>{age}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage