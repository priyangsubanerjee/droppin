import React from "react";
import {
  BsArrowRight,
  BsPerson,
  BsPersonCircle,
  BsStars,
  BsX,
} from "react-icons/bs";
import { useState } from "react";
import { Fade } from "react-reveal";

function Authorize({ show, close }) {
  const [state, setState] = useState("login");
  return (
    <Fade duration={500} when={show}>
      {show && (
        <div className="fixed top-0 left-0 bg-black/50 h-full w-full flex items-center justify-center">
          <div className="w-[650px] min-h-[600px] p-8 bg-white shadow-2xl">
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
                    A simple way to mark your location
                  </p>
                </div>
              </div>
              <BsX
                onClick={() => close()}
                className="text-3xl text-gray-500 cursor-pointer"
              />
            </div>
            <div className="flex items-center mt-12">
              <span
                style={{
                  opacity: state == "login" ? 1 : 0.2,
                }}
                onClick={() => setState("login")}
                className="text-xl font-semibold cursor-pointer hover:underline"
              >
                Login
              </span>
              <span
                style={{
                  opacity: state == "register" ? 1 : 0.2,
                }}
                onClick={() => setState("register")}
                className="text-xl font-semibold ml-5 cursor-pointer hover:underline"
              >
                Register
              </span>
            </div>
            {
              /**
               * Login
               */

              state == "login" ? (
                <div className="mt-10">
                  <div className="px-3 flex items-center whitespace-nowrap border group focus-within:border-black transition-all">
                    <BsPerson className="text-xl text-gray-500 group-focus-within:text-black" />
                    <input
                      type="text"
                      placeholder="Enter registered email"
                      className="w-full p-3 outline-none"
                    />
                  </div>
                  <div className="mt-6 flex items-center whitespace-nowrap border px-3 group focus-within:border-black transition-all">
                    <span className="text-xl text-gray-500 group-focus-within:text-black">
                      ***
                    </span>
                    <input
                      type="Password"
                      placeholder="Enter password"
                      className="w-full outline-none p-3"
                    />
                  </div>
                  <button className="flex items-center justify-center py-3 w-full mt-8 px-6 bg-orange-500 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-[2px] active:shadow-none active:translate-y-0 text-white transition-all">
                    Login <BsArrowRight className="ml-3 text-xl" />
                  </button>
                  <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-sm text-gray-500 hover:underline">
                      Forgot password?
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-10">
                  <div className="px-3 flex items-center whitespace-nowrap border group focus-within:border-black transition-all">
                    <BsPerson className="text-xl text-gray-500 group-focus-within:text-black" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-3 outline-none"
                    />
                  </div>
                  <div className="mt-6 flex items-center whitespace-nowrap border px-3 group focus-within:border-black transition-all">
                    <span className="text-xl text-gray-500 group-focus-within:text-black">
                      @
                    </span>
                    <input
                      type="email"
                      placeholder="Enter an email"
                      className="w-full outline-none p-3"
                    />
                  </div>
                  <div className="mt-6 flex items-center whitespace-nowrap border px-3 group focus-within:border-black transition-all">
                    <span className="text-xl text-gray-500 group-focus-within:text-black">
                      ***
                    </span>
                    <input
                      type="password"
                      placeholder="Set an password"
                      className="w-full outline-none p-3"
                    />
                  </div>
                  <button className="flex items-center justify-center py-3 w-full mt-8 px-6 bg-orange-500 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-[2px] active:shadow-none active:translate-y-0 text-white transition-all">
                    Login <BsArrowRight className="ml-3 text-xl" />
                  </button>
                </div>
              )
            }

            <div className="bg-slate-50 flex items-center p-2 rounded-full text-xs text-slate-600 mt-10 w-fit mx-auto">
              <BsPersonCircle className="text-xl mr-2" />
              <span className="mr-2">Having trouble signing in?</span>
            </div>
          </div>
        </div>
      )}
    </Fade>
  );
}

export default Authorize;
