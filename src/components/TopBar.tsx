import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { SearchList } from "./Search";
import { Coordinates } from "../Types";

interface PropsType {
  searchFn: (v: Coordinates) => void;
}

export default function ToolBar({ searchFn }: PropsType) {
  // const [seach, setSearch] = useState("");
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const val = e.target.value;
  //   console.log(val);
  //   setSearch(val);
  // };
  // const deferredQuery = useDeferredValue(seach);

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mt-1 flex flex-col sm:mt-0 sm:(flex-row flex-wrap space-x-6)"></div>
      </div>
      <div className="m-5 flex lg:(m-4 mt-0)">
        <SearchList searchFn={searchFn}></SearchList>
        {/* <input
          id="email-address"
          name="email"
          type="email"
          value={seach}
          onChange={handleSearch}
          required
          placeholder="Seach for the city"
          autoComplete="email"
          className="min-w-0 w-80 flex-auto rounded-md border-0 bg-white/5 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
        <Suspense fallback={<h2>Loading...</h2>}>
          <div>{deferredQuery}</div>
        </Suspense> */}
        <span className="ml-3  sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
            />
          </button>
        </span>

        {/* <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5"
            />
          </button>
        </span> */}
      </div>
    </div>
  );
}
