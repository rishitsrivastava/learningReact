import React from 'react'

export default function PointNumber(props) {
  return (
    <div className='bg-blue-900 h-7 w-7 rounded-full mr-4'>
        <div className='text-white flex justify-center text-lg items-center'>
            {props.number}
        </div>
    </div>
  )
}
