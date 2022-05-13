import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const url = 'https://course-api.com/react-store-products'

const Products = () => {
  const [product, setProduct] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      const data = response.data
      setProduct(data)
      notify('Successfully fetch Axios')
    } catch (error) {
      notify(error.message)
    }
  }

  const notify = (message) => {
    toast.success(message)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
      <div className='container'>
        {product.map((item) => {
          const { id, name, image, price } = item
          return (
            <article key={id}>
              <div className='product'>
                <div className='img-container'>
                  <img className='img' src={image} alt='' />
                  <div className='footer'>
                    <h3>{name}</h3>
                    <p>Price: $ {price}</p>
                  </div>
                </div>
              </div>
              <div className='btn-container'>
                <Link to={`/products/${id}`} className='btn '>
                  more info
                </Link>
              </div>
            </article>
          )
        })}
      </div>
      <ToastContainer />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .product {
    display: grid;
    place-items: center;
    margin-top: 2rem;
  }
  .img-container {
    height: 350px;
    max-width: 350px;
    overflow: hidden;
    object-fit: cover;
  }
  .footer {
    display: flex;

    max-width: 350px;
    align-items: center;
    justify-content: space-between;
  }
`
export default Products
