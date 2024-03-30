import React from 'react'
import Notification from './dropdowns/Notification'

export default function PageLayout() {
  return (
    <div className='bg-slate-200 h-screen p-9'>
      <div className='bg-white h-full border rounded-lg overflow-y-hidden'>
        <div className='mt-9'>
          <Notification />
        </div>
      </div>
    </div>
  )
}
