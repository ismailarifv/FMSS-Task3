import axios from "axios";
import {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import cities from "../data/turkey.json";

//Bir context oluştururuz.
const WeatherContext = createContext();

//Global olarak tutmak istediğimiz state'lerin bulunacağı bir component oluşturduk.
export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState(
    cities.find((item) => item.name === "Erzurum")
  );

  const [weather, setWeather] = useState();

  const values = {
    weather,
    setWeather,
    cityName,
    setCityName,
    cities,
  };
  // axios kullanarak wheather api'ımızı çekiyoruz.
  useEffect(() => {
    const getCity = async (cityName) => {
      const key = `${process.env.REACT_APP__API}`; 

      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.name}&units=metric&appid=${key}`
        );
        setWeather(data);
      } catch {
        alert("Veri alinirken bir hata oluştu");
      }
    };
    cityName && getCity(cityName);
  }, [cityName]);

  return (
    //Burda value içine diğer componentler tarafından erişilmesini istedğimiz değerleri girdik 
    //bunlar yukarıda değişkende tanımlı.
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
