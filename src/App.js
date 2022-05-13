import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  About,
  Dashboard,
  Error,
  Home,
  Login,
  Products,
  ProtectedRoute,
  SharedLayout,
  SharedProductsLayout,
  SingleProduct,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
          <Route path='/products' element={<SharedProductsLayout />}>
            <Route index element={<Products />} />
            <Route path='/products/:productID' element={<SingleProduct />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route
            path='/Dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
