import React from 'react'
import {makeStyles,useTheme} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './CardList.css';

const useStyles =makeStyles(theme =>({
    card:{
        marginRight:'20px',
        marginLeft:'20px',
        marginTop:'10px',
        marginBottom:'10px',
        padding:'20px',
        border:'2px',
        borderRadius:'10px',
        boxShadow: '5px 5px',
        backgroundColor:'#00003F'
    },
    h4:{
        color:'white',
        fontWeight:'1000'
    },
    body:{
        backgroundColor:'#000220'
    },
    para:{
        color:'white',
        backgroundColor:'#00003F'
    },
}))

const CardItem = ({item}) => {
    const classes =useStyles();
    return (
        <>
        <Grid className={classes.card} item xs={12} sm={12} md={6} lg={3}>
       <div className='listItem-wrap'>
        <img src={item.coverSrc} alt='' />
       <header>
         <h4 className={classes.h4}>{item.title}</h4>
         <span>August 13, 2019</span>
       </header>
        <body className={classes.body}>
        <p className={classes.para}>
            {item.description}
        </p>
       </body>  
      </div>

  </Grid>
        </>
    )
}

export default CardItem
