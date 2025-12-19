import { useState } from "react";
import img1 from "../../assets/Portfolio-stacked-img/img1.png";
import img2 from "../../assets/Portfolio-stacked-img/img2.png";
import img3 from "../../assets/Portfolio-stacked-img/img3.png";
import img4 from "../../assets/Portfolio-stacked-img/img4.png";
import img5 from "../../assets/Portfolio-stacked-img/img3.png";

const images = [img1, img2, img3, img4, img5];

export default function PortfolioStacked() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

 const getStyle = (index) => {
  const total = images.length;
  const diff = (index - active + total) % total;

  // Center
  if (diff === 0)
    return "z-50 scale-100 blur-0 opacity-100 translate-x-0";

  // Right 1
  if (diff === 1)
    return "z-40 translate-x-[220px] scale-90  opacity-70";

  // Right 2
  if (diff === 2)
    return "z-30 translate-x-[400px] scale-80  opacity-30";

  

  // Left 1
  if (diff === total -0)
    return "z-40 -translate-x-[220px] scale-90  opacity-50";

  if (diff === total - 1)
    return "z-40 -translate-x-[220px] scale-90  opacity-50";

  // Left 2
  if (diff === total - 2)
    return "z-30 -translate-x-[400px] scale-80  opacity-30";
   if (diff === total - 3)
    return "z-30 -translate-x-[300px] scale-80  opacity-30";
  

  // Hide rest
  return "opacity-0 scale-75";
};


  return (
    <section className="h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      <h2
        className="text-6xl font-bold mb-20 text-[#14183E]"
        style={{ fontFamily: "Abril Fatface" }}
      >
        Portfolio
      </h2>

      <div className="relative w-[900px] h-[500px] flex items-center justify-center">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-500 ease-in-out
              w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl
              ${getStyle(i)}`}
          >
            <img
              src={img}
              alt="portfolio"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        ))}

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-[-180px] bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800"
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-[-200px] bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800"
        >
          ›
        </button>
      </div>

      <button className="mt-16 bg-[#12c0e2] hover:bg-white hover:text-black text-white px-10 py-3 rounded-full hover:border hover:border-[#12c0e2] ">
        VIEW MORE
      </button>
    </section>
  );
}
