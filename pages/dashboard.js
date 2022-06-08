import React from "react";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { useState, useEffect } from "react";
import { Rotate } from "react-reveal";
import {
  BsArrowRight,
  BsPerson,
  BsPersonCircle,
  BsStars,
  BsX,
} from "react-icons/bs";

function DashBoard() {
  const [profile, setProfile] = useState(false);
  const [location, setLocation] = useState({
    title: "",
    description: "",
    lat: 0,
    lng: 0,
    name: "",
  });
  const [add, setAdd] = useState(false);

  const getLocation = async () => {
    console.log("getLocation");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(
          `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`
        );
        setLocation({
          title: "",
          description: "",
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          name: "",
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const close = () => {
    setAdd(false);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="overflow-y-auto h-screen bg-slate-100">
      <div className="w-full p-4 border-b flex items-center bg-white z-10">
        <div className="flex">
          <img
            src="/logos/location.png"
            className="h-10 w-10 object-cover"
            alt=""
          />
          <div className="ml-3 flex flex-col justify-center">
            <h1 className="text-xl font-semibold">dropPin</h1>
            <p className="text-xs text-gray-500">
              A simple way to mark your location
            </p>
          </div>
        </div>
        <div className="ml-auto lg:hidden">
          <MdIcons.MdMenu className="text-xl" />
        </div>
        <div
          onMouseEnter={() => setProfile(true)}
          onMouseLeave={() => setProfile(false)}
          className="relative rounded-full w-12 h-12 bg-orange-50 ml-auto p-2 flex items-center justify-center cursor-pointer"
        >
          <span className="text-base text-orange-500 font-medium">PB</span>
          {profile && (
            <div className="absolute top-0 right-0 shadow-2xl shadow-slate-200">
              <div className="h-64 w-56 bg-white border rounded-md"></div>
            </div>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="bg-white shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-slate-300 w-72 rounded-md transition-all p-3">
          <div className="flex items-center">
            <span className="font-semibold">Home</span>
            <div className="flex items-center ml-auto">
              <BsIcons.BsBookmark className="text-sm" />
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">6 Jun 2022</p>
          <details className="text-[10px] text-slate-500 leading-5 mt-2 transition-all select-none relative">
            <summary className="text-[11px] mb-1 cursor-pointer">
              View description
            </summary>
            <p className="absolute top-5 left-0 bg-white shadow-xl shadow-slate-500/20 border rounded p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              porro at quis molestias incidunt adipisci velit ipsum. Facere
              laboriosam doloribus qui architecto impedit, veniam cumque,
              praesentium quo odio nisi minus maxime, magnam sit nostrum porro
              provident ipsam.
            </p>
          </details>
          <div className=" overflow-hidden rounded-sm mt-3">
            <img src="https://api.mapbox.com/styles/v1/mapbox/light-v9/static/pin-s+f00(87.287643,23.550151)/87.287643,23.550151,16,0,0/640x350?access_token=pk.eyJ1Ijoibmlja2ZpdHoiLCJhIjoiY2p3d2g3N2F5MDZ4azQwcG12dWticDB0diJ9.qnQV5QgYN_eDwg4uUdbO6Q" />
          </div>

          <div className="flex items-center mt-3">
            <a
              href={`https://maps.google.com/?q=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center justify-center w-full bg-orange-500 text-white hover:bg-orange-600 h-8 mr-2 rounded transition-all"
            >
              Navigate
            </a>
            <button className="flex items-center justify-center px-4">
              <BsIcons.BsShare className="text-sm" />
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => getLocation() & setAdd(!add)}
        className="fixed bottom-10 right-6 flex items-center justify-center p-4 w-fit rounded-full bg-orange-500 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-[2px] active:shadow-none active:translate-y-0 text-white text-sm transition-all"
      >
        <BsIcons.BsPlus className="text-3xl" />
      </button>
      {add && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="w-[650px] min-h-[600px] max-h-screen overflow-y-auto p-8 bg-white">
            <div className="flex justify-between">
              <div className="flex">
                <img
                  src="/logos/location.png"
                  className="h-10 w-10 object-cover"
                  alt=""
                />
                <div className="ml-3 flex flex-col justify-center">
                  <h1 className="text-xl font-semibold">dropPin</h1>
                  <p className="text-xs text-gray-500">
                    Add new location to your map
                  </p>
                </div>
              </div>
              <BsX
                onClick={() => close()}
                className="text-3xl text-gray-500 cursor-pointer"
              />
            </div>
            <div className="px-4 py-2 flex items-center bg-slate-50 mt-7">
              <MdIcons.MdLocationSearching className="text-2xl mr-4" />
              <span className="mr-4 text-sm inline-flex flex-col justify-center">
                <span className="font-medium">Longitude</span>
                <span className="text-xs text-gray-500 mt-2">
                  {location.lng}
                </span>
              </span>
              <span className="mr-10 text-sm inline-flex flex-col justify-center">
                <span className="font-medium">Latitude</span>
                <span className="text-xs text-gray-500 mt-2">
                  {location.lat}
                </span>
              </span>
            </div>
            <div>
              <div className="mt-6 flex items-center whitespace-nowrap border px-3 group focus-within:border-black transition-all select-none">
                <span className="text-xl text-gray-500 group-focus-within:text-black">
                  @
                </span>
                <input
                  type="text"
                  placeholder="Enter location title"
                  className="w-full outline-none p-3"
                  value={location.title}
                  onChange={(e) =>
                    setLocation({ ...location, title: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center mt-4">
                <span
                  onClick={() =>
                    setLocation({
                      ...location,
                      title: "Home",
                    })
                  }
                  className={`flex items-center text-sm ${
                    location.title.toLocaleLowerCase() === "home"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }  rounded px-2 py-1 mr-2 cursor-pointer transition-all`}
                >
                  <MdIcons.MdHome className="mr-2 text-base" />
                  Home
                </span>
                <span
                  onClick={() =>
                    setLocation({
                      ...location,
                      title: "Parked bike",
                    })
                  }
                  className={`flex items-center text-sm ${
                    location.title.toLocaleLowerCase() === "parked bike"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }  rounded px-2 py-1 mr-2 cursor-pointer transition-all`}
                >
                  <MdIcons.MdOutlineDirectionsBike className="mr-2 text-base" />
                  Parked bike
                </span>
                <span
                  onClick={() =>
                    setLocation({
                      ...location,
                      title: "Parked car",
                    })
                  }
                  className={`flex items-center text-sm ${
                    location.title.toLocaleLowerCase() === "parked car"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  } rounded px-2 py-1 mr-2 cursor-pointer transition-all`}
                >
                  <MdIcons.MdDirectionsCar className="mr-2 text-base" />
                  Parked car
                </span>
                <span
                  onClick={() =>
                    setLocation({
                      ...location,
                      title: "Office",
                    })
                  }
                  className={`flex items-center text-sm ${
                    location.title.toLocaleLowerCase() === "office"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  } rounded px-2 py-1 mr-2 cursor-pointer transition-all`}
                >
                  <MdIcons.MdLocalPostOffice className="mr-2 text-base" />
                  Office
                </span>
                <span
                  onClick={() =>
                    setLocation({
                      ...location,
                      title: "School",
                    })
                  }
                  className={`flex items-center text-sm ${
                    location.title.toLocaleLowerCase() === "school"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  } rounded px-2 py-1 mr-2 cursor-pointer transition-all`}
                >
                  <MdIcons.MdSchool className="mr-2 text-base" />
                  School
                </span>
              </div>
              <div className="mt-6 flex items-center whitespace-nowrap border px-0 group focus-within:border-black transition-all">
                <textarea
                  name=""
                  className="p-3 w-full outline-none"
                  id=""
                  placeholder="Add description"
                  cols="30"
                  rows="5"
                  value={location.description}
                  onChange={(e) =>
                    setLocation({ ...location, description: e.target.value })
                  }
                ></textarea>
              </div>
              <form
                onSubmit={() => {}}
                className="mt-6 flex items-center whitespace-nowrap border px-0 group focus-within:border-black transition-all"
              >
                <input
                  type="text"
                  placeholder="Enter tags"
                  className="w-full outline-none p-3"
                />
                <button
                  type="submit"
                  className="bg-slate-800/70 hover:bg-slate-700 active:bg-slate-800 text-white p-3"
                >
                  Add
                </button>
              </form>
              <div className="flex">
                <button
                  disabled={location.lat === 0 || location.lng === 0}
                  style={{
                    opacity: location.lat === 0 || location.lng === 0 ? 0.5 : 1,
                  }}
                  className="p-3 bg-orange-500 hover:bg-orange-600 text-white text-center mt-16 w-full ml-auto transition-all"
                >
                  {location.lat === 0 || location.lng === 0
                    ? "Searching for location ..."
                    : "Add location"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashBoard;
