import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ParentsTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Student's Parents",
      image: "/parents/1.png",
      text: "I'm very thankful to Team Murabi for organizing such a wonderful event for our kids. The event was not only beneficial from a learning perspective but also joyful and engaging. As a parent, I also learned a lot. A special shout-out to Ma'am Sobia from Jolly Phonics for sharing her expertise. Also, a big thank you to Ma's Habib and Usama for being so supportive. Thank you Murabi!"
    },
    {
      id: 2,
      name: "Student's Parents",
      image:
        "/parents/2.jpg",
      text: "I'm very thankful to Team Murabi for organizing such a wonderful event. It was not only beneficial for kids but also a learning experience for me as a parent. Special thanks to Ma'am Sobia, Ma's Habib, and Usama for their support. Keep it up, Murabi!"
    },
    {
      id: 3,
      name: "Student's Parents",
      image:
        "/parents/3.jpg",
      text: "I'm the mother of Ismail Shah, and this was our first experience with the Jolly Phonics Summer Camp at Renas. It turned out to be wonderful! My son quickly adjusted, learned nursery rhymes, phonics, and many activities in a very engaging way. The teachers, especially Ma'am Sobia, were so warm and supportive. The camp was full of fun, practical, and activity-based learning, with individual attention given to each child. Truly a great experience, and I look forward to joining again next year"
    }
  ];

  const prevSlide = () =>
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );

  const nextSlide = () =>
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          What Parents Say
        </h2>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute inset-0 translate-x-10"
              }`}
            >
              <div className="bg-blue-600 rounded-2xl shadow-lg p-10 border border-gray-100 flex gap-10 items-center">
                <div className="flex flex-col items-center w-1/3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-md object-cover border-4 border-blue-100 shadow-md mb-4"
                  />
                  <h3 className="text-indigo-50 font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                </div>

                <div className="flex-1">
                  <p className="text-slate-300 text-lg italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-slate-300 transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-md hover:bg-slate-300 transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentsTestimonials;