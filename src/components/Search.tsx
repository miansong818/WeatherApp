import { useCallback, useState, Suspense } from "react";
import _, { debounce } from "lodash";
import { Coordinates, LocationObject } from "../Types";

const rest: LocationObject[] = [
  {
    name: "New York County",
    local_names: {
      ar: "نيويورك",
      it: "New York",
      uk: "Нью-Йорк",
      es: "Nueva York",
      en: "New York",
      kn: "ನ್ಯೂಯೊರ್ಕ್",
      be: "Нью-Ёрк",
      eo: "Novjorko",
      oc: "Nòva York",
      ru: "Нью-Йорк",
      el: "Νέα Υόρκη",
      ko: "뉴욕",
      cs: "New York",
      cy: "Efrog Newydd",
      he: "ניו יורק",
      ja: "ニューヨーク",
      zh: "纽约/紐約",
      ca: "Nova York",
      fa: "نیویورک",
      fr: "New York",
      is: "Nýja Jórvík",
      hi: "न्यूयॊर्क्",
      vi: "New York",
      gl: "Nova York",
      pt: "Nova Iorque",
      te: "న్యూయొర్క్",
      de: "New York",
      pl: "Nowy Jork",
    },
    lat: 40.7127281,
    lon: -74.0060152,
    country: "US",
    state: "New York",
  },
  {
    name: "New York",
    local_names: {
      ta: "நியூ யோர்க்",
      en: "New York",
    },
    lat: 55.0252998,
    lon: -1.4869496,
    country: "GB",
    state: "England",
  },
  {
    name: "New York",
    local_names: {
      ta: "நியூ யோர்க்",
      en: "New York",
    },
    lat: 39.6852874,
    lon: -93.9268836,
    country: "US",
    state: "Missouri",
  },
  {
    name: "New York",
    lat: 7.9631123,
    lon: -11.7636869,
    country: "SL",
    state: "Bo District",
  },
];

interface PropsType {
  searchFn: (v: Coordinates) => void;
}

const initLocation = { name: "", lat: 0, lon: 0, country: "", state: "" };

export const SearchList = ({
  //   searchTerm,
  searchFn = () => null,
}: PropsType) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([initLocation]);

  //debounced fetch API call
  const debouncedSearch = useCallback(
    debounce((searchTerm: any) => {
      fetch(
        `${import.meta.env.VITE_API_GEO_URL}?q=${searchTerm}&limit=5&APPID=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setResults(result);
        });
    }, 500),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === "") {
      setResults([]);
    } else {
      debouncedSearch(value);
    }
  };

  return (
    <div>
      <input
        id="searchBar"
        name="search"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        className="min-w-0 w-80 flex-auto rounded-md border-0 bg-white/5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-9"
      />
      <ul>
        <Suspense fallback={<h2>Loading...</h2>}>
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => {
                searchFn({ lat: result.lat, lon: result.lon });
                setSearchTerm("");
                setResults([]);
              }}
              className="flex gap-x-4 bg-slate-200 text-black cursor-pointer hover:bg-slate-500"
            >
              <span>{result.name}</span>
              <span>{result.state}</span>
              <span>{result.country}</span>
            </li>
          ))}
        </Suspense>
      </ul>
    </div>
  );
};
