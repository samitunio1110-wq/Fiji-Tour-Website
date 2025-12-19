import React from "react";


import img1 from "../../assets/why-choose-us/why-choose-img1.png";
import img2 from "../../assets/why-choose-us/why-choose-img2.png";
import img3 from "../../assets/why-choose-us/why-choose-img3.png";
import img4 from "../../assets/why-choose-us/why-choose-img4.png";

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      
    >
      <div className="absolute "></div>

      <div className="relative w-[90%] mx-auto grid lg:grid-cols-2 gap-[80px] items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-6xl font-bold text-gray-900 mb-4"  style={{ fontFamily: "Abril Fatface" }}>
            Why Choose Us
          </h2>

          <p className="text-black text-[17px] font-bold m mb-10">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy
          </p>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-5 w-fit">
            {[img1, img2, img3, img4].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl w-[400px] h-full"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FEATURES */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-44">
          
          {[
            { no: "01", title: "Best Flights" },
            { no: "02", title: "Guarantee" },
            { no: "03", title: "Services" },
            { no: "04", title: "Experience" },
          ].map((item, i) => (
            <div key={i}>
              <div className="w-18 h-18 rounded-br-3xl bg-white text-sky-500 font-bold flex items-center justify-center shadow mb-4 text-2xl">
                {item.no}
              </div>

              <h4 className="text-2xl font-semibold text-[#064448] mb-2">
                {item.title}
              </h4>

              <p className="text-black text-[16px] font-bold leading-relaxed">
                Engrossed listening. Park gate sell they west hard for the.   Engrossed listening. Park gate sell they west hard for the.   Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
