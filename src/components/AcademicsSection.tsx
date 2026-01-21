"use client";

import { BookOpen, Users, Award, Lightbulb, Globe, Microscope } from "lucide-react";

export default function AcademicsSection() {
  const programs = [
    {
      title: "Early Childhood",
      description: "Nurturing young minds through play-based learning and foundational skills development",
      grades: "Nursery - Pre-K",
      icon: Users,
    },
    {
      title: "Primary Education",
      description: "Building strong academic foundations with a balanced curriculum and hands-on learning",
      grades: "Grade 1 - 6",
      icon: BookOpen,
    },
    {
      title: "Secondary Education",
      description: "Advanced learning with specialized subjects and preparation for higher education",
      grades: "Grade 7 - 12",
      icon: Award,
    },
  ];

  const curriculumHighlights = [
    {
      icon: Lightbulb,
      title: "Innovative Teaching",
      description: "Modern pedagogical approaches combining traditional excellence with 21st-century skills",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International curriculum standards with cultural awareness and diversity",
    },
    {
      icon: Microscope,
      title: "STEM Excellence",
      description: "Advanced science, technology, engineering, and mathematics programs",
    },
    {
      icon: Users,
      title: "Character Building",
      description: "Integrated faith-based values and character development throughout curriculum",
    },
  ];

  return (
    <section id="academics" className="w-full py-20 px-4 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Academics
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excellence in education through rigorous standards and innovative teaching methods
          </p>
        </div>

        {/* Academic Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full">
                  <span className="text-sm font-semibold text-secondary">{program.grades}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curriculum Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-center">What Makes Our Curriculum Special</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 border border-border hover:border-secondary/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <h4 className="font-bold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Subjects */}
        <div className="bg-background rounded-xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Core Subjects & Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Languages (English, French, Local Languages)",
              "Mathematics & STEM",
              "Sciences (Biology, Chemistry, Physics)",
              "Social Studies & History",
              "Arts & Creative Expression",
              "Physical Education & Sports",
              "Computer Science & Technology",
              "Religious Studies & Values Education",
              "Extracurricular Activities",
            ].map((subject, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-muted-foreground">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-8 border border-secondary/20">
            <h4 className="text-xl font-bold mb-4 text-secondary">Our Approach</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span>Student-centered learning with personalized attention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span>Regular assessments and progress tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span>Mentorship and guidance from experienced educators</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary font-bold mt-1">✓</span>
                <span>Integration of technology in learning</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
            <h4 className="text-xl font-bold mb-4 text-primary">Our Facilities</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Modern classrooms equipped with interactive technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Science and computer laboratories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Library and resource centers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span>Sports facilities and recreational areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
