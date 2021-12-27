import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    footer_body:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        backgroundColor:'black'
    },
    title:{
        fontSize:'1rem',
        color:'white',
        marginTop:'15px',
        marginBottom:'15px',
        fontSize:'10px'
            
    }
  }));

const PageFooter = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer_body}>
            <h1 className={classes.title}>Copyright © 2021 Ricky and Morty All Rights Reserved
</h1>
        </div>
    )
}

export default PageFooter
