import { Daily } from "../Types";
import { FormatTemp } from "../utils";

export default function NextDays({
  nextDaysData,
  dateList,
}: {
  nextDaysData: Daily[];
  dateList: string[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <ul role="list" className="max-w-3xl divide-y divide-gray-100">
          {nextDaysData.map((day, dayIdx) => (
            <li
              key={dayIdx}
              className="justify-between grid grid-cols-4 gap-4 py-5 text-center place-items-center"
            >
              <img
                alt={day.weather[0].main}
                src={
                  "https://openweathermap.org/img/wn/" +
                  `${day.weather[0].icon}` +
                  "@2x.png"
                }
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <p className="text-lg font-semibold leading-6 text-gray-900">
                {dateList[dayIdx]}
              </p>
              <p className="text-sm leading-6 text-gray-900">
                {FormatTemp(day.temp.max)} / {FormatTemp(day.temp.min)}
              </p>
              <p className="text-sm leading-6 text-gray-900">
                {day.weather[0].description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
