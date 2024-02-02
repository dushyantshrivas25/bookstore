import React from 'react'
import { FootersLinksData } from '../../Data/Data'
import { Link } from 'react-router-dom'
import './footer.css'

const footer = () => {
  return (
    <footer>
<div style={{padding:"30px"}} className="container footer-container">
  <div>
    <h4>About Us</h4>
    <ul className="about-params param-links">
      {
        FootersLinksData.Aboutus.map(({link,linkname},index)=>{
          return(
            <li key={index}><Link to={link}>{linkname}</Link></li>
          )

        })
      }
    </ul>
  </div>


  <div>
    <h4>Discover Us</h4>
    <ul className="discoveParams param-links">
      {
        FootersLinksData.Discover.map(({link,linkname},index)=>{
          return(
            <li key={index}><Link to={link}>{linkname}</Link></li>
          )

        })
      }
    </ul>
  </div>

  <div>
    <h4>My Account</h4>
    <ul className="myAccount-params param-links">
      {
        FootersLinksData.Myaccount.map(({link,linkname},index)=>{
          return(
            <li key={index}><Link to={link}>{linkname}</Link></li>
          )

        })
      }
    </ul>
  </div>
  <div>
    <h4>Help</h4>
    <ul className="Help-params param-links">
      {
        FootersLinksData.Help.map(({link,linkname},index)=>{
          return(
            <li key={index}><Link to={link}>{linkname}</Link></li>
          )

        })
      }
    </ul>
  </div>

  
</div>

    </footer>
  )
}

export default footer