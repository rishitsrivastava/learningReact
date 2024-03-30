import React, { useState } from 'react'
import PointNumber from '../components/PointNumber'
import PointHeading from '../components/PointHeading'
import LabelHeading from '../components/LabelHeading'
import Button from '../components/Button'

export default function Target() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible((prevState) => !prevState);
    };
  
    
  return (
    <div className='flex flex-col ml-5 mr-11'>
        <div className='flex mb-5' onClick={toggleDropdown}>
            <PointNumber number="2" />
            <PointHeading className="" name="Target" />
        </div>

        {dropdownVisible && (
        <div>
            <div className='ml-11 flex'>
            <div className='mr-6 bg-blue-300 cursor-pointer text-blue-800 font-semibold p-1'>
                User segment
            </div>
            <div className='p-1 font-semibold cursor-pointer'>
                Topic
            </div>
        </div>

        <div className='ml-11 mt-3'>
            <div className='flex flex-col'>
                <form>
                    <LabelHeading label="Target User if..." />
                    <div className='grid-cols-3 mt-2 flex justify-between font-normal border-2 p-1 border-gray-300'>
                        <div>
                            App
                        </div>
                        <div>
                            com.airtel.hackathon
                        </div>
                        <div>
                            and
                        </div>
                    </div>
                    <div className='border rounded-lg w-[200px] cursor-pointer flex justify-center mt-3 mb-4'>
                        <div className='text-gray-500 p-1'>
                            Target Another app
                        </div>
                    </div>

                    <Button />
                </form>
            </div>
        </div>
        </div>
        )}
    </div>
  )
}
