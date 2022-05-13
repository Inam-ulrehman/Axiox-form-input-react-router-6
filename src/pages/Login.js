import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormRow from '../Component/FormRow'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  name: '',
  email: '',
  password: '',
  isRegister: false,
}

const Login = () => {
  const [value, setValue] = useState({ initialState })

  const navigate = useNavigate()

  const notify = (message) => {
    toast.error(message)
  }

  // handle submit input

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value.email || !value.password || (value.isRegister && !value.name)) {
      return notify('Please provide email and password')
    }
    return navigate('/dashboard')
  }

  //  handle onChange

  const handleChange = (e) => {
    const name = e.target.name
    const values = e.target.value
    setValue({ ...value, [name]: values })
  }

  // toggle functionality

  const toggleValue = () => {
    setValue({ ...value, isRegister: !value.isRegister })
  }

  useEffect(() => {}, [])
  return (
    <Wrapper>
      <ToastContainer />
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <h1 className='title'>{value.isRegister ? 'Register' : 'Login'}</h1>
          {/* name input */}
          {value.isRegister && (
            <FormRow
              name='name'
              type='text'
              value={value.name}
              onChange={handleChange}
            />
          )}

          {/* email input */}
          <FormRow
            name='email'
            type='email'
            value={value.email}
            onChange={handleChange}
          />
          {/* password input */}
          <FormRow
            name='password'
            type='password'
            value={value.password}
            onChange={handleChange}
          />
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
          <p>
            {!value.isRegister
              ? 'click here to Register '
              : 'Please click here to login '}

            <button type='button' onClick={toggleValue}>
              {value.isRegister ? 'Login' : 'Register'}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``
export default Login
