/* eslint-disable no-unused-vars */
import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center'>
      <a href={link} className='cursor-pointer' target='_blank'><Icon /></a>
    </div>
  )
}

export default SingleContactSocial