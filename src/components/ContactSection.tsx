"use client";

import { Mail, Phone, MapPin, Clock, Send, Linkedin, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Robert Field Highway", "Lower Margibi, Liberia"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+231 (886) 517-", "+1 (555) 123-4568"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cfis.edu", "admissions@cfis.edu"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 4:00 PM", "Closed on weekends"],
    },
  ];

  return (
    <section id="contact" className="w-full py-20 px-4 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you. Contact us with any questions or inquiries.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-6 border border-primary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-background rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            {/* Interactive Map */}
            <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="CFIS Location - Robert Field Highway, Liberia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521936625854!2d-10.3591!3d6.269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f79bdf5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sRobert%20Field%20Highway%2C%20Liberia!5e0!3m2!1sen!2s!4v1234567890"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Social Links */}
            <div className="bg-background rounded-xl p-6 border border-primary/20">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg text-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg text-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Department Contacts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-bold mb-2 text-secondary">Admissions</h4>
              <p className="text-sm text-muted-foreground mb-2">admissions@cfis.edu</p>
              <p className="text-sm text-muted-foreground">+231 (886) 517-938</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2 text-secondary">Finance</h4>
              <p className="text-sm text-muted-foreground mb-2">finance@cfis.edu</p>
              <p className="text-sm text-muted-foreground">+231 (886) 517-938</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2 text-secondary">Student Affairs</h4>
              <p className="text-sm text-muted-foreground mb-2">students@cfis.edu</p>
              <p className="text-sm text-muted-foreground">+231 (886) 517-938</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold mb-2 text-secondary">General Inquiries</h4>
              <p className="text-sm text-muted-foreground mb-2">info@cfis.edu</p>
              <p className="text-sm text-muted-foreground">+231 (886) 517-938</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
