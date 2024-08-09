import { CurrentWeather, Hourly } from "../Types";
import { FormatTemp, FormatHour } from "../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Today({
  currentData,
  nextHoursData,
}: {
  currentData: CurrentWeather;
  nextHoursData: Hourly[];
}) {
  const currentHour = new Date();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-2xl text-center">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My location
          </h2>
          <h3 className="mt-6 text-4xl leading-normal  text-gray-600">
            {currentData.name}
          </h3>
          <p className="h mt-6 text-8xl leading-normal text-gray-600">
            {FormatTemp(currentData?.main?.temp)}
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            L: {currentData.main?.temp_min} H: {currentData.main?.temp_max}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {currentData.weather?.[0]?.main}
          </p>
        </div>
        <div className="max-w-lg lg:max-w-2xl m-auto">
          <div className="m-10 justtify-center">
            <Slider {...settings}>
              {nextHoursData.map((hour, hourIdx) => (
                <div
                  key={hourIdx}
                  className="flex text-center justify-center gap-x-2 rounded-md border-solid border-2 text-gray-900"
                >
                  <div className="justify-center flex">
                    <img
                      alt=""
                      src={
                        "https://openweathermap.org/img/wn/" +
                        `${hour.weather?.[0]?.icon}` +
                        "@2x.png"
                      }
                      className="h-16 w-16 rounded-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-400">
                      Time:{" "}
                      {hourIdx === 0
                        ? "Current"
                        : FormatHour(
                            currentHour.setHours(currentHour.getHours() + 1)
                          )}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      humidity: {hour.humidity}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Temp: {FormatTemp(hour.temp)}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
