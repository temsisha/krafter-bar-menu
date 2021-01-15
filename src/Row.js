import React, { useState, useEffect } from 'react'
const Row = ({ title, fetchUrl, id }) => {
  const [artikli, setArtikli] = useState([])

  useEffect(() => {
    function fetchData() {
      const request = fetchUrl
      setArtikli(request)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className='section'>
      <h2 className='category sticky'>{title}</h2>
      <div id={id} className='menu'>
        {artikli.map((artikal, index) => (
          <div className='card' key={index}>
            <div className='card__item_name'>
              <div className='name'>
                <p>{artikal.product}</p>
                <h1>{artikal.productName ? artikal.productName : ''}</h1>
              </div>
              <div className='price'>
                <h1>RSD {artikal.price}.00</h1>
              </div>
            </div>
            <div className='info'>
              <p>
                {artikal && artikal.type} {artikal && artikal.volume}
                {`${artikal.volume ? '% vol.' : ''}`}
              </p>
            </div>
            <div className='description'>
              <p>{artikal && artikal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row
