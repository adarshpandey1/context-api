import React from 'react'
import {makeStyles,useTheme} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import backmorty from '../images/backmorty.jpg';
import Paper from '@material-ui/core/Paper';


const useStyles =makeStyles(theme =>({
    head_section:{
        paddingTop:'77px',
        backgroundColor:'#000220',
        maxWidth:'1600px',
        margin:'0 auto',
        position:'relative',
        [theme.breakpoints.down('md')]: {
            paddingTop:'0px'
           },
    },
    hero_container:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        margin:'0',
        backgroundImage:'url("assets/backmorty.jpg")',
        backgroundPosition:'top right',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
    },
    info_container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'35%',
        position:'relative',
        padding:'16px 32px 64px 0',
        
        maxWidth:'800px',
        marginLeft:'18px',
        marginTop:'-80px',
        [theme.breakpoints.down('md')]: {
            marginTop:'0px',
           },
    },
    baneer_img:{
        position:'relative',
        borderRadius:'10px'       
    },
    img:{
        width:'100%',
        padding:'2px',
        margin:'auto',
        [theme.breakpoints.down('md')]: {
            display:'none'
           },
    },
    detail_container:{
        margin:'40px 0 22px 0'
    },
    title:{
        fontSize:'24px',
        lineHeight:'30px',
        fontWeight:'700',
        color:'#fff',
        [theme.breakpoints.down('md')]: {
            color:'#A3A300'
           },
    },
    info:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        [theme.breakpoints.down('md')]: {
            marginBottom:'-13px'
           },
    },
    span_item:{
         fontSize:'14px',
         fontWeight:'500',
         color:'#fff',
         lineHeight:'18px',
         margin:'0 4px',
         [theme.breakpoints.down('md')]: {
            color:'black',
            fontSize:'14px'
           },
    },
    description:{
        fontSize:'16px',
        lineHeight:'22px',
        fontWeight:'400',
        color:'#fff',
        maxWidth:'100%',
        [theme.breakpoints.down('md')]: {
            display:'none'
           },
    },
    background_img:{
        backgroundImage: `url(${backmorty})`
    },
    
      img1:{
          width:'100%',
          marginTop:'0px'
      }
    
  }))
const Banner = () => {
    const classes =useStyles();
    return (
        <React.Fragment>
      <CssBaseline />
      <Container className={classes.head_section} maxWidth="sm">
        <div className={classes.hero_container}>
         <div className={classes.info_container}>
            <div className={classes.baneer_img}>
            <img  className={classes.img} src = "assets/rickylogo.png" />
            </div>
            <div className={classes.detail_container}>
              <h1 className={classes.title}>
                  Rick and Morty
              </h1>
            </div>
            <div className={classes.info}>
              <span className={classes.span_item}>2013</span>
              <span className={classes.span_item}>|</span>
              <span className={classes.span_item}>18+</span>
              <span className={classes.span_item}>|</span>
              <span className={classes.span_item}>5 Seasons</span>
              <span className={classes.span_item}>|</span>
              <span className={classes.span_item}>TV Comedies</span>
            </div>
            <div className={classes.description}>
                <p>Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe.</p>
            </div>
            
         </div>
         <div className={classes.background_img}>
         {/* <img  className={classes.img1} src = "assets/backmorty.jpg" /> */}
            </div>
        </div>
      </Container>
    </React.Fragment>
    )
}

export default Banner
