import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { SearchList } from "./Search";
import { Coordinates } from "../Types";

interface PropsType {
  searchFn: (v: Coordinates) => void;
}

export default function ToolBar({ searchFn }: PropsType) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mt-1 flex flex-col sm:mt-0 sm:(flex-row flex-wrap space-x-6)"></div>
      </div>
      <div className="m-5 flex lg:(m-4 mt-0)">
        <SearchList searchFn={searchFn}></SearchList>
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
      </div>
    </div>
  );
}
