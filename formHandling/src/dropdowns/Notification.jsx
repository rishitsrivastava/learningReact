import React, { useState } from 'react'
import PointNumber from '../components/PointNumber'
import PointHeading from '../components/PointHeading'
import LabelHeading from '../components/LabelHeading'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Notification() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible((prevState) => !prevState);
    };
  
    
  return (
    <div className='flex flex-col ml-5 mr-11'>
        <div className='flex mb-5' onClick={toggleDropdown}>
            <PointNumber number="1" />
            <PointHeading className="" name="Notification" />
        </div>

        {dropdownVisible && (
        <div className='ml-11'>
            <div className='flex flex-col'>
                <form>
                    <LabelHeading label="Notification title" />
                    <Input placeholder="title" />
                    <LabelHeading label="Notification text" />
                    <Input placeholder="fwergh" />
                    <LabelHeading label="Notification image (optional)" />
                    <Input placeholder="Example: https://yourapp.com/image.png" />
                    <LabelHeading label="Notification name (optional)" />
                    <Input placeholder="Enter optional name" />
                    <Button name="next" />
                </form>
            </div>
        </div>
        )}
    </div>
  )
}
