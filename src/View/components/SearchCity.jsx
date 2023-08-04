import React, { useEffect, useState } from "react";
import { citiesApi } from "../../services/api";
import { AsyncPaginate } from "react-select-async-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/weather/action";
import { getForecast } from "../../store/forecast/action";
import { loaderAction } from "../../store/uiState/action";

const SearchCity = () => {
    const dispatch = useDispatch();
    const { name: city } = useSelector((state) => state?.weather?.weatherData)
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const res = await citiesApi.get(
                `geo/cities?minPopulation=1000000&namePrefix=${inputValue}`
            );
            return {
                options: res?.data?.data?.map((city) => {
                    return {
                        value: `${city?.latitude} ${city?.longitude}`,
                        label: `${city?.city}, ${city?.countryCode}`,
                    };
                }),
            };
        } catch (err) {
            console.log("Error", err);
        }
    };

    const fetchWeatherDetails = async () => {
        const location = search?.value?.split(" ");
        dispatch(loaderAction(true));
        await dispatch(getWeather(location.at(0), location.at(1)));
        await dispatch(getForecast(location.at(0), location.at(1)));
        dispatch(loaderAction(false));
    }

    useEffect(() => {
        if (search) {
            fetchWeatherDetails();
        }
    }, [search]);


    const handleChange = (searchData) => {
        setSearch(searchData);
    };

    return (
        <AsyncPaginate
            placeholder={city ? city : "Your City"}
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
    );
};

export default SearchCity;
