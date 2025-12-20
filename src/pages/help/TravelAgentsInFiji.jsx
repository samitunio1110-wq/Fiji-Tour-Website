// import React from "react";

// // images (example – apne assets ke actual paths lagana)
// import img1 from "../../assets/travel-agents-in-fiji/1.png";
// import img2 from "../../assets/travel-agents-in-fiji/2.png";
// import img3 from "../../assets/travel-agents-in-fiji/3.png";
// import img4 from "../../assets/travel-agents-in-fiji/4.png";
// import img5 from "../../assets/travel-agents-in-fiji/5.png";
// import img6 from "../../assets/travel-agents-in-fiji/6.png";
// import img7 from "../../assets/travel-agents-in-fiji/7.png";
// import img8 from "../../assets/travel-agents-in-fiji/8.png";
// import img9 from "../../assets/travel-agents-in-fiji/9.png";
// import img10 from "../../assets/travel-agents-in-fiji/10.png";
// import img11 from "../../assets/travel-agents-in-fiji/11.png";
// import img12 from "../../assets/travel-agents-in-fiji/12.png";
// import img13 from "../../assets/travel-agents-in-fiji/13.png";
// import img14 from "../../assets/travel-agents-in-fiji/14.png";
// import img15 from "../../assets/travel-agents-in-fiji/15.png";
// import img16 from "../../assets/travel-agents-in-fiji/16.png";

// const images = [
//   { img: img1, title: "Agent 1" },
//   { img: img2, title: "Agent 2" },
//   { img: img3, title: "Agent 3" },
//   { img: img4, title: "Agent 4" },
//   { img: img1, title: "Agent 5" },
//   { img: img2, title: "Agent 6" },
//   { img: img3, title: "Agent 7" },
//   { img: img4, title: "Agent 8" },
//   { img: img1, title: "Agent 9" },
//   { img: img2, title: "Agent 10" },
//   { img: img3, title: "Agent 11" },
//   { img: img4, title: "Agent 12" },
//   { img: img1, title: "Agent 13" },
//   { img: img2, title: "Agent 14" },
//   { img: img3, title: "Agent 15" },
//   { img: img4, title: "Agent 16" },
//   { img: img1, title: "Agent 17" },
//   { img: img2, title: "Agent 18" },
//   { img: img3, title: "Agent 19" },
//   { img: img4, title: "Agent 20" },
// ];

// const TravelAgents = () => {
//   return (
//     <section className="py-12">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10">

//         {/* Headings */}
//         <div className="text-center space-y-4 mb-10">
//           <h2 className="text-3xl font-bold text-gray-800">
//             Our Travel Agents
//           </h2>

//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Our experienced travel agents are dedicated to crafting
//             unforgettable journeys tailored to your preferences.
//           </p>

//           <p className="text-gray-600 max-w-3xl mx-auto">
//             With deep destination knowledge and personalized service,
//             we ensure seamless travel planning from start to finish.
//           </p>

//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Whether you're seeking adventure, relaxation, or luxury,
//             our team is here to make your dream vacation a reality.
//           </p>
//         </div>

//         {/* Images Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-14">
//           {images.map((item, index) => (
//             <div
//               key={index}
//               className="text-center bg-gray-50 rounded-xl p-3 hover:shadow-md transition"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-24 object-cover rounded-lg mb-2"
//               />
//               <p className="text-sm font-medium text-gray-700">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Our Services
//           </h3>

//           <div className="space-y-6 max-w-4xl mx-auto">
//             <div>
//               <h4 className="text-lg font-semibold text-gray-800">
//                 Accommodations
//               </h4>
//               <p className="text-gray-600 mt-2">
//                 Choose from a carefully curated collection of resorts,
//                 hotels, and villas that are designed to accommodate a
//                 wide range of preferences and budgets.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-gray-800">
//                 Flights
//               </h4>
//               <p className="text-gray-600 mt-2">
//                 When it comes to flights, you can take advantage of our
//                 agreements with major airlines to get the greatest
//                 discounts on flights to and from Fiji.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-gray-800">
//                 Activities
//               </h4>
//               <p className="text-gray-600 mt-2">
//                 We provide a wide variety of activities that cater to
//                 all inclinations, including cultural excursions, spa
//                 getaways, and snorkeling and diving.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-gray-800">
//                 Transfer
//               </h4>
//               <p className="text-gray-600 mt-2">
//                 Enjoy hassle-free airport transfers to your
//                 accommodation so your trip begins and ends smoothly.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TravelAgents;

import React from 'react'

function TravelAgentsInFiji() {
  return (
    <div>TravelAgentsInFiji</div>
  )
}

export default TravelAgentsInFiji