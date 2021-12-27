import React from 'react'
import {makeStyles,useTheme} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import './CardList.css';
import CardItem from './CardItem';


const useStyles =makeStyles(theme =>({
    head_section:{
        paddingTop:'20px',
        backgroundColor:'#000220',
        maxWidth:'1600px',
        margin:'-8px auto',
        position:'relative'
    },
    hero_container:{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
        width:'100%',
        margin:'8px',
        [theme.breakpoints.down('md')]: {
          display:'flex',
          flexDirection:'column',
          height:'auto',
          margin:'0px'
         },
    },
    heading1:{
        color:'white',
        fontWeight:'1000',
        fontSize:"30px"
    },  
  }))

const CardList = ({dataList}) => {
    const classes =useStyles();
    return (
        <React.Fragment>
      <CssBaseline />
      <Container className={classes.head_section} maxWidth="lg">
          <div className={classes.heading1}>Episodes</div>
          <div className={classes.hero_container}>
            {dataList.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
      </Container>
    </React.Fragment>
    )
}
export default CardList
