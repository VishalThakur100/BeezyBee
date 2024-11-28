/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React ,{ useState } from "react";
import "../assets/style.css";
import Alert from "@mui/material/Alert";


export default function Search({ updateInfo }) {
  let [input, setinput] = useState("");
  let [error, setError] = useState(false);
  let changeInput = (event) => {
    setinput(event.target.value);
  };

  let getWeather = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const API_KEY = import.meta.env.VITE_API_KEY;
      let response = await fetch(
        `${API_URL}?q=${input}&units=metric&appid=${API_KEY}`
      );
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result = {
        city: input,
        humidity: jsonResponse.main.humidity,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(input);
      setinput("");
      let newData = await getWeather();
      updateInfo(newData);
      setError(false); 
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };
  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={input}
          className="text"
          required
          onChange={changeInput}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {error && (
          <Alert variant="outlined" severity="error">
            No Such State Exists.
          </Alert>
        )}
      </form>
    </div>
  );
}

