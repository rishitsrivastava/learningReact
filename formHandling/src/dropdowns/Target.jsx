import React, { useState } from 'react';
import PointNumber from '../components/PointNumber';
import PointHeading from '../components/PointHeading';
import LabelHeading from '../components/LabelHeading';
import Button from '../components/Button';

export default function Target() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showUserSegment, setShowUserSegment] = useState(true);
  const [showTopicInput, setShowTopicInput] = useState(false);
  const [link, setLink] = useState("com.airtel.hackathon");
  const [topic, setTopic] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const toggleUserSegment = () => {
    setShowUserSegment(!showUserSegment);
    setShowTopicInput(false); // Hide the input field if User Segment is clicked
  };

  const toggleTopicInput = () => {
    setShowTopicInput(!showTopicInput);
    setShowUserSegment(false); // Hide the User Segment div if Topic is clicked
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
            <button
              className='mr-6 bg-blue-300 cursor-pointer text-blue-800 font-semibold p-2'
              onClick={toggleUserSegment}
            >
              User segment
            </button>
            <button
              className='p-2 font-semibold bg-blue-300 text-blue-800  cursor-pointer'
              onClick={toggleTopicInput}
            >
              Topic
            </button>
          </div>

          <div className='ml-11 mt-3'>
            <div className='flex flex-col'>
              {showUserSegment && (
                <div>
                  <LabelHeading label="Target User if..." />
                  <div className='grid-cols-3 mt-2 flex justify-between font-normal border-2 p-1 border-gray-300'>
                    <div>
                      App
                    </div>
                    <input
                      type="text"
                      placeholder='Enter URL'
                      value={link}
                      onChange={(e) => {setLink(e.target.value)}}
                    />
                    <div>
                      
                    </div>
                  </div>
                  <div className='border rounded-lg w-[200px] cursor-pointer flex justify-center mt-3 mb-4'>
                    <div className='text-gray-500 p-1'>
                      Target Another app
                    </div>
                  </div>
                </div>
              )}

              {showTopicInput && (
                <div>
                  <LabelHeading label="Topic" />
                  <input
                    type="text"
                    placeholder="Enter Topic"
                    className='mt-3 border-2 mb-3 border-gray-400 pl-2'
                    onChange={(e) => {setTopic(e.target.value)}}
                  />
                </div>
              )}

              <Button />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
