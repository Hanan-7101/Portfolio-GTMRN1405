import React from 'react'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import './footer.css'
import { Link } from 'react-router-dom';
const Fotter = () => {
  return (
  
       
        <div className='fotter'>
            
        <div className="f_logo">
    <h1>Logo</h1>
  </div>
  <nav className="footer-nar">


    <ul>
     

   
      <li>
        <Link to='/About'>About</Link>

      </li>
      <li>
        <Link to='/Portfolio'>Portfolio</Link>

      </li>
     
      <li>
        <Link to='/'>Blog</Link>

      </li>
      <li>
        <Link to='/'>Contact</Link>

      </li>



    </ul>
    
  </nav>
  
  <div className="icons">
            <Twitter className='icon'/>
            <Facebook  className='icon'/>
            <Instagram className='icon'/>
        </div>
    

  </div>


 

  
  )
}

export default Fotter