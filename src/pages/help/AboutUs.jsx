// components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-8 pt-40">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto border border-gray-100">
        <h1 className=" font-bold  text-center text-6xl  text-[#14183E] mb-4"   style={{ fontFamily: "Abril Fatface" }}>
          All about HotFiji.deals and the owners…
        </h1>

        <h2 className="text-xl md:text-4xl font-semibold text-gray-900 text-center mb-6">
         HotFiji.deals is owned by GolocalFiji Ltd.
        </h2>

        <div className="space-y-4 text-gray-900">
          <p className="text-lg leading-relaxed">
           Go Local Fiji Transfers & Tours is a specialist Transfer and Tour Company offering a wide range of exclusive services to FIT and Groups. As a well-established company with credible & well trained professional Management Staff with years of experience in hospitality industry and advanced reservations system with a 24hr turnaround on all bookings and enquiries with modern & extensive VIP transfer fleet & detailed knowledge of the living traditions of the Fijian culture. We have secured contracts with key industry partners in Australia and New Zealand and looking further expending in South East Asia and Europe
          </p>

          <p className="text-lg leading-relaxed">
           Being a local travel agency we can put together custom holiday packages out to the Yasawa Islands, down the Coral Coast or venture into the remote interior of Fiji or anything really. We can usually get great discounts on just about anything ranging in price from backpacker holidays to full on 5 star + accommodation plus of course any day trip or activity. Based on our own experience we can advise on what we think would suit you or your family better, we like to fit you with the best things for your money.
          </p>

          <p className="text-lg leading-relaxed">
           Sorry we can’t book flights, but anything else in Fiji is fine, just let us know what you’re after. You can always email us at info@hotfiji.deals
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;
