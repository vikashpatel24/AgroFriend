import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  const myfeatures = [
    { title: "Home", path: "/" },
    { title: "Crop", path: "/crop" },
    { title: "Fertilizer", path: "/fertilizer" },
    { title: "Disease", path: "/disease" },
  ];

  const navigation = [
    { title: "Features", path: "/features" },
    { title: "Integrations", path: "/integrations" },
    { title: "About", path: "/about" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <>
      <nav
        className={` fixed  md:fixed lg:fixed  z-20 bg-gradient-to-r from-[#A7FC8F] via-[#59B2EA] to-[#E131F3] w-full  md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between  md:block">
            <Link to={"/"}>
              <img
                src="/assets/afwg-bg.png"
                width={80}
                height={80}
                alt="logo"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="menu-btn  text-black hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={` flex-1 lg:pl-60  pb-3 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-4 xl:space-x-8 md:space-y-0">
              {myfeatures.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-black hover:text-orange-700    font-semibold leading-6"
                  >
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                  </li>
                );
              })}
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-orange-900 hover:text-orange-700  font-semibold leading-6"
                  >
                    <a href={item.path} className="block">
                      {item.title}
                    </a>
                  </li>
                );
              })}
              <div className="flex-1 items-center  justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 font-semibold text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 leading-6 rounded-full md:inline-flex"
                  >
                    Contact Us
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
