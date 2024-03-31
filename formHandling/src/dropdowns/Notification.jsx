import React, { useState } from 'react'
import PointNumber from '../components/PointNumber'
import PointHeading from '../components/PointHeading'
import LabelHeading from '../components/LabelHeading'

export default function Notification() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [notificaitonTitle, setNotificationTitle] = useState("");
    const [notificationText, setNotificationText] = useState("");
    const [notificaitonLink, setNotificationLink] = useState("")
    const [notificationName, setNotificationName] = useState("");

    const toggleDropdown = () => {
      setDropdownVisible((prevState) => !prevState);
    };

    const handleClick = () => {
      console.log(notificaitonTitle, notificationText, notificaitonLink, notificationName)
    } 

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      handleClick(); // Call your custom function to log form data to console
    };

  return (
    <div className='flex flex-col ml-5 mr-11'>
        <div className='flex mb-5' onClick={toggleDropdown}>
            <PointNumber number="1" />
            <PointHeading className="" name="Notification" />
        </div>

        {dropdownVisible && (
        <div className='ml-11'>
            <form onSubmit={handleSubmit}> {/* Added form element with onSubmit handler */}
            <div className='flex flex-col'>
              <LabelHeading label="Notification title" />
              <input
                type='text'
                className='border-2 pl-2 border-slate-400 w-full mb-5'
                placeholder="Enter Notification title"
                value={notificaitonTitle}
                onChange={(e) => { setNotificationTitle(e.target.value) }}
                required // Moved required to the input field within the form
              />

              <LabelHeading label="Notification text" />
              <input
                type='text'
                className='border-2 pl-2 border-slate-400 w-full mb-5'
                placeholder="Enter Notification text"
                value={notificationText}
                onChange={(e) => { setNotificationText(e.target.value) }}
                required // Moved required to the input field within the form
              />

              <LabelHeading label="Notification image (optional)" />
              <input
                type='text'
                className='border-2 pl-2 border-slate-400 w-full mb-5'
                placeholder="Example: https://yourapp.com/image.png"
                value={notificaitonLink}
                onChange={(e) => { setNotificationLink(e.target.value) }}
              />

              <LabelHeading label="Notification name (optional)" />
              <input
                type='text'
                className='border-2 pl-2 border-slate-400 w-full mb-5'
                placeholder="Enter optional name"
                value={notificationName}
                onChange={(e) => { setNotificationName(e.target.value) }}
              />

              <button
                type="submit" // Added type="submit" to the button for form submission
                className='bg-blue-900 w-20 h-8 flex justify-center items-center text-white font-semibold mb-5'
              >
                Next
              </button>
            </div>
          </form>
        </div>
        )}
    </div>
  )
}
