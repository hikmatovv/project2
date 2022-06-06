import React from 'react'
import bginp from '../../../assets/img/blog.svg'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BsFacebook } from "react-icons/bs";
import { AiOutlineDribbble } from "react-icons/ai";

export default () => {
    return (
        <>
            <Container maxWidth='md'>
                <Grid  mt='6%' container sx={{ boxShadow: '10px 20px 10px -12px #F0F0F0' }}>
                    <Grid xs={12}  sm={5} md={5} sx={{
                        borderRadius:'0px',
                        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                        backgroundImage: `url(${bginp})`,
                        width: '100%',
                        height: '500px',
                        backgroundRepeat: 'no-repeat'

                    }}>
                        <Container maxWidth='md'>
                            <Grid pr='13%' pl='10%' pb='10%'>
                                <Typography sx={{ fontSize: '20px', fontWeight: 700, color: 'white' }}>Contact Information</Typography>
                                <Typography mt='3%' color='white'>Fill up the form and our Team will get back to you within 24 hours.</Typography>
                                <Typography mt='5%' sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography color='white'><PhoneEnabledIcon /></Typography>
                                    <Typography ml='5%' color='white'>(+40) 772 100 200</Typography>
                                </Typography>

                                <Typography mt='5%' sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography color='white'><EmailIcon /></Typography>
                                    <Typography ml='5%' color='white'>hello@gmail.com</Typography>
                                </Typography>

                                <Typography mt='5%' sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Typography color='white'><LocationOnIcon /></Typography>
                                    <Typography ml='5%' color='white'>Dyonisie Wolf Bucharest, RO 010458</Typography>
                                </Typography>

                                <Typography mt='5%' sx={{ display: 'flex', flexDirection: 'row' }}>

                                    <Typography  color='white'>
                                        <BsFacebook />
                                    </Typography>

                                    <Typography ml='10%' color='white'>
                                        <TwitterIcon />
                                    </Typography>

                                    <Typography ml='10%' color='white'>
                                        <AiOutlineDribbble style={{fontSize:'25px'}} />
                                    </Typography>

                                    <Typography ml='10%' color='white'>
                                    <InstagramIcon/>
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Container>

                    </Grid>
                    <Grid pl='5%' xs={12} sm={7} md={7} >
                        <Typography sx={{ fontWeight: 600, fontSize: '36px' }}>
                            Say Hi!
                        </Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>We’d like to talk with you.</Typography>
                        <Grid mt='10%' sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                // disabled
                                id="filled-required"
                                label="My name is"
                                defaultValue="Full name"
                                variant="standard"
                            />
                            <TextField
                                sx={{ marginTop: '5%' }}
                                // disabled
                                id="filled-required"
                                label="I'm looking for"
                                defaultValue="What you love"
                                variant="standard"
                            />
                            <TextField
                                // disabled
                                sx={{ marginTop: '5%' }}
                                id="filled-required"
                                label="Your message"
                                defaultValue="I want to say that"
                                variant="standard"
                            />

                            <TextField
                                sx={{ marginTop: '5%' }}
                                id="standard-number"
                                // label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <Grid mt='8%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Button variant='contained' sx={{ backgroundColor: '#439DEE' }}>
                                    SEND MESSAGE
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

