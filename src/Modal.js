import React, { useState } from 'react'

import './style.css'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div
      // onClick={toggle}
      id='myModal'
      className='modal'
      style={{ display: `${isOpen ? 'block' : 'none '}` }}
    >
      <div className='modal-content'>
        <div className='modal-header'>
          <h2>Menu</h2>
          <span className='close'>&times;</span>
        </div>
        <div id='item' className='modal_body'>
          <h1>Topli Napitci</h1>
          <h1>Rakije</h1>
          <a href='#tocena_piva'>TOCENA PIVA</a>
          <a href='#topli_napitci'>TOPLI NAPITCI</a>
          <h1>Vina</h1>
        </div>
      </div>
    </div>
  )
}

export default Modal
