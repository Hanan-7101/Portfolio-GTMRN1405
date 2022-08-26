import React from 'react'
import './Portfolio.css'
import { ArrowBack } from '@material-ui/icons'
import img from './pictures/img.jpg'
import img2 from './pictures/img2.jpg'
import img5 from './pictures/img5.png'
import {Link} from 'react-router-dom'
const Portfolio = () => {
  return (
    <div>
        
        <div className='work'>
        <div>  <Link to='/'>
        <ArrowBack className='arrow'/>
      </Link>
            
            <h1 className='h13'>Portfolio</h1></div>
           <div className="work_section">
            <div className="cards">
                <img src={img} alt=""  />
                <button>See work</button>
            </div>
            <div className="cards">
                <img src={img2} alt=""  />
                <button>See work</button>
            </div>
            <div className="cards">
                <img src={img5} alt=""  />
                <button>See work</button>
            </div>
            <div className="cards">
                <img src={img} alt=""  />
                <button>See work</button>
            </div>
            <div className="cards">
                <img src={img2} alt=""  />
                <button>See work</button>
            </div>
            <div className="cards">
                <img src={img5} alt=""  />
                <button>See work</button>
            </div>
           </div>

        </div>
    </div>
  )
}

export default Portfolio