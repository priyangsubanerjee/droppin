import Head from "next/head";
import Image from "next/image";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import Authorize from "../components/Authorize";
import { useState } from "react";

export default function Home() {
  const [showAuthorize, setShowAuthorize] = useState(false);
  const closeAuthorize = () => setShowAuthorize(false);

  return (
    <div className="h-screen lg:overflow-hidden w-full">
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
        <div className="ml-auto hidden md:block">
          <button
            onClick={() => setShowAuthorize(true)}
            className="py-2 w-36 rounded-full bg-orange-500 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-[2px] active:shadow-none active:translate-y-0 text-white text-sm transition-all"
          >
            Login • Register
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center h-fit lg:h-full">
        <div className="w-full lg:w-1/2 h-full">
          <img
            src="https://i.pinimg.com/originals/c4/1f/14/c41f14bbcb50ffe95312333966d0c586.png"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 h-full p-6 lg:p-8 flex flex-col overflow-y-auto lg:pb-44">
          <div>
            <h1 className="text-3xl font-semibold text-slate-800">
              hey <span className="text-orange-500">Folks</span> 👋
            </h1>
            <p className="text-sm text-slate-500 leading-7 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              corrupti amet. Earum illo facere reiciendis eligendi nisi
              voluptatibus consequatur, aspernatur maiores obcaecati neque sequi
              accusamus assumenda nam sapiente dignissimos praesentium
              doloribus, aliquam eos itaque in optio. Accusamus fugit natus,
              libero nisi perferendis, possimus recusandae ipsa quod praesentium
              ut similique accusantium.
            </p>
            <div>
              <div className="flex mt-8">
                <span className="h-fit whitespace-nowrap text-black pb-2 border-b-4 border-orange-500 text-sm rounded-sm font-medium px-4">
                  Step 1
                </span>
                <div className="pl-4">
                  <p className="text-xs text-gray-600 leading-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, suscipit beatae. Fugit voluptates ipsa, recusandae qui
                    provident aliquid corporis cumque commodi a nisi similique
                    omnis animi voluptatibus soluta nam ab.
                  </p>
                </div>
              </div>
              <div className="flex mt-4">
                <span className="h-fit whitespace-nowrap text-black pb-2 border-b-4 border-orange-500 text-sm rounded-sm font-medium px-4">
                  Step 2
                </span>
                <div className="pl-4">
                  <p className="text-xs text-gray-600 leading-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Esse, suscipit beatae. Fugit voluptates ipsa, recusandae qui
                    provident aliquid corporis cumque commodi a nisi similique
                    omnis animi voluptatibus soluta nam ab.
                  </p>
                </div>
              </div>
              <div className="flex mt-4">
                <span className="h-fit whitespace-nowrap text-black pb-2 border-b-4 border-orange-500 text-sm rounded-sm font-medium px-4">
                  Step 3
                </span>
                <p className="text-xs text-gray-600 leading-6 pl-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Esse, suscipit beatae. Fugit voluptates ipsa, recusandae qui
                  provident aliquid corporis cumque commodi a nisi similique
                  omnis animi voluptatibus soluta nam ab.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowAuthorize(true)}
              className="p-3 bg-gray-100 hover:bg-gray-200 w-full rounded text-sm mt-6 transition-all"
            >
              Login to get started
            </button>
            <div className="flex items-center justify-center text-sm text-slate-500 mt-5">
              Are you a new user?{" "}
              <a href="" className="ml-2 text-black hover:underline">
                Register here
              </a>
            </div>
            <div className="mt-16">
              <h1 className="text-3xl font-semibold text-slate-800">
                image <span className="text-orange-500">Gallery</span> 🎉
              </h1>
              <div className="grid grid-cols-3 gap-4 mt-5">
                <img
                  src="https://cdn.dribbble.com/users/2150390/screenshots/10967718/media/db297921cd968ba7cbe474668abc00d5.jpg?compress=1&resize=1200x900&vertical=top"
                  className="rounded-md object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                  alt=""
                />
                <img
                  src="https://cdn.dribbble.com/users/2150390/screenshots/10967718/media/db297921cd968ba7cbe474668abc00d5.jpg?compress=1&resize=1200x900&vertical=top"
                  className="rounded-md object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                  alt=""
                />
                <img
                  src="https://cdn.dribbble.com/users/2150390/screenshots/10967718/media/db297921cd968ba7cbe474668abc00d5.jpg?compress=1&resize=1200x900&vertical=top"
                  className="rounded-md object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all cursor-pointer"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-16">
              <h1 className="text-3xl font-semibold text-slate-800">
                get in <span className="text-orange-500">Touch</span> ✍️
              </h1>
              <p className="text-sm text-slate-500 leading-7 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                corrupti amet. Earum illo facere reiciendis eligendi nisi
                voluptatibus consequatur, aspernatur maiores.
              </p>
              <div className="flex items-center whitespace-nowrap mt-4">
                <button className="py-2 px-6 rounded-full bg-orange-500 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-[2px] active:shadow-none active:translate-y-0 text-white text-sm transition-all">
                  Send me an email →
                </button>
                <BsIcons.BsInstagram className="ml-6 text-xl lg:hover:-translate-y-1 transition-all cursor-pointer" />
                <BsIcons.BsFacebook className="ml-6 text-xl lg:hover:-translate-y-1 transition-all cursor-pointer" />
                <BsIcons.BsLinkedin className="ml-6 text-xl lg:hover:-translate-y-1 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Authorize show={showAuthorize} close={closeAuthorize} />
    </div>
  );
}
