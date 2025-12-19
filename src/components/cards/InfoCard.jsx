const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-white p-8 shadow-sm rounded-xl">
      <h3 className="text-teal-500 font-semibold text-lg mb-4">
        {title}
      </h3>

      <p className="text-gray-900 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
