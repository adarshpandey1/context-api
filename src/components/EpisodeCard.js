import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'#400000',
      margin:'8px',
      border:'5px',
      borderRadius:'10px',
      height:'9rem',
      "&:hover": {
        backgroundColor: '#00003F'
      }
    },
    card:{
      maxHeight:'100%'
    },
   
   
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: '50',
      fontWeight:'500',
      color:'white',
      backGroundColor:'white'
    },
    pos: {
      marginBottom: 12,
      color:'white',
      marginTop:'10px'
    },
  });
  
const EpisodeCard = ({
    episode:{name,air_date,episode},
}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.card} item xs={12} lg={3}>
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>Name : {name}</Typography>
          
          <Typography className={classes.pos} color="textSecondary">
             Release Date : {air_date}
          </Typography>
          <Typography className={classes.pos}  component="h4">
            Episode: {episode}
            
           
          </Typography>
        </CardContent>
        
      </Card>
      </Grid>
    )
}

export default EpisodeCard
