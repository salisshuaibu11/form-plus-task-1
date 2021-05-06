import React from "react";

import PoliticianImage from "../assets/icons/Vector1.svg";
import CalenderImage from "../assets/icons/Vector2.svg";

import SecurityImage from "../assets/icons/Vector3.svg";
import JobsImage from "../assets/icons/Vector4.svg";
import ElectricyImage from "../assets/icons/Vector5.svg";
import EconomicRecImage from "../assets/icons/Vector6.svg";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Navbar from "./Navbar";
import { withRouter } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LandingPage = (props) => {
  return (
    <>
      <header className="w-screen m-0 bg-bannerImage">
        <Navbar {...props} />
        <section className="lg:w-2/3 mt-20 ml-5 lg:ml-20">
          <h1 className="mb-3 w-2/3 uppercase text-white lg:text-4xl text-sm font-bold">
            Together, we will move Nigeria Forward!
          </h1>
          <p className="text-white">
            Become a part of our team and learn how you can take part in
            creating a better Nigeria.
          </p>
          <form className="mx-auto">
            <input
              type="email"
              className="px-4 mb-5 py-4 border-r-2 border-gray-200 text-gray-600 rounded-tl-2xl rounded-bl-2xl outline-left-none md:px-8 focus:shadow-xl"
              placeholder="Email"
            />
            <input
              type="text"
              className="px-4 py-4 text-gray-600 active:border-0 md:px-8 focus:shadow-xl"
              placeholder="State"
            />
            <button className="mt-5 bg-red-600 text-white px-6 ml-2 py-4 rounded-2xl">
              SIGN UP
            </button>
          </form>
        </section>

        <section className="grid lg:grid-cols-3 justify-items-center lg:px-20 px-10">
          <div
            className="relative lg:w-3/4 w-full mb-5 rounded-lg text-white flex flex-col items-center justify-center text-center"
            style={{
              top: "13rem",
              left: "0",
              right: "0",
              height: "232px",
              background: "#020D31",
            }}
          >
            <img className="w-10 h-10" src={PoliticianImage} alt="Politician" />
            <h3 className="my-3">OUR CAMPAIGN</h3>
            <h5>See all our dates and venues</h5>
          </div>

          <div
            className="relative lg:w-3/4 w-full mb-5 rounded-lg text-white flex flex-col items-center justify-center text-center"
            style={{
              top: "13rem",
              height: "232px",
              background: "#020D31",
            }}
          >
            <img className="w-10 h-10" src={PoliticianImage} alt="Politician" />
            <h3 className="my-3">ATTEND EVENTS</h3>
            <h5>Find Events Near You</h5>
          </div>

          <div
            className="relative lg:w-3/4 w-full rounded-lg text-white flex flex-col items-center justify-center text-center"
            style={{
              top: "13rem",
              height: "232px",
              background: "#E52B32",
            }}
          >
            <img className="w-10 h-10" src={PoliticianImage} alt="Politician" />
            <h3 className="uppercase my-3">GET INVOLVED</h3>
            <h5>Become a Volunteer Today</h5>
          </div>
        </section>
      </header>

      <section
        className="lg:px-20 px-10 py-10 text-center"
        style={{ marginTop: "14rem" }}
      >
        <div className="text-center lg:w-1/2 w-full mx-auto mb-10">
          <h2 className="text-2xl mb-5 font-bold" style={{ color: "#020D31" }}>
            Yahaya Bello’s Priorities
          </h2>
          <p>
            In the bid to move the nation forwad, to a better Nigeria for all,
            Yahah Bello and his team has placed some pressing issues facing the
            countries as top priorities . Here is a brief list of the issues
            that needs to be tackled
          </p>
        </div>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <article className="feature md:w-5/6 sm:w-2/3 text-center">
            <img
              className="w-full m-auto"
              src={SecurityImage}
              alt="Career Development Section"
            />
            <h3 className="text-left text-sm font-bold my-4 uppercase">
              Security of the Nation
            </h3>
            <p className="text-left text-sm">
              Yahaya Bello’s top prioriy for the country revolves around the
              ongrowing insecurity of the nation by working tirelessly to
              curb...
            </p>
            <button className="block text-xs text-left mt-5 text-red-500">
              learn more
            </button>
          </article>

          <article className="feature md:w-5/6 sm:w-2/3 text-center">
            <img
              className="w-full m-auto"
              src={JobsImage}
              alt="Trainings Section"
            />
            <h3 className="text-left text-sm font-bold my-4 uppercase">
              Job Opportunities For All Nigerians
            </h3>
            <p className="text-left text-sm">
              Yahaya Bello’s top prioriy for the country revolves around the
              ongrowing insecurity of the nation by working tirelessly to
              curb...
            </p>
            <button className="block text-xs text-left mt-5 text-red-500">
              learn more
            </button>
          </article>

          <article className="feature md:w-5/6 sm:w-2/3 text-center">
            <img
              className="w-full m-auto"
              src={ElectricyImage}
              alt="Small and medium sized enterpises section"
            />
            <h3 className="text-left text-sm font-bold my-4">
              Stable Electricity
            </h3>
            <p className="text-left text-sm">
              Yahaya Bello’s top prioriy for the country revolves around the
              ongrowing insecurity of the nation by working tirelessly to
              curb...
            </p>
            <button className="block text-xs text-left mt-5 text-red-500">
              learn more
            </button>
          </article>

          <article className="feature md:w-5/6 sm:w-2/3 text-center">
            <img
              className="w-full m-auto"
              src={EconomicRecImage}
              alt="Courses Section"
            />
            <h3 className="text-left text-sm font-bold my-4 uppercase">
              On Economy: Getting Out Of Recession
            </h3>
            <p className="text-left text-sm">
              Yahaya Bello’s top prioriy for the country revolves around the
              ongrowing insecurity of the nation by working tirelessly to
              curb...
            </p>
            <button className="block text-xs text-left mt-5 text-red-500">
              learn more
            </button>
          </article>
        </Carousel>
        <button className="uppercase my-5 bg-red-600 text-white px-6 ml-2 py-4 rounded-2xl">
          see all priorities
        </button>
      </section>

      <section className="lg:px-20 px-5 py-10">
        <h3
          style={{ color: "#020D31" }}
          className="font-bold mb-5 text-4xl text-indigo-500 text-center"
        >
          Events and News
        </h3>
        <article className="flex lg:flex-row flex-col">
          <div
            style={{ height: "360px" }}
            className="lg:w-1/2 w-full bg-speech p-5 text-white flex flex-col justify-between"
          >
            <div className="header">
              <h4 className="font-thin">Latest news</h4>
              <p className="my-3">INEC Sets Official Date For 2023 Election</p>
              <span className="font-thin">May 5th, 2021</span>
            </div>
            <a href="#">Read More</a>
          </div>

          <div className="lg:w-2/4 w-full bg-blue-500 text-white flex p-5 flex-col justify-between">
            <div className="header">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <a href="#">Follow yahaya on twitter</a>
          </div>

          <div className="lg:w-2/4 w-full bg-blue-900 text-white flex p-5 flex-col justify-between">
            <div className="header">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <a href="#">Follow yahaya on facebook</a>
          </div>
        </article>

        <article
          className="flex lg:flex-row flex-col"
          style={{ height: "360px" }}
        >
          <div
            style={{ background: "#020D31" }}
            className="lg:w-2/4 w-full bg-black p-5 text-white flex flex-col justify-between"
          >
            <div className="header">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <img
              className="bg-campaign"
              style={{ height: "207px", width: "347px" }}
            />
            <a href="#">View more videos</a>
          </div>

          <div className="lg:w-2/4 w-full bg-red-500 flex p-5 text-white flex-col justify-between">
            <div className="header">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <a href="#">Follow yahaya on instagram</a>
          </div>

          <div
            className="lg:w-2/4 w-full flex p-5 flex-col text-white justify-between"
            style={{ background: "#020D31" }}
          >
            <div className="header">
              <h3 className="uppercase">upcoming events</h3>
              <div className="my-4 flex">
                <div
                  className="card__header mr-4 bg-white p-3 text-black text-center"
                  style={{ width: "72px", height: "72px" }}
                >
                  <span className="block">MAY</span>
                  <span className="block">20</span>
                </div>
                <div className="card__body">
                  <h4>Campaign Movement from Kogi to Kaduna</h4>
                  <span className="font-thin">10.00am - 6.00pm</span>
                </div>
              </div>
              <div className="my-4 flex">
                <div
                  className="card__header mr-4 bg-white p-3 text-black text-center"
                  style={{ width: "72px", height: "72px" }}
                >
                  <span className="block">MAY</span>
                  <span className="block">20</span>
                </div>
                <div className="card__body">
                  <h4>Campaign Movement from Kogi to Kaduna</h4>
                  <span className="font-thin">10.00am - 6.00pm</span>
                </div>
              </div>
            </div>
            <a href="#">Follow yahaya on facebook</a>
          </div>
        </article>
      </section>

      <section
        className="bg-footerImage flex mt-8 items-center px-20"
        style={{ height: "500px" }}
      >
        <div className="lg:w-2/3 w-full text-left">
          <h1 style={{ color: "#020D31" }} className="text-4xl font-bold">
            Meet Yahaya Bello
          </h1>
          <p style={{ color: "#020D31" }} className="lg:w-3/4 text-sm my-5">
            Yahaya Adoza Bello (born June 18, 1975) is a Nigerian politician,
            businessman and the current Governor of Kogi State. ello was
            declared winner of the 2015 Kogi gubernatorial election after he was
            chosen on the platform of the All Progressives Congress as the
            replacement for the late Abubakar Audu who originally won the
            election but died before the result was declared.
          </p>
          <button className="block uppercase bg-red-600 text-white px-6 ml-2 py-4 rounded-md">
            read more
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default withRouter(LandingPage);
