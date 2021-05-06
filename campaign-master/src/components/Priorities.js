import React from "react";

import SecurityImage from "../assets/icons/Vector3.svg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { withRouter, NavLink } from "react-router-dom";

const Priorities = (props) => {
  return (
    <>
      <Navbar {...props} />
      <section className="w-screen mt-20 lg:m-0 bg-black px-20 mb-10 py-10 flex items-end text-white">
        <div className="lg:w-2/4">
          <h2 className="font-bold text-3xl">Our Top Priorities</h2>
          <p className="font-thin">
            In the bid to move the nation forwad, to a better Nigeria for all,
            Yahah Bello and his team has placed some pressing issues facing the
            countries as top priorities . Here is a brief list of the issues
            that needs to be tackled
          </p>
        </div>
      </section>

      <section className="px-20 grid lg:grid-cols-3 md:grid-cols-2 place-content-center justify-items-center mt-10 text-center">
        <article style={{ width: "281px" }} className="text-center mb-10">
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <NavLink
            to="/priority/security"
            className="block text-xs text-left mt-5 text-red-500"
          >
            learn more
          </NavLink>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center mb-10"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>

        <article
          style={{ width: "281px" }}
          className="feature md:w-5/6 sm:w-2/3 text-center"
        >
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
            ongrowing insecurity of the nation by working tirelessly to curb...
          </p>
          <button className="block text-xs text-left mt-5 text-red-500">
            learn more
          </button>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default withRouter(Priorities);
