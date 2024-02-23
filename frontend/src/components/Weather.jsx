import React from 'react'
import {Link} from 'react-router-dom'

const Weather = () => {
  return (
    <>
         <div className="flex pt-20 flex-col min-h-[100dvh]">

         <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base" href="#">
          <SunIcon className="w-4 h-4" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="font-bold" href="#">
            Home
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Favorites
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1">
            <input placeholder="Search for a city..." />
            <button className="sr-only" type="submit">
              Submit
            </button>
          </form>
          <button className="ml-auto md:hidden" size="icon">
            <SearchIcon className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </button>
          <button className="rounded-full ml-auto" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full border"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </button>
        </div>
      </header>

      <header className="flex items-center justify-center w-full p-4">
        <div className="grid max-w-2xl grid-cols-2 items-center gap-4">
          <h1 className="text-2xl font-semibold">New York</h1>
          <p className="text-sm text-gray-500 justify-self-end">February 22, 2024</p>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full p-4 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <CloudSunIcon className="w-12 h-12" />
              <p className="text-2xl font-semibold">Cloudy</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ThermometerIcon className="w-12 h-12" />
              <p className="text-2xl font-semibold">25°C</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <DropletIcon className="w-12 h-12" />
              <p className="text-2xl font-semibold">Humidity: 50%</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <WindIcon className="w-12 h-12" />
              <p className="text-2xl font-semibold">Wind: 10 m/s</p>
            </div>
          </div>
          <div className="grid max-w-sm grid-cols-2 items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">Sunrise</p>
              <p className="text-sm font-medium">6:30 AM</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">Sunset</p>
              <p className="text-sm font-medium">5:45 PM</p>
            </div>
          </div>
        </section>
        <section className="w-full p-4 flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold">5 Day Forecast</h2>
          <div className="grid max-w-sm grid-cols-3 items-start gap-4">
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">Tomorrow</p>
              <CloudSunIcon className="w-12 h-12" />
              <p className="text-sm font-medium">25/20°C</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">Day after</p>
              <CloudSunIcon className="w-12 h-12" />
              <p className="text-sm font-medium">25/20°C</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm font-medium">In 2 days</p>
              <CloudSunIcon className="w-12 h-12" />
              <p className="text-sm font-medium">25/20°C</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default Weather;


function CloudSunIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="M20 12h2" />
        <path d="m19.07 4.93-1.41 1.41" />
        <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
        <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
      </svg>
    )
  }
  
  
  function DropletIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    )
  }
  
  
  function ThermometerIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      </svg>
    )
  }
  
  
  function WindIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </svg>
    )
  }
  
  
  
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function SunIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    )
  }
  