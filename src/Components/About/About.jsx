import { Box, Button, Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './About.css'
import React from 'react'
import { ArrowBack } from '@material-ui/icons';
import about from './pict/about.png'

const About = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className='main-a'>
      <Link to='/'>
        <ArrowBack className='arrow'/>
      </Link>
    <Box  sx={{width:"100%",height:"100%" }}>
        <Grid container rowSpacing='5rem' columnSpacing={{xs:1,sm:2,md:3} }>
            <Grid item  xs={12} mt={3}  >
             <h1 className='h1'>About me </h1>
            </Grid>
            <Grid item  xs={12} >
            <Box sx={{ width: '80%',marginLeft:"5rem" ,marginTop:"5rem" }}>
      <Tabs className='Tabbar'
        value={value}
        onChange={handleChange}
        textColor="white"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{marginLeft:"5rem"}}
      >
        <Tab value="one" label="About" sx={{color:"white",fontSize:"1.2rem"}} />
        <Tab value="two" label="Skill"  sx={{marginLeft:"8rem" ,width:"7rem",fontWeight:"2rem",color:'white',fontSize:"1.2rem" }} />
        <Tab value="three" label="Service"sx={{marginLeft:"8rem" ,width:"7rem",fontWeight:"2rem",color:'white',fontSize:"1.2rem"}} />
        <Tab value="Four" label="Social " sx={{marginLeft:"8rem" ,width:"7rem",fontWeight:"2rem",color:'white',fontSize:"1.2rem"}} />
        <Tab value="five" label="Award" sx={{marginLeft:"8rem" ,width:"7rem" ,fontWeight:"2rem",color:'white',fontSize:"1.2rem"}} />
       
      </Tabs>
    </Box>

            </Grid>
            <Grid item xs={6} style={{height:"100vh"}}>
             <img src={about} alt=""  className='img' />
            
            </Grid>
            <Grid item xs={6} style={{height:"100vh",marginRight:""}}>
             <h1 className='h12'>I am a Professional Mern Stack Developer</h1>
             <p className='hp'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias. Eligendi quasi eveniet, non accusantium, rerum voluptatem reiciendis voluptatibus porro facilis quaerat mollitia architecto pariatur vitae animi consequatur iure ratione?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis dolore autem vitae hic consequatur doloremque minus atque aspernatur laboriosam eius animi sit dignissimos, a explicabo! Error ea temporibus dolorum.
             </p>
             <Button variant="outlined" style={{color:"white", borderBlockColor:"wheat",marginLeft:"1rem",marginTop:"4rem"}} >Lets Talk</Button>
            </Grid>
        </Grid>
    </Box>
    </div>
  )
}

export default About