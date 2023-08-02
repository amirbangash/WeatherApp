import React from "react";
import ForcastCard from "./ForcastCard";
import { Grid } from "@mui/material";
import Temprature from "./Temprature";
import { useSelector } from "react-redux";

const Forcast = () => {
    const { list: forecastData } = useSelector(
        (state) => state?.forecast?.forecastData
    );

    return (
        <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <Temprature forecastData={forecastData} />
            </Grid>
            {forecastData?.map((el, index) => {
                return (
                    <Grid key={el?.dt} item md={3} xs={6}>
                        <ForcastCard forecast={el} index={index} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Forcast;
