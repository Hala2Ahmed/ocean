import React from 'react'

export default function Loading() {
  return (
   
   <div className='h-[900vh] bg-secondBackground'>
     <div className="flex flex-row gap-2 h-screen justify-center items-center">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
   </div>
  )
}
