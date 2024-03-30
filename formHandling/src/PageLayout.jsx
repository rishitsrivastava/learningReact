import React from 'react'
import Notification from './dropdowns/Notification'
import Target from './dropdowns/Target'
import Scheduling from './dropdowns/Scheduling'
import ConversionEvents from './dropdowns/ConversionEvents'
import AdditionalOptions from './dropdowns/AdditionalOptions'

export default function PageLayout() {
  return (
    <div className='bg-slate-100 h-screen p-9'>
      <div className='bg-white h-full border rounded-lg shadow-xl overflow-y-auto'>
        <div className='mt-9'>
          <Notification />
          <Target />
          <Scheduling />
          <ConversionEvents />
          <AdditionalOptions />
        </div>
      </div>
    </div>
  )
}
