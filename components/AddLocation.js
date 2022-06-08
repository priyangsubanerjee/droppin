import React from "react";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { useState, useEffect } from "react";
import { BsX } from "react-icons/bs";
import { Fade } from "react-reveal";
import { Location } from "../helpers/Location";

function AddLocation({
  location,
  setLocation,
  close,
  add,
  locations,
  setLocations,
}) {
  const saveLocation = async () => {
    const location_ = new Location(
      location.title,
      location.description,
      location.lat,
      location.lng,
      location.tags
    );

    location_.save();
    setLocations(JSON.parse(localStorage.getItem("locations")));
    close();
  };

  return (
    <Fade when={add} duration={500}>
      {add && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-20">
          <div className="w-full lg:w-[650px] h-full lg:h-fit lg:min-h-[600px] max-h-screen overflow-y-auto p-4 lg:p-8 bg-white overflow-x-hidden">
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
              <div className="mt-4 overflow-x-auto whitespace-nowrap">
                <span
                  onClick={() =>
                    setLocation({
                      ...location,
                      title: "Home",
                    })
                  }
                  className={`items-center text-sm ${
                    location.title.toLocaleLowerCase() === "home"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }  rounded px-2 py-1 mr-2 cursor-pointer transition-all inline-flex w-fit`}
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
                  className={`items-center text-sm ${
                    location.title.toLocaleLowerCase() === "parked bike"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }  rounded px-2 py-1 mr-2 cursor-pointer transition-all  inline-flex w-fit`}
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
                  className={`items-center text-sm ${
                    location.title.toLocaleLowerCase() === "parked car"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  } rounded px-2 py-1 mr-2 cursor-pointer transition-all  inline-flex w-fit`}
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
                  className={`items-center text-sm ${
                    location.title.toLocaleLowerCase() === "office"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  } rounded px-2 py-1 mr-2 cursor-pointer transition-all  inline-flex w-fit`}
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
                  className={`items-center text-sm ${
                    location.title.toLocaleLowerCase() === "school"
                      ? "bg-orange-500 text-white hover:bg-orange-500 hover:text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  } rounded px-2 py-1 mr-2 cursor-pointer transition-all inline-flex w-fit`}
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
                  className="bg-orange-50 hover:bg-orange-500 hover:text-white active:bg-orange-600 active:text-white text-orange-500 px-4 rounded-full py-1 text-sm mr-3 transition-all"
                >
                  Add
                </button>
              </form>
              <div className="flex">
                <button
                  onClick={() => saveLocation()}
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
    </Fade>
  );
}

export default AddLocation;
