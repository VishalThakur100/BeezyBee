/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "../assets/style.css";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function Infobox({ info }) {
  const [sortedInfo, setSortedInfo] = useState([info]);
  const [sortType, setSortType] = useState("temp");
  const [cachedData, setCachedData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');


  useEffect(() => {
    const cachedResponse = localStorage.getItem("weatherData");
    if (cachedResponse) {
      setCachedData(JSON.parse(cachedResponse));
    } else {
      localStorage.setItem("weatherData", JSON.stringify([info]));
      setCachedData([info]);
    }
  }, [info]);

  useEffect(() => {
    if (cachedData) {
      const sorted = [...cachedData].sort((a, b) => b[sortType] - a[sortType]);
      setSortedInfo(sorted);
    }
  }, [sortType, cachedData]);

  useEffect(() => {
    if (info.humidity > 80) {
      setImageUrl("https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UkFJTlklMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww");
    } else if (info.temp < 15) {
      setImageUrl("https://images.unsplash.com/photo-1500646023265-d32fe230bb88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D");
    } else {
      setImageUrl("https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D");
    }
  }, [info]);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const data = {
    labels: sortedInfo.map((item, index) => `Data ${index + 1}`),
    datasets: [
      {
        label: 'Temperature',
        data: sortedInfo.map(item => item.temp),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // const HOT_URL =
  //   "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  // const COLD_URL =
  //   "https://images.unsplash.com/photo-1500646023265-d32fe230bb88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  // const RAINY_URL =
  //   "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UkFJTlklMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  // const IMG_URL =
  //   "https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="info info-container">
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Sort By</InputLabel>
        <Select value={sortType} onChange={handleSortChange} label="Sort By">
          <MenuItem value="temp">Temperature</MenuItem>
          <MenuItem value="humidity">Humidity</MenuItem>
          <MenuItem value="temp_min">Min Temp</MenuItem>
          <MenuItem value="temp_max">Max Temp</MenuItem>
        </Select>
      </FormControl>

     <div className="card-container">

     <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
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
      <div className="chart-container">
        <Line data={data} />
      </div>
    </div>
  );
}




// image={
//   info.humidity > 80
//     ? RAINY_URL
//     : info.temp < 15
//     ? COLD_URL
//     : HOT_URL
// }