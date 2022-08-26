import React from 'react'
import   "./header.css";

import { Close,MenuOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Header=()=> {


  const [active, setActive]=React.useState(false);
  
  const handleChange=()=>{
    setActive(!active);
  }

return (
 <div className="header">
  <div className="h_logo">
    <h1>Logo</h1>
  </div>
  <nav className={active ? 'navbar active':'navbar'}>


    <ul>
        <div className="closed">
            <Close className='close' onClick={handleChange}/>
        </div>

      <li>
        <Link to='/'>Home</Link>

      </li>
      <li>
        <Link to='/About' >About</Link>

      </li>
      <li>
        <Link to='/Portfolio'>Portfolio</Link>

      </li>
      <li>
        <Link to='/'>Pages</Link>

      </li>
      <li>
        <Link to='/'>Blog</Link>

      </li>
      <li>
        <Link to='/'>Contact</Link>

      </li>



    </ul>
    
  </nav>
  <div className="changer">
    <MenuOutlined className='menu' onClick={handleChange} />

  </div>


    
 </div>
  )
}

export default Header