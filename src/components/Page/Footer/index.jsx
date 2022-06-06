import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default () => {
    return (
        <>
            <Container maxWidth="md">
                <Grid mt='10%' container sx={{ display: 'flex', flexDirection: 'row', alignItem: 'center', justifyContent: 'space-between' }}>
                    <Grid>
                        <Typography color='#344767' sx={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Roboto' }}>
                            MATERIAL DESIGN
                        </Typography>
                        <Grid mt='5%' sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography color='#344767' sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'Roboto' }}>
                                Home
                            </Typography> 
                               <Typography color='#344767' sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'Roboto' }}>
                                About
                            </Typography>
                                <Typography color='#344767' sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'Roboto' }}>
                                Blog
                            </Typography>
                                <Typography color='#344767' sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'Roboto' }}>
                                Services
                            </Typography>

                        </Grid>
                    </Grid>
                    <Grid >
                        <Typography>
                            hsdkjadh
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}
