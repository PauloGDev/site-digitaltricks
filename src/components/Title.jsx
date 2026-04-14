import React from 'react'

const Title = ({text1, text2, text3}) => {
  return (
    <div className='grid grid-rows-2 gap-2 justify-items-center text-center items-center mb-3'>
      <div className=''>
      <p className='text-white font-semibold lg:text-3xl text-xl'>{text1} <span></span> <span className='text-indigo-600 lg:text-3xl text-xl font-semibold'>{text2}</span></p>
      <p className='text-gray-300 mt-2 font-medium text-sm max-w-[75vw]'>{text3} </p>
      </div>
    </div>
    
  )
}

export default Title