import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { MdKeyboardArrowRight } from 'react-icons/md'

import './style.css'

const Button = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <button onClick={toggle} id='myBtn'>
        Meni / Menu
      </button>
      <div
        // onClick={toggle}
        id='myModal'
        className='modal'
        style={{ display: `${isOpen ? 'block' : 'none '}` }}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h2>Meni / Menu</h2>
            <span onClick={toggle} className='close'>
              &times;
            </span>
          </div>
          <div id='item' className='modal_body'>
            <Link
              className='menu_link'
              onClick={toggle}
              activeClass='active'
              to='topli'
              spy={true}
              smooth={true}
              offset={-50}
              delay={0}
              duration={200}
            >
              topli napici / hot drinks
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className='menu_link'
              onClick={toggle}
              activeClass='active'
              to='bezalkoholni'
              spy={true}
              smooth={true}
              offset={-50}
              delay={0}
              duration={200}
            >
              bezalkoholni napici / Non-alcoholic
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className='menu_link'
              onClick={toggle}
              activeClass='active'
              to='zestina'
              spy={true}
              smooth={true}
              offset={-50}
              delay={0}
              duration={200}
            >
              Žestina / Liquor
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className='menu_link'
              onClick={toggle}
              activeClass='active'
              to='rakije'
              spy={true}
              smooth={true}
              offset={-50}
              delay={0}
              duration={200}
            >
              Rakije
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className='menu_link'
              onClick={toggle}
              activeClass='active'
              to='vina'
              spy={true}
              smooth={true}
              offset={-50}
              delay={0}
              duration={200}
            >
              Vina / Wine
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className='menu_link'
              onClick={toggle}
              activeClass='active'
              to='tocena'
              spy={true}
              smooth={true}
              offset={-50}
              delay={0}
              duration={200}
            >
              točena piva / beer on tap
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className='menu_link'
              onClick={toggle}
              activeClass='active'
              to='flasirana'
              spy={true}
              smooth={true}
              offset={-50}
              delay={0}
              duration={200}
            >
              flaširana piva / bottles
              <MdKeyboardArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Button
