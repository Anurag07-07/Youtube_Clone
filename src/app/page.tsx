'use client'
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import Sidebar from '@/Components/Sidebar';
import Mainpage from '@/Components/Mainpage';

const videoThumbnails = [
  {
    id: 1,
    title: "What They Found in Paul Walker’s Garage After His...",
    subtitle: "REVVED UP REVEALS",
    views: "1.3M views",
    age: "12 days ago",
    duration: "23:11",
    quote: "I WANTED TO LEAVE SOMETHING BEHIND...",
    thumbnail: "https://cdn.pixabay.com/photo/2025/04/05/11/06/water-drops-9515029_1280.jpg"
  },
  {
    id: 2,
    title: "Elon Musk's Hidden Tesla Prototype Found!",
    subtitle: "TECH UNCOVERED",
    views: "2.1M views",
    age: "5 days ago",
    duration: "15:22",
    quote: "This Changes Everything...",
    thumbnail: "https://cdn.pixabay.com/photo/2025/05/11/22/31/man-9594075_1280.jpg"
  },
  {
    id: 3,
    title: "What NASA Discovered on Mars Will Blow Your Mind!",
    subtitle: "SPACE REVEALED",
    views: "3.4M views",
    age: "1 week ago",
    duration: "18:47",
    quote: "We Were Never Alone...",
    thumbnail: "https://cdn.pixabay.com/photo/2025/04/22/09/32/daisy-9549631_1280.jpg"
  },
  {
    id: 4,
    title: "Inside the Abandoned Mansion of Steve Jobs",
    subtitle: "URBAN EXPLORER",
    views: "900K views",
    age: "2 days ago",
    duration: "21:10",
    quote: "The Secrets He Took With Him...",
    thumbnail: "https://cdn.pixabay.com/photo/2025/05/19/13/34/girl-9609522_1280.jpg"
  },
  {
    id: 5,
    title: "Jeff Bezos' Underground Bunker: What’s Inside?",
    subtitle: "BILLIONAIRE FILES",
    views: "1.8M views",
    age: "3 days ago",
    duration: "14:55",
    quote: "Just In Case...",
    thumbnail: "https://cdn.pixabay.com/photo/2025/05/31/20/23/trees-9634157_1280.jpg"
  },
  {
    id: 6,
    title: "Top Secret Plane Spotted in Nevada Desert",
    subtitle: "MILITARY MYSTERIES",
    views: "5M views",
    age: "1 month ago",
    duration: "10:34",
    quote: "You Weren’t Meant to See This",
    thumbnail: "https://cdn.pixabay.com/photo/2025/05/26/14/25/pied-flycatcher-9623545_1280.jpg"
  },
  {
    id: 7,
    title: "They Found Atlantis... And It's Not Where You Think",
    subtitle: "HISTORY REWRITTEN",
    views: "4.2M views",
    age: "3 weeks ago",
    duration: "17:03",
    quote: "We Were Wrong All Along",
    thumbnail: "https://cdn.pixabay.com/photo/2023/06/21/06/12/man-8078578_1280.jpg"
  },
  {
    id: 8,
    title: "Unboxing the World's Most Expensive Watch",
    subtitle: "LUXURY LIFE",
    views: "800K views",
    age: "2 days ago",
    duration: "8:44",
    quote: "It’s Not Just a Watch...",
    thumbnail: "https://cdn.pixabay.com/photo/2014/01/12/03/38/watch-242592_1280.jpg"
  },
  {
    id: 9,
    title: "How They Built the Pyramids: New Evidence!",
    subtitle: "ANCIENT MYSTERIES",
    views: "2.7M views",
    age: "4 days ago",
    duration: "19:22",
    quote: "It Wasn’t Aliens...",
    thumbnail: "https://cdn.pixabay.com/photo/2016/11/21/16/27/laptop-1846277_1280.jpg"
  },
  {
    id: 10,
    title: "Inside Cristiano Ronaldo’s Mega Mansion",
    subtitle: "SPORTS INSIDER",
    views: "1.1M views",
    age: "6 days ago",
    duration: "11:40",
    quote: "Luxury Redefined",
    thumbnail: "https://cdn.pixabay.com/photo/2015/01/06/14/18/turbine-590354_1280.jpg"
  },
  {
    id: 11,
    title: "Tesla Bot Secretly Tested in Public?",
    subtitle: "FUTURE TECH",
    views: "3.9M views",
    age: "1 week ago",
    duration: "13:33",
    quote: "It's Already Among Us...",
    thumbnail: "https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg"
  },
  {
    id: 12,
    title: "Exploring a Billionaire’s Abandoned Island",
    subtitle: "LOST PLACES",
    views: "2.2M views",
    age: "2 weeks ago",
    duration: "22:12",
    quote: "Why Did He Leave It?",
    thumbnail: "https://cdn.pixabay.com/photo/2016/02/06/19/03/child-1183465_1280.jpg"
  },
  {
    id: 13,
    title: "Found in the Amazon: World's Oldest Civilization?",
    subtitle: "WILD DISCOVERIES",
    views: "1.5M views",
    age: "3 weeks ago",
    duration: "16:00",
    quote: "History Books Lied...",
    thumbnail: "https://cdn.pixabay.com/photo/2021/10/11/16/00/robot-6701139_1280.jpg"
  },
  {
    id: 14,
    title: "Hidden Room Found Behind Painting",
    subtitle: "MYSTERY FILES",
    views: "600K views",
    age: "1 day ago",
    duration: "9:50",
    quote: "What Were They Hiding?",
    thumbnail: "https://cdn.pixabay.com/photo/2025/06/01/14/23/psoun-9635287_1280.jpg"
  },
  {
    id: 15,
    title: "Inside the Most Secure Vault on Earth",
    subtitle: "BANKING SECRETS",
    views: "2.9M views",
    age: "1 month ago",
    duration: "12:21",
    quote: "You Need 7 Keys to Enter",
    thumbnail: "https://cdn.pixabay.com/photo/2025/06/01/18/06/nature-9635731_1280.jpg"
  },
  {
    id: 16,
    title: "First Look at Elon Musk’s Mars Base Prototype",
    subtitle: "SPACEX INSIDER",
    views: "3.5M views",
    age: "5 days ago",
    duration: "18:18",
    quote: "Mars Isn’t a Dream Anymore",
    thumbnail: "https://cdn.pixabay.com/photo/2025/06/01/07/11/horses-9634745_1280.jpg"
  },
  {
    id: 17,
    title: "The Truth About Area 51: Leaked Footage",
    subtitle: "TOP SECRET FILES",
    views: "6M views",
    age: "1 week ago",
    duration: "24:00",
    quote: "They Didn’t Want You to Know",
    thumbnail: "https://cdn.pixabay.com/photo/2025/06/01/20/21/alps-9635920_1280.jpg"
  },
  {
    id: 18,
    title: "A.I. Predicts the End of Civilization",
    subtitle: "FUTURE FEARS",
    views: "1.4M views",
    age: "3 days ago",
    duration: "13:13",
    quote: "The Clock Is Ticking",
    thumbnail: "https://cdn.pixabay.com/photo/2024/07/21/20/57/car-8911250_1280.jpg"
  },
  {
    id: 19,
    title: "This Machine Can Rebuild Earth’s Atmosphere",
    subtitle: "CLIMATE HOPE",
    views: "2.6M views",
    age: "2 weeks ago",
    duration: "14:49",
    quote: "It Might Not Be Too Late",
    thumbnail: "https://cdn.pixabay.com/photo/2024/02/02/18/41/ai-generated-8548846_1280.jpg"
  },
  {
    id: 20,
    title: "What They Found Under the Vatican Will Shock You",
    subtitle: "CHURCH SECRETS",
    views: "4.7M views",
    age: "6 days ago",
    duration: "19:30",
    quote: "This Was Hidden For Centuries",
    thumbnail: "https://cdn.pixabay.com/photo/2023/10/20/06/51/car-8328368_1280.jpg"
  }
];

const page = () => {
  const [toogle,setToogle] = useState<boolean>(false)
  return (
    <>
    <nav className=' flex w-full h-16 bg-gray-900/75  justify-around flex-center md:flex md:justify-between md:px-11 z-50'>
    {/* Search Bar */}
    <TiThMenu size={28} onClick={()=>setToogle(prev=>!prev)} className=' hidden md:block md:z-50'  ></TiThMenu>
    <div className=' flex-center relative'>
    <input type="text" className='  rounded-2xl shadow-sm bg-gray-800/85   px-3 h-8 md:w-80' placeholder='Search' />
    <CiSearch size={24} className=' absolute right-0 rounded-r-3xl h-8  bg-gray-700 text-white  '></CiSearch>
    </div>

    {/* NotificationCount */}
    <div className=' relative w-8'>
      <div>
        <GoBell size={32}></GoBell>
      </div>
      <div className=' absolute w-6 text-center -top-1 -right-1 bg-red-600 text-white border rounded-full' >
        {
          videoThumbnails.length > 9 ? `9+` : `${videoThumbnails.length}` 
        }
      </div>
    </div>

    {/* Log in Icon */}
    <FaUserCircle size={28}></FaUserCircle>
    
    </nav>
    <div className=' transition-all duration-700 md:flex z-10  top-16 w-full'>
      <div className={` w-full h-20 fixed bottom-0 bg-gray-900  ${toogle ? `lg:w-96 lg:h-screen lg:bg-gray-800/45 > md:w-96 md:static md:h-screen`:` lg:w-0  lg:h-screen md:static md:left-0 md:w-28 md:h-screen`} transition-all duration-700`}>
        <Sidebar toggle={toogle}></Sidebar>
      </div>
      <div className={` h-screen w-full bg-gray-900/5 grid overflow-y-auto no-scrollbar   mb-20 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:mb-0 md:overflow-x-hidden   ${toogle ? `  lg:w-screen lg:h-screen`:` lg:bg-gray-800/45 lg:h-screen lg:w-screen lg:grid lg:grid-cols-4 `} transition-all duration-700`}>
        {
          videoThumbnails.map((d)=>{
            return <Mainpage key={d.id} title={d.title} subtitle={d.subtitle} views={d.views} age={d.age} duration={d.duration} quote={d.quote} thumbnail = {d.thumbnail} toggle={toogle}></Mainpage>
          })
        }
      </div>
    </div>
    </>
  )
}

export default page