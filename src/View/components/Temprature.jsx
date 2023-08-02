import React from "react";
import { Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Temprature = ({ forecastData }) => {
    console.log("forecastData:", forecastData)
    // chart color
    const theme = useTheme();
    const primary = theme?.palette?.primary?.main;
    const primarylight = theme?.palette?.primary?.light;

    const tempratureData = forecastData?.map((el) => {
        return Math.round(el?.main?.temp);
    });

    // chart
    const optionscolumnchart = {
        chart: {
            type: "area",
            foreColor: "#adb0bb",
            toolbar: {
                show: false,
            },
            height: 60,
            sparkline: {
                enabled: true,
            },
            group: "sparklines",
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        fill: {
            colors: [primarylight],
            type: "solid",
            opacity: 0.05,
        },
        marker: {
            show: false,
            placement: 'top'
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            y: {
                formatter: (value) => value + `<sup>°C</sup>`,
            },
            style: {
                fontSize: '22px',
            }
        }
    };
    const seriescolumnchart = [
        {
            name: "",
            color: primary,
            data: tempratureData || [],
        },
    ];

    return (
        forecastData && <Box
            sx={{
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                position: 'relative'
            }}
        >
            <Typography variant="h6" color={"text.secondary"}>
                Temprature
            </Typography>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="area"
                height="150px"
            />
        </Box>
    );
};

export default Temprature;
