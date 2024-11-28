import Search from "./Search";
import Infobox from "./Infobox";
import { useState } from "react";

export default function Weather() {
  const [info, setInfo] = useState({
    city: "Delhi",
    feels_like: 36.17,
    humidity: 74,
    temp: 30.05,
    temp_max: 30.05,
    temp_min: 30.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="head">Weather App</h2>
      <Search updateInfo={updateInfo} />
      <Infobox info={info} />
    </div>
  );
}