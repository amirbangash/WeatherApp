import React from "react";

const CurrentTime = () => {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const day = currentDate.getDay();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    let formattedTime = `${hours % 12 || 12}:${minutes
        .toString()
        .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

    let formattedDate = `${dayNames[day]}. ${monthNames[month]}. ${date}. ${year}`;

    let formattedDateTime = `${formattedTime}. ${formattedDate}`;

    return <div>{formattedDateTime}</div>;
};

export default CurrentTime;
