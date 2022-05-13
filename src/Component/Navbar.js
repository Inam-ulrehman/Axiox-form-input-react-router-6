import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/products'}>Products</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  a {
    margin-left: 1rem;
  }
`

export default Navbar
