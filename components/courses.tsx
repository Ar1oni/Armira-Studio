"use client"

import { useLanguage } from "@/lib/language-context"
import { GraduationCap, Clock, Award, Users } from "lucide-react"

export function Courses() {
  const { t } = useLanguage()

  const courses = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: t("courses.courses.0.title"),
      description: t("courses.courses.0.description"),
      duration: t("courses.courses.0.duration"),
      image: "/microblading-training-course-professional.jpg",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t("courses.courses.1.title"),
      description: t("courses.courses.1.description"),
      duration: t("courses.courses.1.duration"),
      image: "/brow-design-masterclass-beauty-training.jpg",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t("courses.courses.2.title"),
      description: t("courses.courses.2.description"),
      duration: t("courses.courses.2.duration"),
      image: "/advanced-eyebrow-techniques-workshop.jpg",
    },
  ]

  return (
    <section id="courses" className="py-20 bg-warm-brown/5">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4">
            {t("courses.title")}
          </h2>
          <p className="text-warm-brown/70 max-w-2xl mx-auto text-lg">
            {t("courses.description")}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-cream border border-warm-brown/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-cream">{course.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-warm-brown mb-2">
                  {course.title}
                </h3>
                <p className="text-warm-brown/70 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gold">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>

                  {/* Custom Button (no shadcn) */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-cream rounded-full px-8 py-4 shadow-md">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-warm-brown font-medium">
                {t("courses.certificate")}
              </span>
            </div>
            <div className="w-px h-6 bg-warm-brown/20" />
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              <span className="text-warm-brown font-medium">
                {t("courses.smallGroups")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}