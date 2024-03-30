import React, { useState } from 'react';
import PointNumber from '../components/PointNumber';
import PointHeading from '../components/PointHeading';
import LabelHeading from '../components/LabelHeading';
import Button from '../components/Button';

export default function ConversionEvents() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col ml-5 mb-5 mr-11'>
      <div className='flex' onClick={toggleDropdown}> {/* Added onClick event to toggle dropdown visibility */}
        <PointNumber number="4" />
        <PointHeading className="" name="Conversion events (optional)" />
      </div>

      {/* Conditional rendering based on dropdown visibility */}
      {dropdownVisible && (
        <div className='ml-11 mt-3'>
          <div className='flex p-2'>
            <div className='mr-6'>
              Sent
            </div>
            <div className='mr-6'>
              Opened
            </div>
            <div className='border border-gray-400 pl-2 pr-2'>
              <div className=''>
                Select goal metric
              </div>
            </div>
          </div>

          <LabelHeading label="Analytics label " />
          <div className='border border-gray-400 pl-2 w-[200px] mb-4'>
            <div>
              Add an analytics label
            </div>
          </div>

          <Button />
        </div>
      )}
    </div>
  );
}
