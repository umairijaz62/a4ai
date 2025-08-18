"use client"
import { Linkedin, LinkedinIcon, Mail, MailIcon, Star } from "lucide-react"
import Image from "next/image"
import { teamMembers } from "@/constant/teamMembers"

export default function Team() {


 return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative">
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-16 px-4">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Meet Our Team</h1>
          {/* <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            We're a diverse group of passionate professionals dedicated to innovation, excellence, and creating
            meaningful impact in everything we do.
          </p> */}
        </div>

        {/* Team Members */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="mb-20 last:mb-0">
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative element */}
                    <div
                      className={`absolute -z-10 w-80 h-80 rounded-2xl ${index % 2 === 0 ? "bg-blue-600" : "bg-blue-800"} ${index % 2 === 0 ? "-top-4 -left-4" : "-top-4 -right-4"}`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-blue-900 mb-2">{member.name}</h2>
                  <h3 className="text-xl font-semibold text-blue-700 mb-6 uppercase tracking-wide">
                    {member.role}
                  </h3>
                  <p className="text-lg text-blue-800 leading-relaxed max-w-2xl mb-6">{member.description}</p>

                  <div
                    className={`flex gap-4 mb-6 ${index % 2 === 0 ? "justify-center lg:justify-start" : "justify-center lg:justify-end"}`}
                  >
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <LinkedinIcon />
                    </a>
                    <a
                      href={`mailto:${member.mail}`}
                      className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                      aria-label={`Email ${member.name}`}
                    >
                      <MailIcon />
                    </a>
                  </div>

                  {/* Decorative line */}
                  <div
                    className={`w-24 h-1 ${index % 2 === 0 ? "bg-blue-600" : "bg-blue-800"} ${index % 2 === 0 ? "mx-auto lg:mx-0" : "mx-auto lg:ml-auto lg:mr-0"}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}