import React,{useState,useEffect} from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'black',
      marginTop:'0px',
      display:'flex',
      flexDrection:'row',
      flexWrap:'wrap',
      listStyle:'none',
      padding:'10px',
      
     
    }
  });

const DataFetching = () => {
    const[episodes,setEpisodes] = useState([])
    const classes = useStyles();
    
    useEffect(()=> {
        axios.get('https://rickandmortyapi.com/api/episode')
          .then(res => {
              console.log(res.data.results)
              setEpisodes(res.data.results)
          })
          .catch(err => {
              console.log(err)
          })
    },[])
    return (
        <div className={classes.root}>
            
                {
                    episodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)
                }
           
        </div>
    )
}

export default DataFetching
