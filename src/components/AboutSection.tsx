"use client";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-4 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About CFIS
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our story, mission, and commitment to excellence
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Founders Images */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
            {/* James D Gbahn */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-56 mb-4 rounded-xl overflow-hidden border-4 border-secondary/20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm font-semibold">James D Gbahn</p>
                    <p className="text-xs">Founder</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">James D Gbahn</h3>
              <p className="text-sm text-muted-foreground text-center">Founder & Visionary</p>
            </div>

            {/* Pandoria Gbahn */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-56 mb-4 rounded-xl overflow-hidden border-4 border-secondary/20 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm font-semibold">Pandoria Gbahn</p>
                    <p className="text-xs">Co-Founder</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">Pandoria Gbahn</h3>
              <p className="text-sm text-muted-foreground text-center">Co-Founder & Partner</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Founders</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Christ First International School was founded by James D Gbahn and his wife Pandoria Gbahn, 
                who envisioned an educational institution that would combine academic excellence with strong 
                moral and spiritual values. Their dedication to creating a nurturing environment where students 
                can thrive both intellectually and spiritually has been the foundation of our school.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To foster excellence through faith, innovation, and global citizenship, preparing students 
                to become leaders of character and integrity in an ever-changing world.
              </p>
            </div>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">Our History</h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Christ First International School stands as a testament to the vision and commitment of its founders. 
              Established with a clear purpose to provide quality education rooted in Christian values, the institution 
              has grown to become a beacon of academic excellence and moral development in the educational landscape.
            </p>
            <p>
              From its inception, CFIS has been committed to creating an inclusive community where students from diverse 
              backgrounds come together to learn, grow, and develop as global citizens. The school&apos;s innovative curriculum 
              combines traditional academic rigor with modern teaching methodologies, ensuring that every student receives 
              a comprehensive education that prepares them for success in higher education and beyond.
            </p>
            <p>
              Under the steadfast leadership of the Gbahn family, CFIS continues to uphold the values of faith, integrity, 
              and excellence. The school maintains its commitment to fostering an environment where students can discover their 
              potential, develop critical thinking skills, and cultivate a sense of responsibility toward their communities and 
              the world at large.
            </p>
            <p>
              Today, Christ First International School remains dedicated to its founding principles while continuously adapting 
              to meet the evolving needs of students in the 21st century. Through innovation in education, community engagement, 
              and a steadfast focus on holistic development, CFIS continues to transform lives and inspire future leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
