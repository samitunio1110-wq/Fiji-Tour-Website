import InfoCard from "../cards/InfoCard";

const data = [
  {
    title: "Tons of local experience",
    description:
      "Our whole team live in Nadi, Fiji and have been on nearly every tour or activity on our website. Every week we're out doing something new and learning more about Fiji. There's just so much to do!",
  },
  {
    title: "Latest Booking System",
    description:
      'Our fast, modern, sophisticated booking system will automatically sends out a "Pending" order as soon as you book. We then make the booking process the payment and send you a "Confirmation Voucher".',
  },
  {
    title: "Super quick to reply",
    description:
      "You'll be impressed with how fast we reply to any enquiry or booking, we're on the email all the time. Or jump on our live chat, we're more than happy to talk to you about your Fiji holiday.",
  },
  {
    title: "Being local goes a long way",
    description:
      "Because we're based here in Fiji we get first hand access to new & unusual things really quickly plus any special deals. If you're not sure where to start with your Fiji Holiday, just email us, we can help.",
  },
  {
    title: "Experts in the Islands of Fiji",
    description:
      "Need help with island hopping, accommodation or transfers in the Yasawa Islands? We can put together island accommodation package deals to suit your budget from backpacker to high end travel.",
  },
  {
    title: "Safety and Security",
    description:
      "When traveling to a new destination, safety and security are paramount. HotFiji prioritizes the well-being of its travelers and partners with reputable hotels, transportation providers, and tour operators who adhere to strict safety standards.",
  },
];

const InfoCardsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
