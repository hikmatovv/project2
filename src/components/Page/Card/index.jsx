import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import card1 from '../../../assets/img/card1.png'
import card2 from '../../../assets/img/card2.png'
import card3 from '../../../assets/img/Card3.png'
import card4 from '../../../assets/img/card4.png'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default () => {
    return (
        <Grid sx={{boxShadow:'10px 20px 10px -12px #F0F0F0'}}>
            
        <Container >


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={3} >
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius: '12px' }}
                                component="img"
                                height="180"
                                image={card1}
                                alt="green iguana"
                            />
                            <Typography pl='3%' mt='5%' gutterBottom variant="h6" component="div">
                                Rover raised $65 million
                            </Typography>
                            <Typography pl='3%' variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardActionArea>
                        <Typography pl='3%' mt='3%' sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography color='#1A73E7'> Read more</Typography>
                            <Typography color='#1A73E7' ml='2%' mt='0.7%'><ArrowForwardIcon sx={{ fontSize: '17px' }} /></Typography>
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius: '12px' }}
                                component="img"
                                height="180"
                                image={card2}
                                alt="green iguana"
                            />
                            <Typography pl='3%' mt='5%' gutterBottom variant="h6" component="div">
                                Matelabs machine learning
                            </Typography>
                            <Typography pl='3%' variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardActionArea>
                        <Typography pl='3%' mt='3%' sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography color='#1A73E7'> Read more</Typography>
                            <Typography color='#1A73E7' ml='2%' mt='0.7%'><ArrowForwardIcon sx={{ fontSize: '17px' }} /></Typography>
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={4} md={3} >
                        <CardActionArea>
                            <CardMedia
                                sx={{ borderRadius: '12px' }}
                                component="img"
                                height="180"
                                image={card3}
                                alt="green iguana"
                            />
                            <Typography pl='3%' mt='5%' gutterBottom variant="h6" sx={{ display: 'flex', flexDirection: 'row' }} >
                                Matelabs machine learning

                            </Typography>
                            <Typography pl='3%' variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardActionArea>
                        <Typography pl='3%' mt='3%' sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography color='#1A73E7'> Read more</Typography>
                            <Typography color='#1A73E7' ml='2%' mt='0.7%'><ArrowForwardIcon sx={{ fontSize: '17px' }} /></Typography>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} md={3} >

               <Grid sx={{ borderRadius: '20px', backgroundImage: `url(${card4})`, width: '100%',height:'350px', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
                            <CardContent>
                            <Typography  color='white' gutterBottom variant="h5" sx={{ fontSize: '36px', fontWeight: 600 }} >
                                Flexible Work hours

                            </Typography>
                            <Typography  variant="body2" color="white">Rather than worrying about switching offices every couple years, you stay in the same place.
                            </Typography>

                            <Typography mt='5%' sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography color='white' > Read more</Typography>
                                <Typography color='white' ml='2%' mt='1.7%' ><ArrowForwardIcon sx={{ fontSize: '17px' }} /></Typography>
                            </Typography>
                            </CardContent>

                </Grid>




                    </Grid>
                </Grid>
            </Box>
        </Container>
        </Grid>
    );
}
