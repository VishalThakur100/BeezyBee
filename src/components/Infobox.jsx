/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "../assets/style.css";

export default function Infobox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1500646023265-d32fe230bb88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UkFJTlklMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  // const IMG_URL =
  //   "https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="info">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp < 15
                ? COLD_URL
                : HOT_URL
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.temp_min}</p>
              <p>Max Temp = {info.temp_max}</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and feels
                like {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}