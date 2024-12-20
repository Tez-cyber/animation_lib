import React from 'react'

export const Personal = () => {
  return (
    <div className='form-container'>
        <h2>Personal Information</h2>
        <form action="" className="">
            <input type="text" placeholder='Enter First Name' />
            <input type="text" placeholder='Enter Last Name' />
            <input type="text" placeholder='Confirm Password' />
        </form>
    </div>
  )
}
export const Signup = () => {
  return (
    <div className='form-container'>
        <h2>Signup</h2>
        <form action="" className="">
            <input type="text" placeholder='Enter Email' />
            <input type="password" placeholder='Enter Password' />
            <input type="password" placeholder='Confirm Password' />
        </form>
    </div>
  )
}
export const SocialLinks = () => {
  return (
    <div className='form-container'>
        <h2>Socials</h2>
        <form action="" className="">
            <input type="text" placeholder='Facebook' />
            <input type="text" placeholder='Twitter' />
            <input type="text" placeholder='Github' />
        </form>
    </div>
  )
}
