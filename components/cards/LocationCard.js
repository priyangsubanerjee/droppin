import React from "react";
import * as BsIcons from "react-icons/bs";

function LocationCard({ location, locations, setLocations }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const deleteLocation = () => {
    const newLocations = locations.filter((l) => l.id !== location.id);
    setLocations(newLocations);
    localStorage.setItem("locations", JSON.stringify(newLocations));
  };

  return (
    <div className="bg-white lg:shadow-xl lg:shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300 lg:rounded transition-all p-3 border-r border-b border-slate-200 lg:border-none">
      <div className="flex items-center">
        <span className="font-semibold">{location.title}</span>
        <div className="flex items-center ml-auto">
          <BsIcons.BsBookmark className="text-sm" />
        </div>
      </div>
      <p className="text-[10px] text-slate-500 mt-1">
        {new Date(location.date).getDay() +
          " " +
          months[new Date(location.date).getMonth()]}
      </p>
      <details className="text-[10px] text-slate-500 leading-5 mt-2 transition-all select-none relative">
        <summary className="text-[11px] mb-1 cursor-pointer">
          View description
        </summary>
        <div>
          <p className="absolute top-5 left-0 bg-white shadow-xl shadow-slate-500/20 border rounded p-3">
            {location.description}
          </p>
        </div>
      </details>
      <div className=" overflow-hidden rounded-sm mt-3">
        <img src="https://api.mapbox.com/styles/v1/mapbox/light-v9/static/pin-s+f00(87.287643,23.550151)/87.287643,23.550151,16,0,0/640x350?access_token=pk.eyJ1Ijoibmlja2ZpdHoiLCJhIjoiY2p3d2g3N2F5MDZ4azQwcG12dWticDB0diJ9.qnQV5QgYN_eDwg4uUdbO6Q" />
      </div>

      <div className="flex items-center mt-3">
        <a
          href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs flex items-center justify-center w-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white h-8 rounded transition-all"
        >
          Navigate
        </a>
        <button className="flex items-center justify-center mx-8">
          <BsIcons.BsShare className="text-sm" />
        </button>
        <button
          onClick={() => deleteLocation()}
          className="flex items-center justify-center"
        >
          <BsIcons.BsTrash />
        </button>
      </div>
    </div>
  );
}

export default LocationCard;
