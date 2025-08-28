"use client";
import useIntersectionObserver from "@/hooks/ViewPort";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Testimonials data constant
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Dr. Javed Ashraf",
    title: "Associate Professor IMDC",
    image: "/testimonial/Javed.jpg",
    message: "I recently completed my PhD in Oral Public Health from Finland and returned to NED University as an instructor. During my PhD, I began exploring data science and AI, igniting a desire to learn more about the field. In May, I discovered Murabbi's AI course at NUST, which fascinated me. Since May 2023, I have been a part of this exceptional course, and my experience has been remarkable. The instructors excel in explaining content to individuals without a mathematical background. The course provides a solid grasp and understanding of AI concepts. I highly recommend it to anyone interested in delving into the world of AI."
  },
  {
    id: 2,
    name: "Frank Ekeng Henshaw",
    title: "AIESEC exchange student",
    image: "/testimonial/Frank.jpg",
    message: "I am currently an AIESEC exchange participant from Nigeria, pursuing a Professional Diploma in AI at NUST Islamabad. It was through a friend, also doing a fellowship here, that I discovered this program. His encouragement fueled my curiosity and interest in the ever-evolving AI markets. The registration process was smooth, thanks to the assistance provided by the International Student Board Office. So far, the course has been progressing well. The lecturers deserve commendation for their exceptional job in ensuring that everyone, including those without a technical background, can follow along. I believe this program will play a vital role in shaping my future endeavors."
  },
  {
    id: 3,
    name: "Xiao Keti",
    title: "Student's Parents", 
    image: "/testimonial/p2.jpg",
    message: "The summer camp initiative by murabbi as a great success in my experience for the learning of the children were given. Hope to join them soon again"
  },
];

// Section content constant
const SECTION_CONTENT = {
  badge: "TESTIMONIALS",
  title: "What They Say About Us",
  subtitle: "Explore the insights and stories shared by our valued learners."
};

type Props = {
  testimonials?: typeof TESTIMONIALS_DATA;
  sectionContent?: typeof SECTION_CONTENT;
};

const Testimonials = ({ 
  testimonials = TESTIMONIALS_DATA, 
  sectionContent = SECTION_CONTENT 
}: Props) => {
  const [showItem, setShowItem] = useState<number>(1);
  const [left, isLInView] = useIntersectionObserver();

  const handlePrevious = () => {
    if (showItem === 1) {
      setShowItem(testimonials.length);
    } else {
      setShowItem(showItem - 1);
    }
  };

  const handleNext = () => {
    if (showItem === testimonials.length) {
      setShowItem(1);
    } else {
      setShowItem(showItem + 1);
    }
  };

  return (
    <div className="p-8 md:p-32">
      <div
        ref={left}
        className={`${
          isLInView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition duration-1000 flex flex-col p-4 lg:p-0 lg:flex-row gap-8 md:gap-12 items-center lg:gap-[5%]  justify-center py-4  overflow-hidden bg-white `}
      >
        <div
          className={` flex flex-col gap-4 transition duration-500 text-justify md:text-left  `}
        >
          <div className="text-xl md:text-2xl text-left text-black font-bold border-l-4 pl-2 border-blue-500 md:mb-4 ">
            {sectionContent.badge}
          </div>
          <div className="text-3xl md:text-4xl text-left text-blue-600 font-extrabold md:mb-4 ">
            {sectionContent.title}
          </div>
          <div className="text-lg text-gray-600 ">
            {sectionContent.subtitle}
          </div>

          <div className="flex flex-row items-center mt-4 gap-12">
            <div>
              <AiOutlineLeft
                size={30}
                className="text-blue-500 cursor-pointer"
                onClick={handlePrevious}
              />
            </div>
            <div>
              <AiOutlineRight
                onClick={handleNext}
                size={30}
                className="text-blue-500 font-bold cursor-pointer"
              />
            </div>
          </div>
        </div>
        
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={` flex flex-col md:flex-row  gap-[10%] justify-evenly items-center lg:w-[120%] bg-blue-600 p-6 lg:py-12 rounded-xl transition-all duration-500  ${
              showItem === testimonial.id ? "show-testimonial" : " hidden"
            }   `}
          >
            <div className="w-64 h-80 overflow-clip rounded-lg  mt-8 sm:mt-0">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "50% 10%",
                }}
              />
            </div>
            <div className="flex flex-col  items-start justify-between md:w-[60%] ">
             <svg className="h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg>
              <div className="text-base text-white">
                {testimonial.message}
              </div>
             <svg className="h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path></svg>

              <div className="text-lg mt-2 font-semibold text-gray-200">
                <span className="font-extrabold">{testimonial.name}</span>, {testimonial.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;