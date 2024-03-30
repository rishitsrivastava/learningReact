import React, { useState } from 'react'
import PointNumber from '../components/PointNumber'
import PointHeading from '../components/PointHeading'
import LabelHeading from '../components/LabelHeading'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Notification() {
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        imageUrl: '',
        name: '',
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleForm = (e) => {
        e.preventDefault();
        alert("form submitted")
        console.log(formData)
    }
  return (
    <div className='flex flex-col ml-5 mr-11'>
        <div className='flex mb-5'>
            <PointNumber number="1" />
            <PointHeading className="" name="Notification" />
        </div>

        <div className='ml-11'>
            <div className='flex flex-col'>
                <form onSubmit={handleForm}>
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
    </div>
  )
}
