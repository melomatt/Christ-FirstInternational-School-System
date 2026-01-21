"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Admissions", href: "#admissions" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+231 (886) 517-938", href: "+231 (886) 517-938" },
    { icon: Mail, text: "info@cfis.edu", href: "mailto:info@cfis.edu" },
    { icon: MapPin, text: "Robert Field Highway, Liberia", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/cfis.png"
                  alt="CFIS Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-lg">CFIS</h3>
            </div>
            <p className="text-sm opacity-90">
              Christ First International School System - Fostering excellence through faith, innovation, and global citizenship.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="p-2 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-start gap-2 text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all"
                    >
                      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{info.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Office Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <span className="font-medium">Monday - Friday:</span>
                <br />
                8:00 AM - 4:00 PM
              </li>
              <li>
                <span className="font-medium">Saturday:</span>
                <br />
                9:00 AM - 1:00 PM
              </li>
              <li>
                <span className="font-medium">Sunday:</span>
                <br />
                Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-secondary/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
          <div>
            <p>
              © {currentYear} Christ First International School System. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p>
              Built and designed by{" "}
              <span className="font-bold text-secondary">Gigi Logistics & Technology Liberia</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
