import React, { useState } from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdOutlineCallMissed } from 'react-icons/md';
import InnerComp from './InnerComp';
const Contact = () => { 
    const [clicked ,setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return (
        <>
             
            <div className={`flex text-white  flex-nowrap px-2 bg-[#0f141a] gap-3 justify-around sm:justify-items-start  mt-5 sm:mt-2  transition-all duration-1000  ${clicked ? "bg-[#878a8d] rounded-t-lg" : ""}`} onClick={handleClick}>
          {/* Image Section */}
          <div className=' w-12 bg-yellow-400 rounded-full text-center content-center'>G</div>


          {/* Contact Name */}
          <div>
              <div className=' flex flex-col flex-nowrap '>
                  <div>Contact Name</div> 
                  <div className='flex gap-1 items-center'>
                      {/* <LuArrowDownLeft />
                      <LuArrowUpRight /> */}
                      <MdOutlineCallMissed className=' text-red-600 ' />
                      <h4>Thu  Nov , 6.45 pm</h4>
                      
                  </div>
              </div>
          </div>

          {/* calling Icon */}
            <div className=' content-center ml-5'><BiSolidPhoneCall /> </div>
           
        </div>
          
           {clicked ? <InnerComp isvisible={clicked}/>:""}
        </>
      
  )
}

export default Contact