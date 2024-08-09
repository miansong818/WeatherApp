import { useCallback, useState, Suspense } from "react";
import _, { debounce } from "lodash";
import { Coordinates } from "../Types";

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
      try {
        fetch(
          `${process.env.VITE_API_GEO_URL}?q=${searchTerm}&limit=5&APPID=${process.env.VITE_API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setResults(result);
          });
      } catch (e) {
        console.log(e);
      }
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
