import React from "react";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Volunteer = (props) => {
  return (
    <>
      <Navbar {...props} />
      <section className="h-full lg:p-20 py-10 px-5 flex items-center justify-center bg-flag">
        <div
          className="bg-white rounded-2xl p-10"
          style={{ width: "715px", minHeight: "400px" }}
        >
          <h3 style={{ color: "#020D31" }}>Become A Volunteer</h3>
          <form className="">
            <div className="grid lg:grid-cols-2 gap-2">
              <div class="mb-5">
                <label for="first_name">Ahmad</label>
                <input
                  type="text"
                  id="first_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="First Name"
                />
              </div>

              <div class="mb-5">
                <label for="last_name">Mustafa</label>
                <input
                  type="text"
                  id="last_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="w-full">
              <label for="email">Email*</label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-4 text-gray-600 border-2 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                placeholder="example@example.com"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-2">
              <div class="mb-5">
                <label for="first_name">Phone No. *</label>
                <input
                  type="text"
                  id="first_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="0706 254 2688"
                />
              </div>

              <div class="mb-5">
                <label for="last_name">State</label>
                <input
                  type="text"
                  id="last_name"
                  class="w-full px-4 py-4 text-gray-600 border-2 border-gray-300 rounded-md outline-none md:px-8 focus:shadow-xl"
                  placeholder="Kano"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default withRouter(Volunteer);
