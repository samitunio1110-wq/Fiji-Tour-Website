import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarRentalCard } from "../cards/CarRentalCard";

import img1 from "../../assets/car-rental-img/img-1.png";
import img2 from "../../assets/car-rental-img/img-2.png";
import img3 from "../../assets/car-rental-img/img-3.png";

const images = [img1, img2, img3, img1, img2, img3];

const CARD_WIDTH = 420;
const GAP = 32;
const CARDS_PER_PAGE = 3;

export default function CarRentalCarousel() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const [maxDrag, setMaxDrag] = useState(0);
  const [x, setX] = useState(0);

  // 🔹 Calculate drag limits
  const calculateBounds = () => {
    if (!trackRef.current || !containerRef.current) return;

    const trackWidth = trackRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    setMaxDrag(trackWidth - containerWidth);
  };

  useEffect(() => {
    calculateBounds();
    window.addEventListener("resize", calculateBounds);
    return () => window.removeEventListener("resize", calculateBounds);
  }, []);

  // 🔹 Slide by 3 cards
  const slideByPage = (direction) => {
    const distance = (CARD_WIDTH + GAP) * CARDS_PER_PAGE;

    setX((prev) => {
      if (direction === "left") {
        return Math.min(prev + distance, 0);
      } else {
        return Math.max(prev - distance, -maxDrag);
      }
    });
  };

  return (
    <section className="py-24 overflow-hidden relative">
      {/* Heading */}
      <h2
        className="text-center text-5xl font-bold text-[#14183E] mb-16"
        style={{ fontFamily: "Abril Fatface" }}
      >
        Quality Car Rental Deals
      </h2>

      <div className="relative max-w-[1500px] mx-auto flex items-center">
        
        {/* LEFT BUTTON */}
        <button
          onClick={() => slideByPage("left")}
          disabled={x === 0}
          className="absolute left-6 z-20 w-14 h-14 bg-white rounded-full shadow-xl
                     flex items-center justify-center hover:scale-110 transition
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={28} />
        </button>

        {/* VIEWPORT */}
        <div
          ref={containerRef}
          className="mx-auto overflow-hidden"
          style={{
            width: (CARD_WIDTH + GAP) * CARDS_PER_PAGE - GAP,
          }}
        >
          {/* TRACK */}
          <motion.div
            ref={trackRef}
            animate={{ x }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            dragElastic={0.1}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
          >
            {images.map((img, i) => (
              <CarRentalCard key={i} image={img} />
            ))}
          </motion.div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => slideByPage("right")}
          disabled={x <= -maxDrag}
          className="absolute right-6 z-20 w-14 h-14 bg-white rounded-full shadow-xl
                     flex items-center justify-center hover:scale-110 transition
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
