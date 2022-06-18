import { N, T } from "../helper";
import { useCurrentDateEffect } from "../hook/useCurrentDateEffect";

const Time = () => {
    const date = useCurrentDateEffect();
  
    return (
      <span className="time">{T.format(date)}</span>
    )
  }
  
  const WeatherSnap= () => {
    const temperature= N.rand(65, 85);
  
    return (
      <span className="weather">
        <i className="weather-type" />
        <span className="weather-temperature-value">{temperature}</span>
        <span className="weather-temperature-unit">°F</span>
      </span>
    )
  }
  
export  const Info=({id})=>{
    return  <div id={id} className="info">
              <Time />
              <WeatherSnap />
            </div>
  }
  