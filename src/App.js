import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Shows from './Pages/Shows';
import WatchList from './Pages/WatchList';
import Home from './Pages/Home';
import {makeStyles,useTheme} from '@material-ui/core';

const useStyles =makeStyles(theme =>({
  app:{
    maxWidth:'1600px',
    [theme.breakpoints.down('md')]: {
      width:'100%',
      margin:'auto',
      padding:'auto'     
    },   
  }
}))

function App() {
  const classes =useStyles();
  return (
    <div className="app">
      <Router>
         <NavBar />
           <Switch>
             <Route exact path="/">
               <Home />
             </Route>
             <Route path="/episodes">
               <Shows/>
             </Route>
            <Route path="/watchlist">
              <WatchList/>
            </Route>
           </Switch>
     </Router>
    </div>
  );
}

export default App;
