import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 text-2xl'>
        <p className='capitalize text-gray-700 font-medium'>{text1} <span className='text-gray-500 '>{text2} </span></p>
        <p className='w-10 sm:w-12 h-[2px] mt-2 sm:h-[3px] bg-gray-500'></p>
    </div>
  )
}

export default Title