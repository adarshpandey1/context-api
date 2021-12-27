import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormInput from '../components/FormInput'
import List from '../components/List'
import Footer from '../components/Footer'
import {DataProvider} from '../components/DataProvider'
import PageFooter from '../components/PageFooter'



const useStyles = makeStyles(theme =>({
    body:{
        width:'100%',
        backgroundImage:'url("assets/backmorty.jpg")',
        marginTop:'80px',
        height:'100%',
        [theme.breakpoints.down('md')]: {
          marginTop:'53px',
          
         },
    },
    main:{
        maxWidth:'500px',
        width:'100%',
        minHeight:'500px',
        boxShadow:'0 2px 6px #555',
        margin:'50px auto',
        padding:'50px',
        backgroundColor:'#00003F',
        [theme.breakpoints.down('md')]: {
          padding:'0px'
          
         },
    },
    heading:{
        textAlign:'center',
        textTransform:'uppercase',
        letterSpacing:'2px',
        fontWeight:'900',
        color:'#666'
    }
  }));

const WatchList = () => {
    const classes = useStyles();

    return (
        <div className={classes.body}>
        <DataProvider>
        <div className={classes.main}>
          <h1 className={classes.heading}>To Do List</h1>
          <FormInput />
          <List />
          <Footer />
        </div>
      </DataProvider>
      <PageFooter />
      </div>
    )
}

export default WatchList
