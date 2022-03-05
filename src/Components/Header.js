import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import { IconButton, AppBar,Toolbar } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100vh',
  },
  appbar: {
    background: 'none',
    fontFamily: 'Space Mono', 
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize:'3rem'
  },
  colorText:{
    color:'#FFAC1C',
  },
  colorWest:{
    color: '#FFAC1C'
  }


}));
export default function Header() {
    const classes = useStyles();
  return (
    <div className={classes.root}> 
          <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
              My<span className={classes.colorText}>Portfoiolo</span></h1>
            <IconButton>
                <SortIcon className={classes.icon} />
            </IconButton>
            </Toolbar>
            </AppBar>
            <div>
              <h1>Hello, <span className={classes.colorWest}>West Monroe</span>
               <br/> Welcome to <br/> 
               Michellle's Portfoiolo</h1>
            </div>
    </div>
  )
}
