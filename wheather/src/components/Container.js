import React from "react";
import { useWeather } from "../context/WeatherContext";

function Container() {
  const { weather } = useWeather();
  

  if (!weather) {
    return (
      <div>
        <p>Yükleniyor...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="wheatherDate light">

        {weather.list.map((data, index) => {
          //saat 12 deki verileri çekmek için böyle bir if yapısı kullandım.
          if (index % 8 === 0 || index === 39) {
            return (
              <div className="wheatherTemplate" key={index}>
                <div>
                  {/* Günü  belirtiyoruz. */}
                  <h3>
                    {
                      new Date(data.dt * 1000)
                        .toString()
                        .split(" ")[0]
                    }
                  </h3>
                  {/* Hava durumuyla ilgili görsellerimizi burda çekiyoruz. */}
                  <img
                    className="wheatherStatus"
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="weatherimage"
                  />
                  <p>
                    <span className="dark">
                      {data.main.temp_max.toFixed(0)}°{" "}
                    </span>
                    <span className="light">
                      {data.main.temp_min.toFixed(0)}°
                    </span>
                  </p>
                </div>
              </div>
            );
          }
          return "";
        })}
      </div>
    </div>
  );
}
export default Container;
