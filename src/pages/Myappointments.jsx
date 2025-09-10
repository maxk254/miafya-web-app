import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappointments = () => {
  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {doctors.slice(3,5).map((item,index) =>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-40 bg-teal-50 border border-teal-50 rounded' src={item.image} alt="doc"/>
            </div>
            <div className='flex-1 text-md text-zinc-900'>
              <p className='text-green-500 font-semibold'>{item.name}</p>
              <p className='text-red-500 font-semibold'>{item.Speciality}</p>
              <p className='text-zinc-900 font-medium mt-1'>Address:</p>
              <p className='text-blue-500'>{item.address.phoneNumber}</p>
              <p className='text-blue-500'>{item.address.Email}</p>
              <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time</span> 9, Septemer, 2025 | 8:00 PM</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-4 justify-end'>
              <button className='text-sm text-black text-center sm:min-w-48 py-2 border rounded bg-primary hover:bg-red-600 transition-all duration-300 hover:text-white cursor-pointer'>Cancel Appointment</button>
              <button className='text-sm text-black text-center sm:min-w-48 py-2 border rounded bg-primary cursor-pointer animate-bounce' >Pay Online</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myappointments