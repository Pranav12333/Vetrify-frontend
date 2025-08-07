import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Neha Patel",
    text: "Absolutely loved the Patola saree I bought! The fabric quality is superb and the design is so elegant. It made my Diwali special.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    text: "I ordered a printed shirt from Vestrify Soul — the fit and comfort are top-notch. Will definitely shop again!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Simran Kaur",
    text: "The dupatta I received was even more beautiful than in the pictures. Traditional craftsmanship with a modern touch. Highly recommended.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Aman Desai",
    text: "Great service and fast delivery. My mom loved the saree I gifted her from Vestrify Soul. Thank you!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-m text-primary">
            What Our Customers Say
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Customer Testimonials
          </h1>
          <p data-aos="fade-up" className="text-s text-gray-400">
            Real voices from our community sharing their love for the quality, comfort, and elegance of Vestrify Soul.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-2">
                <div
                  className="w-full sm:w-[400px] h-[250px] mx-auto flex flex-col items-center justify-between gap-4 shadow-lg py-6 px-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative text-center overflow-hidden"
                >
                  <div className="mb-2">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-16 h-16 object-cover"
                    />
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 flex flex-col items-center justify-between overflow-y-auto px-1">
                    <p className="text-sm text-gray-500 mb-3">{data.text}</p>
                    <h1 className="text-lg font-bold text-black/80 dark:text-white">
                      {data.name}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
