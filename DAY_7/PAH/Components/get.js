import { useEffect, useState } from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Get() {
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/posts");
            setData(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
            <>
                {(data.map((obj) => (
                    <Card variant='outlined'>
                        <h5>{obj.name}</h5>
                        <h3>{obj.description}</h3>
                        <h2>{obj.price}</h2>
                        </Card>
                )))}
            </>
        );
}

