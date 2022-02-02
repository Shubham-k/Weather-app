import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/style.css";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bhiwani");

  const changeHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7a9c44c66cb7672e90d095e3406f03e7`
      )
      .then((response) => {
        console.log(response);
        setCity(response.data.main);
      })
      .catch((error) => {
        setCity(null);
        // console.log(error);
      });
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={changeHandler}
          />
        </div>
        {city == null ? (
          <p>No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}° cel</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}° cel | Max: {city.temp_max}° cel
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tempapp;
