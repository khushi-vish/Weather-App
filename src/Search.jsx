import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function Search({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const api_url = "https://api.openweathermap.org/data/2.5/weather?";
  const api_key = "34ce258509b3b01d5ea4fde1e3b132b6";

  let getWhether = async () => {
    try {
      let response = await fetch(
        `${api_url}q=${city}&appid=${api_key}&units=metric`
      );
      let jsonRes = await response.json();
      let result = {
        city: city,
        temp: jsonRes.main.temp,
        temp_max: jsonRes.main.temp_max,
        temp_min: jsonRes.main.temp_min,
        humidity: jsonRes.main.humidity,
        feels_like: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };

      updateInfo(result);
    } catch (err) {
      setError(true);
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    try {
      setError(false);
      e.preventDefault();
      setCity("");
      getWhether();
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="city"
          label="City name"
          variant="outlined"
          required
          size="small"
          value={city}
        />{" "}
        &nbsp;
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          search
        </Button>
        {error && (
          <p style={{ color: "red" }}>No such place exists in our API</p>
        )}
      </form>
    </>
  );
}
