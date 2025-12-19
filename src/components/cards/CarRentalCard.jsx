export const CarRentalCard = ({ image }) => {
  return (
    <div className="group relative flex-shrink-0 w-[420px] h-[520px] rounded-[36px] overflow-hidden shadow-2xl bg-white cursor-pointer">
      
      {/* IMAGE */}
      <img
        src={image}
        alt="destination"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C75]/90 via-[#0F4C75]/60 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* TEXT CONTENT */}
      <div className="absolute bottom-10 left-0 right-0 text-center text-white px-6
                      opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500 ease-out">

        <h3
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "Abril Fatface" }}
        >
          Mid Range
        </h3>

        <p className="text-lg tracking-wide mb-6">
          Car Rentals
        </p>

        <div className="text-sm font-semibold uppercase tracking-widest">
          Start From
        </div>

        <div className="text-2xl font-bold mt-1">
          250$ Per Day
        </div>
      </div>

    </div>
  );
};
