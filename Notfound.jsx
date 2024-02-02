import React from 'react'
import './Notfound.css'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <section className='Notfound'>
      <div className="container not-found-container">
        <h1>404</h1>
        <h3>Opps,This page Not Found</h3>
        <Link to={'/'} className="btn btn-border">
          Go To Home
        </Link>


      </div>
    </section>
  )
}

export default Notfound