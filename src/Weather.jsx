import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Weather({ info }) {
  const img_url =
    "https://images.unsplash.com/photo-1613908614131-77aed27b030b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const hot_url =
    "https://plus.unsplash.com/premium_photo-1680971927734-82b07e5963e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
  const cold_url =
    "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyfGVufDB8fDB8fHww";
  const rain_url =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <>
      <h1>{info.city}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.weather}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature : {info.temp}&deg;</p>
            <p>Min Temperature : {info.temp_min}&deg;</p>
            <p>Max Temperature : {info.temp_max}&deg;</p>
            <p>Humidity : {info.humidity}&deg;</p>
            <p>Weather description : {info.feels_like}&deg;</p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
