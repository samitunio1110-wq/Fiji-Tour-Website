export const DestinationCard = ({ image, title, meta, price, children }) => {
  return (
    <div className="w-[380px] sm:w-[320px] h-[400px] bg-white rounded-3xl shadow-xl overflow-hidden mx-4">

      {/* Image wrapper */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-[310px] w-full object-cover"
        />

        {/* Book Now Button */}
        <button
          className="absolute -bottom-12 right-2 bg-[#12c0e2] hover:bg-white hover:text-black hover:border hover:border-[#12c0e2] 
          text-white px-3 py-1 rounded-full shadow-lg text-[12px]"
        >
          Book Now
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>

        {(meta || price) && (
          <div className="flex items-center justify-between mt-2 text-sm text-slate-600">
            {meta && <span>✈ {meta}</span>}
            {price && <span className="font-semibold">{price}</span>}
          </div>
        )}

        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};
