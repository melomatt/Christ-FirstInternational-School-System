"use client";

import { Calendar, CheckCircle, FileText, Users, Award, Clock } from "lucide-react";

export default function AdmissionsSection() {
  const admissionSteps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Complete the online admission form or reach out to our campus with required documents",
      icon: FileText,
    },
    {
      number: "02",
      title: "Assessment",
      description: "Students take entrance exams based on their grade level",
      icon: Award,
    },
    {
      number: "03",
      title: "Interview",
      description: "Meet with our admissions team and school representatives",
      icon: Users,
    },
    {
      number: "04",
      title: "Decision",
      description: "Receive admission decision within 5-7 business days",
      icon: CheckCircle,
    },
  ];

  const requirements = [
    "Birth certificate or passport copy",
    "Previous school records and transcripts",
    "Medical records and vaccination certificate",
    "Parent/Guardian identification",
    "Proof of address",
    "Letters of recommendation (if applicable)",
  ];

  return (
    <section id="admissions" className="w-full py-20 px-4 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Admissions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant community of learners dedicated to excellence and growth
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-secondary/20">
            <Calendar className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-bold mb-2">Application Deadline</h3>
            <p className="text-muted-foreground text-sm">Applications are accepted year-round. Rolling admissions basis.</p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Processing Time</h3>
            <p className="text-muted-foreground text-sm">Expect a decision within 5-7 business days after all assessments.</p>
          </div>

          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-secondary/20">
            <Users className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-bold mb-2">Grade Levels</h3>
            <p className="text-muted-foreground text-sm">We admit students from Nursery through Senior Secondary levels.</p>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-center">Admission Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-background border border-primary/20 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4 p-3 bg-secondary/10 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>

                  {/* Content */}
                  <h4 className="font-bold mb-2 text-lg">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>

                  {/* Connector Line (except last) */}
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Requirements and How to Apply */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Requirements */}
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-primary">Required Documents</h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Apply */}
          <div className="bg-secondary/5 rounded-xl p-8 border border-secondary/20">
            <h3 className="text-2xl font-bold mb-6 text-secondary">How to Apply</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Step 1: Online or Manual Application</h4>
                <p className="text-muted-foreground text-sm">Visit our website or campus and complete the online admission form with accurate information.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 2: Submit Documents</h4>
                <p className="text-muted-foreground text-sm">Submit all required documents as specified in the application form.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 3: Assessment</h4>
                <p className="text-muted-foreground text-sm">Students will be scheduled for entrance examinations based on their grade level.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Step 4: Interview</h4>
                <p className="text-muted-foreground text-sm">Parents and students will have an interview with our admissions committee.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Eligibility Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-lg">Academic Requirements</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Minimum average of 60% in previous academic year</li>
                <li>• Competitive entrance exam scores</li>
                <li>• Good discipline record from previous school</li>
                <li>• Age-appropriate for the grade level</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">General Requirements</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Valid birth certificate</li>
                <li>• Current immunization records</li>
                <li>• Good health and medical clearance</li>
                <li>• Parent commitment to school values and policies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Join CFIS?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey with us today. We&apos;re excited to meet you and help you achieve your academic and personal goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Apply Now
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
