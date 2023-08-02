import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CurrentTime from "./CurrentTime";

const CurrentWeather = () => {
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
        <>
            {!!weatherData?.weather?.length ? (
                <>
                    <Typography
                        variant="h6"
                        align="center"
                        mt={6}
                        mb={4}
                        color={"text.secondary"}
                    >
                        <CurrentTime />
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                    >
                        <img src={imageLoaded} alt="Weather Icon" />
                        <Typography
                            variant="h2"
                            fontWeight={700}
                            align="center"
                            color={"text.primary"}
                        >
                            {Math.round(weatherData?.main?.temp)}
                            <sup>°C</sup>
                        </Typography>
                    </Box>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        align="center"
                        color={"text.primary"}
                    >
                        {weatherData?.weather[0]?.main}
                    </Typography>
                    <Grid container align="center" mt={8} justifyContent="space-around">
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
                </>
            ) : (
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Typography variant="body1">Serch your city first</Typography>
                </Box>
            )}
        </>
    );
};

export default CurrentWeather;
