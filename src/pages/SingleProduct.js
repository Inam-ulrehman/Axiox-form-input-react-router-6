import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const url = 'https://course-api.com/react-store-products'

const SingleProduct = () => {
  const [oneProduct, setOneProduct] = useState([])
  const { productID } = useParams()

  const fetchData = async () => {
    try {
      const response = await axios(url)
      const data = response.data
      const findProduct = data.find((item) => item.id === productID)
      setOneProduct(findProduct)
    } catch (error) {
      console.log(error.message)
    }
  }
  const { image, name, price, company, description } = oneProduct

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
      <div className='container'>
        <div className='img-container'>
          <img className='img' src={image} alt='' />
          <div className='img-footer'>
            <h3>{name}</h3>
            <p>Price : $ {price}</p>
          </div>
        </div>
      </div>
      <div className='information'>
        <h2 className='title'>{company}</h2>
        <div className='title-underline'></div>
        <div className='btn-container'>
          <p className=''>{description}</p>
          <Link to={'/products'} className='btn'>
            Back to products
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img-container {
    padding: 4rem;
    max-width: var(--fixed-width);
    margin: 0 auto;
  }
  .img-footer {
    display: flex;
    text-align: center;
    justify-content: space-between;
    h3,
    p {
      margin: 0;
    }
    p {
      margin-top: 0.5rem;
    }
  }
  .btn-container {
    display: grid;
    place-items: center;
  }
`
export default SingleProduct
