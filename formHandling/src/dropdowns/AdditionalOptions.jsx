import React, { useState } from 'react'
import PointNumber from '../components/PointNumber'
import PointHeading from '../components/PointHeading'
import LabelHeading from '../components/LabelHeading'
import Button from '../components/Button'
import Input from '../components/Input'

export default function AdditionalOptions() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible((prevState) => !prevState);
    };
  
    
  return (
    <div className='flex flex-col ml-5 mb-5 mr-11'>
        <div className='flex' onClick={toggleDropdown}>
            <PointNumber number="5" />
            <PointHeading className="" name="Additional options (optional)" />
        </div>

        {dropdownVisible && (
        <div className='ml-11 mt-3'>
            <div className='font-semibold mb-3'>All fields optional</div>

            <LabelHeading label="Android Notification Channel" />
            <Input />

            <LabelHeading label="custom data" />
            <Input placeholder="Key" />

            <LabelHeading label="Sound" />
            <div className='border-2 border-gray-400 w-[100px] pl-3'>
                Disabled
            </div>

            <LabelHeading label="Expires " />
            <div className='flex mb-3'>
                <div className='border-2 mr-3 border-gray-400 w-[50px] pl-4'>
                    4
                </div>
                <div className='border-2 border-gray-400 w-[100px] pl-4'>
                    weeks
                </div>
            </div>

            <Button />
        </div>
        )}
    </div>
  )
}
