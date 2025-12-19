import promoVideo from "../../assets/showCase.mp4";


export default function VideoShowcase() {
  return (
    <section className=" flex justify-center">
      <div className="w-[100vw] h-[100vh] overflow-hidden ">
        <video
          src={promoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
