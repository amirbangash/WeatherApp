import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import CurrentTime from "./CurrentTime";
import { useSelector } from "react-redux";

const Weather = () => {
    const { weatherData } = useSelector((state) => state?.weather);
    const [imageLoaded, setImageLoaded] = useState(null);

    useEffect(() => {
        import(
            `../icons/${!!Object.keys(weatherData)?.length
                ? weatherData?.weather?.at(0)?.icon
                : "unknown"
            }.png`
        )
            .then((image) => setImageLoaded(image.default))
            .catch((error) => {
                console.error("Error loading the image:", error);
            });
    }, [weatherData]);

    return (
        !!weatherData?.weather?.length ?
            <Grid
                container
                spacing={2}
                alignItems="center"
                textAlign="center"
                height="100%"
            >
                <Grid item md={12}>
                    <Typography variant="h6" color={"text.secondary"}>
                        <CurrentTime />
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <img src={imageLoaded} alt="Weather Icon" />
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h2" fontWeight={700} color={"text.primary"}>
                        {Math.round(weatherData?.main?.temp)}
                        <sup>°C</sup>
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography variant="h4" fontWeight={700} color={"text.primary"}>
                        {weatherData?.weather[0]?.main}
                    </Typography>
                </Grid>

                <Grid item md={6}>
                    <Typography variant="body1" mb={2} color={"text.secondary"}>
                        Humidity
                    </Typography>
                    <Typography variant="body1" fontSize={22} fontWeight={600}>
                        {weatherData?.main?.humidity}%
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography variant="body1" mb={2} color={"text.secondary"}>
                        Wind Speed
                    </Typography>
                    <Typography variant="body1" fontSize={22} fontWeight={600}>
                        {weatherData?.wind?.speed}km/h
                    </Typography>
                </Grid>
            </Grid>
            : <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Typography variant="h5">
                    Weather not found!
                </Typography>
            </Box>
    );
};

export default Weather;
