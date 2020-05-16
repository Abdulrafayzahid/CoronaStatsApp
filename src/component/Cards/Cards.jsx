import React from 'react';
import {Card, CardContent, Grid , Typography} from '@material-ui/core';
import style from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = ({data: {confirmed, countries, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return "Loading..."
    }
    return(
        <div className={style.container}>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">  <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/></Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography varaint="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">  <CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography varaint="body2">Number of recovered from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card, style.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">  <CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography varaint="body2">Number of deaths caused by Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;

