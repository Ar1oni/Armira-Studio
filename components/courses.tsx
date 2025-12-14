"use client"

import { useLanguage } from "@/lib/language-context"
import { GraduationCap, Clock, Award, Users } from "lucide-react"

export function Courses() {
  const { t } = useLanguage()

  const courses = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: t("courses.individual.title"),
      description: t("courses.individual.description"),
      duration: t("courses.individual.duration"),
      image: "/microblading-training-course-professional.jpg",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t("courses.group.title"),
      description: t("courses.group.description"),
      duration: t("courses.group.duration"),
      image: "/brow-design-masterclass-beauty-training.jpg",
    },
  ]

  const videos = [
    "/Courses-Video-1.mp4",
    "/Courses-Video-2.mp4",
    "/Courses-Video-3.mp4",
  ]

  return (
    <section id="courses" className="py-16 bg-warm-brown/5">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-brown mb-2">
            {t("courses.title")}
          </h2>
          <p className="text-warm-brown/70 max-w-xl mx-auto text-base">
            {t("courses.description")}
          </p>
        </div>

        {/* Courses */}
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-full sm:w-72 group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-cream border border-warm-brown/10"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-cream">{course.icon}</div>
              </div>

              <div className="p-4">
                <h3 className="font-serif text-lg text-warm-brown mb-1">
                  {course.title}
                </h3>
                <p className="text-warm-brown/70 text-sm mb-3 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 text-gold text-sm">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="font-medium">{course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Videos */}
{/* Videos */}
<div className="flex flex-wrap justify-center gap-20 max-w-5xl mx-auto">
  {videos.map((video, index) => (
    <div key={index} className="w-40 sm:w-48">
      <video
        src={video}
        controls
        className="w-full aspect-[9/16] rounded-xl shadow-lg border border-warm-brown/10"
      />
    </div>
  ))}
</div>


        {/* Bottom badges */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-4 bg-cream rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-warm-brown text-sm font-medium">
                {t("courses.certificate")}
              </span>
            </div>
            <div className="w-px h-5 bg-warm-brown/20" />
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold" />
              <span className="text-warm-brown text-sm font-medium">
                {t("courses.smallGroups")}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
