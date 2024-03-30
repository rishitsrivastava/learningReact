import React from 'react';

export default function Input(props) {
  const { placeholder, onChange } = props;

  return (
    <div className='mb-5'>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className='border-2 pl-2 border-slate-400 w-full'
      />
    </div>
  );
}
