import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <>
      <div className="webName">
        <Link to="/" className='webName'>
          <div id='the'>The</div>
          <div id='siren'>Siren</div></Link>
      </div>
      <nav className='items'>
        <ul>
          <li ><Link to="/" className='navitem'>Home</Link></li>
          <li ><Link to="/Bollywood" className='navitem'>Bollywood</Link></li>
          <li ><Link to="#" className='navitem'>Technology</Link></li>
          <li ><Link to="#" className='navitem'>Hollywood</Link></li>
          <li ><Link to="#" className='navitem'>Fitness</Link></li>
          <li ><Link to="#" className='navitem'>Food</Link></li>
        </ul>
      </nav>
      <div className="underline"></div>
    </>
  )
}

export default Head
