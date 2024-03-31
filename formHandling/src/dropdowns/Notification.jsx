import React, { useState } from 'react'
import PointNumber from '../components/PointNumber'
import PointHeading from '../components/PointHeading'
import LabelHeading from '../components/LabelHeading'
import Button from '../components/Button'

export default function Notification() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [notificaitonTitle, setNotificationTitle] = useState("");
    const [notificationText, setNotificationText] = useState("");
    const [notificaitonLink, setNotificationLink] = useState("")
    const [notificationName, setNotificationName] = useState("");

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
              <LabelHeading label="Notification title" />
              <input 
                type='text' 
                className='border-2 pl-2 border-slate-400 w-full mb-5' 
                placeholder="Enter Notification title" 
                onChange={(e) => {setNotificationTitle(e.target.value)}} />

              <LabelHeading label="Notification text" />
              <input 
                type='text' 
                className='border-2 pl-2 border-slate-400 w-full mb-5' 
                placeholder="Enter Notification text" 
                onChange={(e) => {setNotificationText(e.target.value)}} />

              <LabelHeading label="Notification image (optional)" />
              <input 
                type='text' 
                className='border-2 pl-2 border-slate-400 w-full mb-5' 
                placeholder="Example: https://yourapp.com/image.png" 
                onChange={(e) => {setNotificationLink(e.target.value)}} />

              <LabelHeading label="Notification name (optional)" />
              <input 
                type='text' 
                className='border-2 pl-2 border-slate-400 w-full mb-5' 
                placeholder="Enter optional name" 
                onChange={(e) => {setNotificationName(e.target.value)}} />
              <Button name="next" />
            </div>
        </div>
        )}
    </div>
  )
}
