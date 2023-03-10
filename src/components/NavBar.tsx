import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
function NavBar(): JSX.Element {
  return (
    <nav className="h-12 bg-black/[0.7] fixed top-[4.375rem] w-full z-[1]">
      <div className="max-w-5xl mx-auto px-6 flex items-center h-full">
        <ul className="flex gap-8 text-xs items-center text-white">
          <li>
            <svg
              className="fill-slate-200 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
            </svg>
          </li>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
          <li>
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </li>
          <li>
            <ShoppingBagIcon className="h-5 w-5" aria-hidden="true" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
