import React, { useState } from 'react'
import PointNumber from '../components/PointNumber'
import PointHeading from '../components/PointHeading'
import LabelHeading from '../components/LabelHeading'
import Button from '../components/Button'

export default function Scheduling() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible((prevState) => !prevState);
    };
  
    
  return (
    <div className='flex flex-col ml-5 mb-5 mr-11'>
        <div className='flex' onClick={toggleDropdown}>
            <PointNumber number="3" />
            <PointHeading className="" name="Scheduling" />
        </div>

        {dropdownVisible && (
        <div className='ml-11 mt-3'>
            <div className='font-medium text-gray-600'>
                Send to eligible users
            </div>
            <div className='border w-[180px] mt-2 mb-4'>
                <div className='flex ml-3'>
                    Now
                </div>
            </div>
            <Button />
        </div>
        )}
    </div>
  )
}
