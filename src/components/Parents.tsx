import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

interface TestimonialsProps {
  title?: string;
  testimonials: Testimonial[];
}

// Sample testimonials data for different pages
export const aiTestimonials: Testimonial[] = [
  {
    id: 1,
    name:"Yang Minge",
    image:"/parents/6.jpg",
    text: "I built a robot that could move forward and it felt so cool to see it working. In cybersecurity, I sent secret codes to my friend and it was like playing a spy game. STEAM Camp made learning so much fun!"
  },
  {
    id: 2,
    name: "Faryal",
    image: "/parents/4.jpg",
    text: "The best thing about the camp was that we learned by doing. I actually made my own bot, solved puzzles with AI, and even learned how to stay safe online. It was exciting and I enjoyed every part of it."
  },
  {
    id: 3,
    name: "Mutahir",
    image: "/parents/5.jpg",
    text: "This camp was the best experience for me! I made robots, played with sensors, and even wrote small programs. AI stories were so funny, and I loved learning about secret codes to keep data safe."
  }
];
export const legoTestimonials: Testimonial[] = [
  {
    id: 1,
    name:"Mutasim ",
    image:"/parents/10.jpeg",
    text: "The best thing about the camp was that we learned by doing. I actually made my own bot, solved puzzles with AI, and even learned how to stay safe online. It was exciting and I enjoyed every part of it."
  },
  {
    id: 2,
    name: "Hamza Rehman",
    image: "/parents/9.jpg",
    text: "The best thing about the camp was that we learned by doing. I actually made my own bot, solved puzzles with AI, and even learned how to stay safe online. It was exciting and I enjoyed every part of it."
  },
  {
    id: 3,
    name: "Mutahir",
    image: "/parents/5.jpg",
    text: "This camp was the best experience for me! I made robots, played with sensors, and even wrote small programs. AI stories were so funny, and I loved learning about secret codes to keep data safe."
  }
];

export const cyberTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Saad Khan",
    image: "/parents/7.jpg",
    text: "The platform has completely transformed how we handle client portfolios. The intuitive interface makes complex financial planning accessible to everyone."
  },
  {
    id: 2,
    name: "Hamza Saleem",
    image: "/parents/8.jpg",
    text: "Outstanding analytics and reporting features have helped us make better investment decisions. Highly recommend for any financial professional."
  },
  {
    id: 3,
    name: "Hamza Rehman",
    image: "/parents/9.jpg",
    text: "The best thing about the camp was that we learned by doing. I actually made my own bot, solved puzzles with AI, and even learned how to stay safe online. It was exciting and I enjoyed every part of it."
  },
];

export const jollyTestimonials: Testimonial[] = [
  {
    id: 1,
    name:"Arham's Mother",
    image:"/parents/2.jpg",
    text: "My child really enjoyed the Jolly Phonics sessions at Murabbi. The activities were fun and engaging, and he always looked forward to the classes."
  },
  {
    id: 2,
    name: "Laraib's Mother",
    image: "/parents/1.jpg",
    text: "The Jolly Phonics program at Murabbi was amazing. My daughter loved the songs and actions, and she was always excited to share what she learned at home."
  },
  {
    id: 3,
    name: "Sana's Mother",
    image: "/parents/3.jpg",
    text: "We had a wonderful experience with Murabbi’s Jolly Phonics sessions. The kids enjoyed every bit of it, and learning felt like play for them."
  }
];

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ 
  title = "What They Say",
  testimonials 
}) => {

  return (
    <div className="py-32 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 text-left"
            >
              <div className="mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full "
                />
              </div>


              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {testimonial.name}
                </h3>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};