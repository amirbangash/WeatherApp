import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ForcastCard = ({ forecast, index }) => {
    const theme = useTheme();
    const [imageLoaded, setImageLoaded] = useState(null);

    useEffect(() => {
        import(
            `../icons/${!!Object.keys(forecast)?.length
                ? forecast?.weather?.at(0)?.icon
                : "unknown"
            }.png`
        )
            .then((image) => setImageLoaded(image.default))
            .catch((error) => {
                console.error("Error loading the image:", error);
            });
    }, [forecast]);

    const style =
        index === 0
            ? {
                backgroundColor: theme?.palette?.primary?.main,
                color: "#fff",
            }
            : {
                backgroundColor: "none",
                color: "auto",
                boxShadow: "none",
            };

    const formatedDate = forecast.dt_txt.split(" ").at(1).split(":").at(0);
    const formattedTime = `${formatedDate % 12 || 12} ${formatedDate >= 12 ? "PM" : "AM"}`;

    return (
        <Card sx={style}>
            <CardContent
                sx={{
                    minHeight: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    {formattedTime}
                </Typography>
                <img
                    style={{
                        filter: index === 0 ? "brightness(0) invert(1)" : "none",
                    }}
                    src={imageLoaded}
                    width="50"
                    alt="Forecast Icon"
                />
                <Typography variant="body1" align="center">
                    Humadity
                    <br />
                    {forecast?.main?.humidity} %
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ForcastCard;
