import Marquee from "react-fast-marquee";
import { DestinationCard } from "../cards/DestinationCard";
import img1 from "../../assets/destinations-img/destination-1.png";
import img2 from "../../assets/destinations-img/destination-2.png";
import img3 from "../../assets/destinations-img/destination-3.png";



// Main Marquee Section
export default function TopDestinations() {
  return (
    <section className="relative py-20 overflow-hidden">
      <h2
        className="text-center text-5xl font-bold text-[#14183E] mb-12"
        style={{ fontFamily: "Abril Fatface" }}
      >
        Top Destinations
      </h2>

      <Marquee speed={25} pauseOnHover gradient={false}>
        <DestinationCard
          image={img1}
          title="Rome, Italy"
          meta="10 Days Trip"
          price="$5,42k"
        />

        <DestinationCard
          image={img2}
          title="London, UK"
          meta="10 Days Trip"
          price="$5,42k"
        />

        <DestinationCard
          image={img3}
          title="Full Europe"
          meta="10 Days Trip"
          price="$5,42k"
        />

        <DestinationCard
          image={img1}
          title="Paris, France"
          meta="8 Days Trip"
          price="$4,90k"
        />

        <DestinationCard
          image={img2}
          title="Paris, France"
          meta="8 Days Trip"
          price="$4,90k"
        />
        <DestinationCard
          image={img3}
          title="Paris, France"
          meta="8 Days Trip"
          price="$4,90k"
        />
      </Marquee>
    </section>
  );
}
