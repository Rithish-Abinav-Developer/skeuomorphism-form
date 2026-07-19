import React from 'react'

export default function page() {
  return (
    <>
    
    <form autoComplete="off">
      <input
        type="text"
        placeholder="Name"
        autoComplete="off"
      />

      <input
        type="email"
        placeholder="Email"
        autoComplete="off"
      />

      <input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
      />

      <div className='gender'>
        <p>Select Gender</p>
     <div className="radio_select">
      <div>
        <span>Male</span>
  <input
    type="radio"
    id="male"
    name="gender"
    value="male"
    hidden
  />
  <label htmlFor="male"></label>
</div>

<div>
        <span>Female</span>
  <input
    type="radio"
    id="female"
    name="gender"
    value="female"
    hidden
  />
  <label htmlFor="female"></label>
</div>
      </div>
      </div>

      <button type="submit" className="submit_btn">
        Submit
      </button>
    </form>
    
    
    </>
  )
}
