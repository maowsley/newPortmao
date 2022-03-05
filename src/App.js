import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './Components/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/car.gif'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
export default function App() {
    const classes = useStyles();
    return <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        </div>
}








