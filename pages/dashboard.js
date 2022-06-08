import React from "react";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { useState, useEffect } from "react";
import { Fade, Rotate } from "react-reveal";
import {
  BsArrowRight,
  BsPerson,
  BsPersonCircle,
  BsStars,
  BsX,
} from "react-icons/bs";
import LocationCard from "../components/cards/LocationCard";
import AddLocation from "../components/AddLocation";
import Location from "../helpers/Location";

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
  const [locations, setLocations] = useState([]);

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
    setLocations(JSON.parse(localStorage.getItem("locations")) || []);
    getLocation();
  }, []);

  useEffect(() => {
    console.log(locations);
  }, [locations]);

  return (
    <div className="overflow-y-auto h-screen bg-slate-100">
      <div className="w-full p-4 border-b border-b-slate-200 lg:border-none flex items-center bg-white z-10">
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

        <div
          onMouseEnter={() => setProfile(true)}
          onMouseLeave={() => setProfile(false)}
          className="relative rounded-full w-12 h-12 bg-orange-50 ml-auto p-2 flex items-center justify-center cursor-pointer"
        >
          <span className="text-base text-orange-500 font-medium">PB</span>
          <Fade right when={profile} duration={400}>
            {profile && (
              <div className="absolute top-0 right-0 shadow-2xl shadow-slate-200 z-10">
                <div className="h-64 w-56 bg-white border border-slate-100 rounded-md"></div>
              </div>
            )}
          </Fade>
        </div>
      </div>
      <div className="p-0 lg:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 lg:gap-4">
        {locations &&
          locations.map((location) => {
            return (
              <LocationCard
                locations={locations}
                setLocations={setLocations}
                location={location}
              />
            );
          })}
      </div>
      <button
        onClick={() => getLocation() & setAdd(!add)}
        className="z-10 fixed bottom-10 right-6 flex items-center justify-center p-5 w-fit rounded-full bg-orange-500 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-[2px] active:shadow-none active:translate-y-0 text-white text-sm transition-all"
      >
        <MdIcons.MdOutlineAddLocationAlt className="text-2xl" />
      </button>

      <AddLocation
        location={location}
        locations={locations}
        setLocations={setLocations}
        setLocation={setLocation}
        close={close}
        add={add}
      />
    </div>
  );
}

export default DashBoard;
