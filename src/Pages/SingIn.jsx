import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { auth } from '../store/profile/actions'

export function SingIn() {
  const [inputs, setInputs] = useState({login: '', password: ''})
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputs.login === 'gb' && inputs.password === 'gb') {
      dispatch(auth(true))
      navigate('/')
    } else {
      setError('Login and password failed')
      setInputs({login: '', password: ''})
    }
  }

  return (
    <>
      <div>SingIn</div>
      <form onSubmit={handleSubmit}>
        <p>Login:</p>
        <input 
          type="text"
          name="login"
          value={inputs.login}
          onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
        <p>Password:</p>
        <input 
          type="text"
          name="password"
          value={inputs.password}
          onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
        />
        <button>login</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  )
}
