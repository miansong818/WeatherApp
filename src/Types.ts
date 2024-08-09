export interface Coordinates {
  lat: number;
  lon: number;
}

// summary, date, speed, deg
export interface Daily {
  temp: Temp;
  weather: WeatherObject[];
  summary?: string;
  date?: Date | string;
  dt: number;
  sunrise: number;
  sunset: number;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  speed?: number;
  deg?: number;
  gust?: number;
  clouds: number;
  pop: number;
  rain?: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  uvi: number;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Hourly {
  temp: number;
  humidity: number;
  weather: WeatherObject[];
  time?: string;
  dt: number;
  feels_like: number;
  pressure: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  pop: number;
}
// export interface Hourly: CurrentWeather[]

export interface MainObject {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface WeatherObject {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WindObject {
  speed: number;
  deg: number;
}
export interface SysObject {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface CoordObject {
  lon: number;
  lat: number;
}
export interface CloudsObject {
  all: number;
}

export interface CurrentWeather {
  coord: CoordObject;
  weather: WeatherObject[];
  main: MainObject;
  wind: WindObject;
  clouds: CloudsObject;
  sys: SysObject;
  id?: number;
  name?: string;
  dt_txt?: string;
}

export interface LocationObject {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
  local_names?: object;
}
