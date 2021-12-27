import React from 'react'
import {useState} from 'react';
import Banner from '../components/Banner'
import CardList from '../components/CardList'
import {makeStyles,useTheme} from '@material-ui/core';
import PageFooter from '../components/PageFooter';
import { dataList } from '../constants';

const useStyles =makeStyles(theme =>({
    home:{
      maxWidth:'1600px',
    }
  }))

const Home = () => {
  
    const classes =useStyles();
    return (
        <div className={classes.home}>
            <Banner />
            <CardList dataList={dataList}  />
            <PageFooter />           
        </div>
    )
}

export default Home
