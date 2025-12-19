import React from "react";
import img1 from "../../assets/Portfolio-stacked-img/img1.png";
import img2 from "../../assets/Portfolio-stacked-img/img2.png";
import img3 from "../../assets/Portfolio-stacked-img/img3.png";
import img4 from "../../assets/Portfolio-stacked-img/img4.png";

const images = [img1, img2, img3, img4];

export default function PortfolioStacked() {
  return (
    <section className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-transparent">
        <h2 className="text-center text-6xl font-bold text-[#14183E] pb-20"  style={{ fontFamily: "Abril Fatface" }}>Portfolio</h2>
      <main className="relative w-[900px] h-full flex  justify-center">
        <ul className="relative w-[300px] h-[450px] bg-transparent">
          {images.map((img, i) => (
            <li
              key={i}
              className={`absolute top-[10px] right-0 w-[400px] h-[490px] bg-white rounded-3xl shadow-2xl
              ${i === 0 ? "animate-article-one z-50 scale-[0.85] opacity-40" : ""}
              ${i === 1 ? "animate-article-two z-50 scale-100 opacity-100" : ""}
              ${i === 2 ? "animate-article-three z-40 scale-[0.85]" : ""}
              ${i === 3 ? "animate-article-four z-30 scale-[0.75] opacity-40" : ""}`}
            >
              <img
                src={img}
                alt="portfolio"
                className="w-full h-full object-cover rounded-3xl"
              />
            </li>
          ))}

         
        </ul>
      </main>
       {/* Animated button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full transition-all duration-300">
            VIEW MORE
          </button>
    </section>
  );
}
