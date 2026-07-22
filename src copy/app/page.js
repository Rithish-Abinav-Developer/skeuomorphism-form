"use client"

import React, { useState, useEffect } from 'react'

const THEMES = [
  { id: 'skeuomorphism', label: 'Skeuomorphism' },
  { id: 'glassmorphism', label: 'Glassmorphism' },
  { id: 'claymorphism', label: 'Claymorphism' },
]

export default function page() {

  const [theme, setTheme] = useState('skeuomorphism')
  const [isSwitching, setIsSwitching] = useState(false)

  const handleThemeChange = (next) => {
    if (next === theme) return
    setTheme(next)
    setIsSwitching(true)
  }

  useEffect(() => {
    if (!isSwitching) return
    const timer = setTimeout(() => setIsSwitching(false), 450)
    return () => clearTimeout(timer)
  }, [isSwitching])

  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    gender:""
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
    console.log(name,value);
   setUser((prev) => ({...prev,[name]:value}))
  }

const handleSubmit = (e) =>{
e.preventDefault();
console.log(user)
}


  return (
    <main className={`page${isSwitching ? ' is-switching' : ''}`} data-theme={theme}>

    <form autoComplete="off" onSubmit={handleSubmit}>

      <div className="theme_switch" role="radiogroup" aria-label="Choose theme">
        {THEMES.map((t) => (
          <React.Fragment key={t.id}>
            <input
              className="theme_radio"
              type="radio"
              id={`theme-${t.id}`}
              name="theme"
              value={t.id}
              checked={theme === t.id}
              onChange={() => handleThemeChange(t.id)}
            />
            <label className="theme_option" htmlFor={`theme-${t.id}`}>{t.label}</label>
          </React.Fragment>
        ))}
        <span className="theme_switch_thumb" data-active={theme} aria-hidden="true"></span>
      </div>

      <input
        type="text"
        placeholder="Name"
        autoComplete="off"
        name='name'
        onChange={(e)=>handleChange(e)}
      />

      <input
        type="email"
        placeholder="Email"
        autoComplete="off"
        name='email'
        onChange={(e)=>handleChange(e)}
      />

      <input
        type="password"
        placeholder="Password"
        autoComplete="new-password"
        name='password'
        onChange={(e)=>handleChange(e)}
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
    onChange={(e)=>handleChange(e)}
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
    onChange={(e)=>handleChange(e)}
  />
  <label htmlFor="female"></label>
</div>
      </div>
      </div>

      <button type="submit" className="submit_btn">
        Submit
      </button>
    </form>


    </main>
  )
}
