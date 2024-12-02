import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { IoVideocam } from 'react-icons/io5'
import { MdHistory } from 'react-icons/md'

const InnerComp = ({ isvisible }) => {
    return (
        <div className={` ${isvisible ? "opacity-100": "opacity-0"} sm:mb-2 transition-all duration-1000 bg-[#878a8d]  rounded-b-lg`
}>
          <hr />
          <div className=' flex items-center justify-around'>
              
              <div className=' flex flex-col  items-center p-1'>
                  <IoVideocam />
                  <h1>Video Call</h1>
              </div>

              <div className=' flex flex-col items-center'>
                  <BiMessageDetail/>
                  <h1>Mesage</h1>
              </div>

              <div className=' flex flex-col items-center'>
                  <MdHistory/>
                  <h1>History</h1>
              </div>
          </div>
       
    </div>
  )
}

export default InnerComp