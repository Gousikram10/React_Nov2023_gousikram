import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Grid, Card, CardMedia, CardContent, Container } from '@mui/material'; // Importing Material-UI components
import {Link} from 'react-router-dom'
import MenuListComposition from './menuicon'
import  PersistentDrawerLeft from './menuicon'
import "./design.css"
const destinations = [
  {
    id: 1,
    name: 'GROCERYS',
    image:'https://th.bing.com/th/id/OIP.CYE3GcDSfJl15Szo4bJPAgHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    lable:'BUY NOW'
  },
  {
    id: 2,
    name: 'FRUITS',
    image: 'https://th.bing.com/th/id/OIP.EAbLBKaEsKp46XRA125cdAHaE8?rs=1&pid=ImgDetMain',
    lable:'BUY NOW'
  },
  {
    id: 3,
    name: 'VEGETABLES',
    image: 'https://th.bing.com/th/id/OIP.4QhPfiv2Yay60eJrr7eoDwHaE6?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Replace with the actual image URL
    lable:'BUY NOW'
  },
  {
    id: 4,
    name: 'STATIONARY ITEMS',
    image: 'https://www.limsue.co.ug/wp-content/uploads/2016/12/stationary.png',
    lable:'BUY NOW'
  },
  {
    id: 5,
    name: 'SNACKS',
    image: 'https://th.bing.com/th/id/OIP.XW1q_USPKBe9U9J7GHSJwwHaE7?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    lable:'BUY NOW'
  },
  {
    id: 6,
    name: 'MAKEUP ITEMS',
    image: 'https://th.bing.com/th/id/OIP._oIRyUme8v11y7ydoTV7wQHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    lable:'BUY NOW'
  },
  {
    id: 7,
    name: 'JUICES',
    image: 'https://th.bing.com/th/id/OIP.HsMn8DLA8reVlatfDlB22QHaE7?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    lable:'BUY NOW'
  },
  {
    id: 8,
    name: 'HOME THINGS',
    image: 'https://th.bing.com/th/id/OIP.wYdXKdkDQnhLx2y8gxNp7gHaE8?w=294&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    lable:'BUY NOW'
  },
  {
    id: 9,
    name: 'UTENSILES',
    image: 'https://th.bing.com/th/id/OIP.JlPGUJv_4N0NotK4ZHRbLgHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    lable:'BUY NOW'
  },
];
export default function Home() {
  return (
    <div className="hi"  style={{backgroundImage:'url(https://i.pinimg.com/originals/6f/6c/15/6f6c1538b050072b002dbc06bedaaf90.jpg) ',backgroundPosition:'fixed'}} >
   <MenuListComposition/>
      {/* <AppBar position="static" style={{backgroundImage:'url(https://th.bing.com/th/id/OIP.dBEPYF9l_3Mr6bw8aExtWgHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)',backgroundSize:'cover'}}> */}
     
          {/* <Link to='/lo'>
          <Button style={{paddingRight:"20px",color:'white'}}>
            <h3>LOGIN </h3>
            </Button>
          </Link>
          <Link to='/re'>

          <Button style={{color:'white'}}><h3>  REGISTER</h3></Button>
          </Link> */}
    
    <div className='giri'>
    {/* <h1 style={{textAlign:'center',fontSize:'80px',color:'rgb(24, 932, 8)'}}>WELCOME</h1> */}
    </div>
    <Container>
      <Grid container spacing={10} justifyContent="center" style={{ marginTop: '100px',marginBottom:'60px',borderRadius:5}}>
        {destinations.map((destination) => (
          <Grid item key={destination.id} >
            <Card style={{ width:'320px',  boxShadow:' 0px 0px 35px rgba(0, 0, 0, 1)'}}>
              <CardMedia
                component="img"
                height="200"
                Width="800"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" textAlign={'center'}>
                  {destination.name}
                </Typography>
                <Link to='/item'>
                <button style={{backgroundColor:'red'}} ><b>{destination.lable}</b></button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>


    <footer class="site-footer" >
          <div class="social-icons" style={{marginLeft:"32%"}}>
              <a href="#" class="text-white"><InstagramIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><FacebookIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><LinkedInIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white1"><TwitterIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white2"><YouTubeIcon style={{height:"50px",width:"70px"}}/></a>
              <a href="#" class="text-white3"><WhatsAppIcon style={{height:"50px",width:"70px"}}/></a>
          </div>
          <br></br>
          
            
              <Typography variant="body1" color="inherit" textAlign={'center'} sx={{ flexGrow: 1 }}>
                 All rights reserved.
              </Typography>
              <Typography variant="body1" color="inherit" textAlign={'center'}>
                Contact Us | Privacy Policy | Terms of Service
              </Typography>
           
         
</footer>
              </div>
  );
}
