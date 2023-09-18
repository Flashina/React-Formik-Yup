import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <div className={Styles.header}>
        <nav className='bg-dark p-3 d-flex justify-content-around'>
          <Link to = '/' className='text-light' >Home</Link>
          <Link to = '/Button' className='text-light' >Button </Link>
          <Link to = '/Todo' className='text-light' >Todo</Link>
        </nav>
    </div>
  )
}



export default Navbar
