import React from "react";

// assets se images import
import img1 from "../../assets/popular-things/img-1.jpeg";
import img2 from "../../assets/popular-things/img-2.jpeg";
import img3 from "../../assets/popular-things/img3.jpeg";
import img4 from "../../assets/popular-things/img-4.jpeg";
import img5 from "../../assets/popular-things/img-5.jpeg";
import img6 from "../../assets/popular-things/img-6.jpeg";
import img7 from "../../assets/popular-things/img-7.jpeg";
import img8 from "../../assets/popular-things/img-8.jpeg";
import img9 from "../../assets/popular-things/img-9.jpeg";
import img10 from "../../assets/popular-things/img-10.jpeg";
import img11 from "../../assets/popular-things/img-11.jpeg";
import img12 from "../../assets/popular-things/img-12.jpeg";
const data = [
  {
    id: 1,
    title: "Lautoka City Tour",
    img: img1,
    size: "h-[260px]",
  },
  {
    id: 2,
    title: "Mud Pools Tour",
    img: img2,
    size: "h-[320px]",
  },
  {
    id: 3,
    title: "Coral Coast Fiji Tour",
    img: img3,
    size: "h-[280px]",
  },
  {
    id: 4,
    title: "Skydiving",
    img: img4,
    size: "h-[240px]",
  },
   {
    id: 5,
    title: "Nadi City Tour",
    img: img5,
    size: "h-[260px]",
  },
  {
    id: 6,
    title: "Snorkeling Tour",
    img: img6,
    size: "h-[320px]",
  },
  {
    id: 7,
    title: "Suva Tour",
    img: img7,
    size: "h-[280px]",
  },
  {
    id: 8,
    title: "Waterfall Tour",
    img: img8,
    size: "h-[240px]",
  },
   {
    id: 9,
    title: "White Water Rafting",
    img: img9,
    size: "h-[260px]",
  },
  {
    id: 10,
    title: "Boat Charter Tour",
    img: img10,
    size: "h-[320px]",
  },
  {
    id: 11,
    title: "Mountain Escape",
    img: img11,
    size: "h-[280px]",
  },
  {
    id: 12,
    title: "Urban Life",
    img: img12,
    size: "h-[240px]",
  },
];

const PopularThings = () => {
  return (
    <section className="w-full px-6 py-16">
      {/* Heading */}
     <h2 className="text-6xl font-bold text-gray-900 mb-4 text-center pb-10"  style={{ fontFamily: "Abril Fatface" }}>
           Popular Things To Do in Fiji
          </h2>

     <p className="text-black text-[17px] font-bold m mb-10 text-center">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy
          </p>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className={`group perspective ${item.size}`}
          >
            {/* Flip Card */}
            <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay text */}
                <div className="absolute bottom-3 right-3 z-20 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {item.title}
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gray-900 rounded-xl flex items-center justify-center">
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                  Show More
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularThings;
