import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import  { Link } from 'react-router-dom';

function Projects() {
    const ImageBackdrop = styled('div')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#000',
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
      }));
    const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('md')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover .imageBackdrop': {
            opacity: 0.25,
        },
        '&:hover .imageMarked': {
            opacity: 0,
        },
        '&:hover .imageTitle': {
            border: '4px solid currentColor',
            background: 'rgba(0, 0, 0, 0.8)'
        },
        '& .imageTitle': {
            position: 'relative',
            padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
        },
        '& .imageMarked': {
            height: 3,
            width: 18,
            background: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        }
    }));
    const images = [
        {
          url: require('../img/therollroster.png'),
          title: 'The Roll Roster',
          width: '50%',
          bgImage: 'cover',
          bgP: '',
          link: '/projects/technical-doc'
        },
        {
          url: require('../img/boardGamesLandingPage.png'),
          title: 'Landing Page',
          width: '50%',
          bgImage: 'cover',
          bgP: '',
          link: '/projects/landing-page'
        },
        {
          url: require('../img/drumMachine.png'),
          title: 'Drum Machine',
          width: '40%',
          bgImage: 'cover',
          bgP: 'center center',
          link: '/projects/drum-machine'
        },
        {
          url: require('../img/tomatoClock.png'),
          title: '25-5 Clock',
          width: '20%',
          bgImage: 'cover',
          bgP: 'center center',
          link: '/projects/25-5-clock'
        },
        {
          url: require('../img/calculator.png'),
          title: 'Calculator',
          width: '40%',
          bgImage: 'cover',
          bgP: 'center center',
          link: '/projects/calculator'
        },
    ];
    return (
        <Box component="section" sx={{pb: 5, pt: 10, bgcolor: '#fcda68'}} id="projects">
            <Container>
                <Typography variant="h2" marked="center" align="center">
                    Projects
                </Typography>
                <Box sx={{ py: 5, display: 'flex', flexWrap: 'wrap'}}>
                    {images.map((image)=> (
                      <ImageIconButton key={image.title} style={{width: image.width}}>
                        <Box
                          sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundSize: `${image.bgImage}`,
                            backgroundPosition: `${image.bgP}`,
                            backgroundImage: `url(${image.url})`,
                          }}
                        />
                        <ImageBackdrop className="imageBackdrop" />
                        <Link to={image.link}>
                          <Box
                            sx={{
                              position: 'absolute',
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'common.white',
                            }}
                          >
                            <Typography component="h3" variant="h6" color="inherit" className="imageTitle">
                              {image.title}
                            </Typography>
                          </Box>
                        </Link>
                      </ImageIconButton>
                    ))}
                </Box>
            </Container> 
        </Box>
        
    )
}

export default Projects;