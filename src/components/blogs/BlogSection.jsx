import React from "react";

import mainImg from "../../assets/blog-img/img1.png";
import img1 from "../../assets/blog-img/img2.png";
import img2 from "../../assets/blog-img/img3.png";
import img3 from "../../assets/blog-img/img4.png";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img1,
      views: "38598",
      likes: "437",
      date: "Nov 8",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img2,
      views: "38598",
      likes: "437",
      date: "Nov 8",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: img3,
      views: "38598",
      likes: "437",
      date: "Nov 8",
    },
  ];

  return (
    <section className=" py-16">
      <div className="w-[80%] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Main Blog */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-sky-600 mb-6">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </h2>

          <div className="rounded-2xl overflow-hidden ">
            <img
              src={mainImg}
              alt="blog"
              className="w-[40vw] h-[420px] object-cover rounded-2xl"
            />
          </div>

          <p className="text-black mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        {/* Right Sidebar */}
        <div>
          <div className="flex gap-6 mb-6 mt-20">
            <span className="font-semibold text-sky-600 border-b-2 border-sky-600 pb-1">
              TOP ARTICLES
            </span>
            <span className="text-gray-400">RECENTLY PUBLISHED</span>
          </div>

          <div className="space-y-6">
            {articles.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.image}
                  alt="article"
                  className=" h-26 w-40 rounded-lg object-cover"
                />

                <div>
                  <p className="text-xs text-sky-600 font-semibold mb-1">
                    VSCode
                  </p>
                  <h4 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                    <span>👁 {item.views}</span>
                    <span>❤️ {item.likes}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full transition-all duration-300">
            VIEW MORE
          </button>
      </div>
    </section>
  );
};

export default BlogSection;
