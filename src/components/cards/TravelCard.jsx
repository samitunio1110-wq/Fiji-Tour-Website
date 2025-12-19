
export const TravelCard = ({
  image,
  badge,
  nights,
  title,
  tag,
  date,
  description,
  bonus,
  price,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-[390px] object-cover" />
        {badge && (
          <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-sm px-4 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
          <span className="flex items-center gap-1">📅 {nights}</span>
          <span className="flex items-center gap-1">✈ Return flights included</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-sky-900 text-white text-sm px-3 py-1 rounded-lg">
            {tag}
          </span>
          <span className="text-sky-700 font-medium text-sm">{date}</span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {bonus && (
          <span className="inline-block mb-4 bg-sky-600 text-white text-sm px-4 py-2 rounded-full">
            {bonus}
          </span>
        )}

        <div className="flex items-end justify-between">
          <div className="text-2xl font-bold text-slate-800">
            ${price}
            <span className="text-sm font-normal text-slate-500 ml-1">From</span>
          </div>
        </div>
      </div>
    </div>
  );
};

