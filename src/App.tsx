import { useEffect, useState } from "react";
import "./App.css";
import Today from "./components/Today";
import { Coordinates, CurrentWeather, Daily, Hourly } from "./Types";
import NextDays from "./components/NextDays";
import { GetDates } from "./utils";
import Header from "./components/Header";
import {
  MockDailyData,
  MockCurrentWeather,
  MockHourlyData,
} from "./mockData/MockWeather";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error";

const initCurrentWeather: CurrentWeather = MockCurrentWeather;

const hours: Hourly[] = MockHourlyData;
const nextDays: Daily[] = MockDailyData;

function App() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const [currentWeather, setCurrentWeather] = useState(initCurrentWeather);
  const [nextHoursData, setNextHoursData] = useState(hours);
  const [nextDaysData, setNextDaysData] = useState(nextDays);
  const dayCount = 16;
  const dateList = GetDates(dayCount);

  // Fetch the weather location API, update the current weather state
  const fetchWeatherForCurrentLocation = async () => {
    const { lat, lon } = coordinates;
    await fetch(
      `${process.env.VITE_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrentWeather(result);
      });
  };

  //get the current location coordinates on mount
  const getCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });

    //
    await fetchWeatherForCurrentLocation();
  };

  //
  const fetchData = async () => {
    const { lat, lon } = coordinates;
    await fetch(
      `${process.env.VITE_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setNextHoursData(result.hourly);
        setNextDaysData(result.daily);
      });
  };

  //Update current weather when location coordinates updates
  useEffect(() => {
    fetchWeatherForCurrentLocation();
    fetchData();
  }, [coordinates]);

  // set weather data on mount with the current location
  useEffect(() => {
    getCurrentLocation;
    fetchData();
  }, []);

  const handleInputChange = (result: Coordinates) => {
    setCoordinates(result);
  };

  return (
    <>
      <Header searchFn={handleInputChange} />
      <ErrorBoundary fallback={<Error />}>
        <Today
          currentData={currentWeather}
          nextHoursData={nextHoursData}
        ></Today>

        <NextDays nextDaysData={nextDaysData} dateList={dateList}></NextDays>
      </ErrorBoundary>
    </>
  );
}

export default App;
