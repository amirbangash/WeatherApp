import React, { useState } from "react";
import { styled, Container, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import CurrentWeather from "./components/CurrentWeather";
import Forcast from "./components/Forcast";
import SearchCity from "./components/SearchCity";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";

const View = () => {
    const theme = useTheme();
    const { Loading } = useSelector((state) => state?.uiState);

    const MainWrapper = styled("div")(() => ({
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        background: theme?.palette?.background?.main,
    }));

    const PageWrapper = styled("div")(() => ({
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 1,
    }));

    const PageLayout = styled("div")(() => ({
        display: "flex",
        borderRadius: 15,
        backgroundColor: "#fff",
        boxShadow: theme?.shadows[2],
        minHeight: "70vh",
    }));

    return (
        <MainWrapper className="mainwrapper">
            {/* Main Wrapper */}
            <PageWrapper className="page-wrapper">
                {/* PageContent */}
                <Container>
                    {/* Page Layout */}
                    <PageLayout>
                        {!Loading ? (
                            <Grid container>
                                <Grid item md={4} xs={12} paddingY={6} paddingX={4}>
                                    <SearchCity />
                                    <CurrentWeather />
                                </Grid>
                                <Grid item md={8} xs={12} paddingY={6} paddingX={4}>
                                    <Forcast />
                                </Grid>
                            </Grid>
                        ) : (
                            <Loader />
                        )}
                    </PageLayout>
                    {/* End Page */}
                </Container>
            </PageWrapper>
        </MainWrapper>
    );
};

export default View;
