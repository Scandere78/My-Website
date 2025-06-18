"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id : 'formation', label: 'Parcours'},
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.bio-container') && showBio) {
        setShowBio(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showBio]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Hauteur de la navbar + un peu d'espace
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 h-20 transition-all duration-150 backdrop-blur-md ${
      scrolled || isMenuOpen || showBio
        ? 'bg-black/5 shadow-lg'
        : 'bg-black/5'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 md:px-8">
        <div className="flex items-center justify-between h-full">
          <button 
            onClick={() => setShowBio(!showBio)}
            className="flex items-center text-4xl font-bold hover:opacity-80 transition-opacity"
          >
            <span className="text-blue-900">Scandere</span>
            <span className="text-white">TEJ</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-lg font-medium text-white hover:scale-105 hover:text-blue-200 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="https://www.linkedin.com/in/scandere-tej-a43630297/" 
              target="_blank" 
              className="relative overflow-hidden group rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full" />
              <div className="relative z-10 flex items-center px-6 py-2.5 text-lg font-medium text-white rounded-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </div>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white md:hidden hover:text-blue-200"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {showBio && (
        <div className="bio-container absolute left-6 top-20 w-96 bg-black/90 backdrop-blur-md rounded-lg shadow-xl p-6 text-white">
          <div className="flex items-start space-x-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                src="/projects/MOI.JPG"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 80px) 100vw, 80px"
              />
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="px-4 py-2 bg-black/90 backdrop-blur-md md:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left py-2 text-white hover:text-blue-200"
              >
                {item.label}
              </button>
            ))}
            <div className="my-2 border-t border-gray-800" />
            <Link 
              href="https://www.linkedin.com/in/votre-profil" 
              target="_blank"
              className="block py-2 text-blue-400 hover:text-blue-300"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
