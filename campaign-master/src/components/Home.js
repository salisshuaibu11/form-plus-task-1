import React from "react";

import YahayaBelloImage from "../assets/images/yahaya_bello.png";
import videoPoster from "../assets/images/videoPoster.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { ReactVideo } from "reactjs-media";

const Home = () => {
  return (
    <>
      <header
        className="w-screen h-screen flex flex-col md:flex-row lg:justify-between"
        style={{ background: "#020D31" }}
      >
        <section className="pl-20 mt-20">
          <h1 className="text-white mb-20">Yahaya Bello 2023</h1>
          <div>
            <h3 className="text-green-500 font-bold font-md">
              Nigeria needs a fresh start !
            </h3>
            <h3 className="text-6xl text-white w-72 mb-5 mt-3">
              The Face of Hope
            </h3>
            <Link
              to="/home"
              className="bg-gradient-to-r text-white mb-10 py-3 px-8 rounded-full from-red-500 to-black-300"
            >
              Go to the website
              <FontAwesomeIcon className="ml-7" icon={faArrowAltCircleRight} />
            </Link>
          </div>
          <div className="mt-5">
            <FontAwesomeIcon className="mr-7 text-white" icon={faFacebook} />
            <FontAwesomeIcon className="mr-7 text-white" icon={faTwitter} />
            <FontAwesomeIcon className="text-white" icon={faInstagram} />
          </div>
        </section>
        <section className="flex h-full">
          <img className="h-full" src={YahayaBelloImage} alt="Yahaya Bello" />
          <div className="h-full w-5 bg-green-500"></div>
          <div className="h-full w-5 bg-white"></div>
          <div className="h-full w-5 bg-blue-500"></div>
          <div className="h-full w-5 bg-red-500"></div>
        </section>
      </header>
      <section className="mb-20" style={{ height: "500px" }}>
        <ReactVideo
          poster={videoPoster}
          className="filter drop-shadow-md md:drop-shadow-xl"
        />
      </section>
      <section className="text-center">
        <h2 className="mb-10 font-bold text-2xl" style={{ color: "#020D31" }}>
          Want to be part of the Movement?
        </h2>
        <form className="w-3/5 mx-auto">
          <div className="text-center grid w-full mb-5 md:rows-2 lg:grid-cols-2 md:gap-2">
            <div>
              <input
                type="text"
                className="w-full mb-5 px-4 py-4 text-gray-600 border-2 border-gray-500 rounded-2xl outline-none md:px-8 focus:shadow-xl"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="number"
                id="bid_percentage"
                className="w-full px-4 py-4 text-gray-600 border-2 border-gray-500 rounded-2xl outline-none md:px-8 focus:shadow-xl"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="text-center grid w-full mb-5 md:rows-2 lg:grid-cols-2 md:gap-2">
            <div>
              <input
                type="email"
                className="w-full mb-5 px-4 py-4 text-gray-600 border-2 border-gray-500 rounded-2xl outline-none md:px-8 focus:shadow-xl"
                placeholder="Email"
              />
            </div>
            <div>
              <button className="w-full bg-gradient-to-r text-white px-4 py-4 rounded-2xl from-red-500 to-gray-200">
                YES, I’M IN
                <FontAwesomeIcon
                  className="ml-7"
                  icon={faArrowAltCircleRight}
                />
              </button>
            </div>
          </div>
        </form>
      </section>
      <footer
        className="py-10 px-20"
        style={{ background: "#020D31", borderRadius: "96px 96px 0px 0px" }}
      >
        <p className="text-center text-white">
          YAHAYA BELLO - 2023 ELECTION CAMPAIGN
        </p>
      </footer>
    </>
  );
};

export default Home;
