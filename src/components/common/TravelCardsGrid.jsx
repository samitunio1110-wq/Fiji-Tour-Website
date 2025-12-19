import { useState } from "react";
import { TravelCard } from "../cards/TravelCard";
import travelImg1 from '../../assets/travel-cards-img/tarvel-img1.png'


export default function TravelCardsGrid() {
  const cardsData = Array.from({ length: 12 }).map((_, i) => ({
    image: travelImg1,
    badge: "Book by 28th December, 2025",
    nights: "5 nights",
    title: `The Naviti Resort ${i + 1}`,
    tag: "Coral Coast",
    date: "Travel from Dec 25 - Aug 26",
    description:
      "5 Nights, Flights & up to $2400 Bonus Value with Transfers, All Inclusive Meals and Drinks, VIP Check-In & More",
    bonus: "UP TO $2400 BONUS VALUE",
    price: "1,999",
  }));

  const [visible, setVisible] = useState(4);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cardsData.slice(0, visible).map((card, idx) => (
            <TravelCard key={idx} {...card} />
          ))}
        </div>

        {visible < cardsData.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisible((prev) => prev + 2)}
              className="px-8 py-3 bg-sky-700 text-white rounded-full shadow hover:bg-sky-800 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
