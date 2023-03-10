import { XMarkIcon } from "@heroicons/react/20/solid";
import LocalDropdown from "./LocalDropdown";

function localeSwitcher(): JSX.Element {
  return (
    <aside
      className={`fixed h-[4.375rem] bg-black/[0.8] w-full text-white z-[1]`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center h-full relative">
        <div className="text-xs leading-5 pr-5">
          Choose another country or region to see content specific to your
          location.
        </div>
        <LocalDropdown />
        <button
          type="button"
          aria-label="continue button"
          className="ml-4 px-3 py-1 bg-white rounded-md text-gray-900"
        >
          Continue
        </button>
        <div className="absolute right-0 flex items-center my-auto">
          <XMarkIcon className=" h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </aside>
  );
}

export default localeSwitcher;
