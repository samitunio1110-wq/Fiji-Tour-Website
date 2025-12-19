import React from "react";

import mainImg from "../../assets/fiji-experience/fiji-experience-img1.png";
import coupleImg from "../../assets/fiji-experience/fiji-experience-img2.png";
import boatImg from "../../assets/fiji-experience/fiji-experience-img3.png";

const FijiExperience = () => {
  return (
    <section className="relative z-100 py-16 px-2">
 <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-[200px] items-center">


        {/* LEFT IMAGES */}
        <div className="flex gap-6">
          {/* Big Image */}
          <div className="group relative overflow-hidden rounded-[25px] w-[408px] h-[552px] shadow-lg">
            <img
              src={mainImg}
              alt="Travel"
              className="
        w-full h-full object-cover
        transition-transform duration-500 ease-out
        group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1
        will-change-transform
      "
            />
          </div>

          {/* Small Images */}
          <div className="flex flex-col gap-6">
            <div className="group relative overflow-hidden rounded-2xl w-[239px] h-[217px] shadow-md">
              <img
                src={coupleImg}
                alt="Couple"
                className="
          w-full h-full object-cover
          transition-transform duration-500 ease-out
          group-hover:scale-110 group-hover:-translate-x-1 group-hover:translate-y-1
          will-change-transform
        "
              />
            </div>

            <div className="group relative overflow-hidden rounded-2xl w-[239px] h-[303px] shadow-md">
              <img
                src={boatImg}
                alt="Boat"
                className="
          w-full h-full object-cover
          transition-transform duration-500 ease-out
          group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1
          will-change-transform
        "
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="pl-20">
          <h2
            className="text-6xl font-bold text-[#14183E] mb-4"
            style={{ fontFamily: "Abril Fatface" }}
          >
            Only at My Fiji
          </h2>

          <p
            className="text-black font-semibold leading-relaxed mb-6"
            style={{ fontFamily: "Poppins" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <button className="bg-[#12c0e2] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full transition-all duration-300 hover:border hover:border-[#12c0e2] ">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FijiExperience;
