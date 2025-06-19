"use client";
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaGlobe, FaCode, FaGraduationCap, FaMapMarkerAlt} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiGit, SiMongodb, SiPrisma } from 'react-icons/si';
import Navbar from './components/Navbar';

const Portfolio = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/Scandere78",
      label: "GitHub",
      color: "hover:text-gray-100"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/scandere-tej-a43630297/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      url: "mailto:scanderetejpro@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      url: "https://wa.me/33650875135",
      label: "WhatsApp",
      color: "hover:text-green-400"
    }
  ];

  const skills = [
    { icon: <SiNextdotjs />, name: "Next.js", color: "hover:text-gray-100" },
    { icon: <SiReact />, name: "React", color: "hover:text-blue-400" },
    { icon: <SiTypescript />, name: "TypeScript", color: "hover:text-blue-600" },
    { icon: <SiJavascript />, name: "JavaScript", color: "hover:text-yellow-400" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "hover:text-green-500" },
    { icon: <SiPython />, name: "Python", color: "hover:text-yellow-300" },
    { icon: <SiGit />, name: "Git", color: "hover:text-orange-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "hover:text-green-400" },
    { icon: <SiPrisma />, name: "Prisma", color: "hover:text-indigo-400" },
    { icon: <FaCode />, name: "C", color: "hover:text-blue-300" },
  ];

  const timeline = [
    {
      year: "2025 - 2027",
      title: "Holberton School - Concepteur développeur d'applications (Bac +4)",
      type: "formation",
      description: "Formation en développement web et mobile, spécialisation Full Stack",
      icon: <FaGraduationCap className="w-5 h-5" />,
      location: " Puteaux 92"
    },
    {
      year: "2024 - 2025",
      title: "Holberton School - Développeur web et mobile (Bac +2)",
      type: "formation",
      description: "Formation en développement web et mobile.",
      icon: <FaGraduationCap className="w-5 h-5" />,
      location: "Puteaux 92"
    },
    {
      year: "2020 - 2022",
      title: "H3 CAMPUS -  BTS Management Commercial Opérationnel  (Bac +2) ",
      type: "formation",
      description: "Formation en management et gestion commerciale.",
      icon: <FaGraduationCap className="w-5 h-5" />,
      location: "Poissy 78"
    }
  ];

  const projects = [    {
      id: 1,
      title: "🚗SwiftLoc",
      description: " Platform SAAS permettant aux agences de location de publier et gérer leurs voitures, et aux utilisateurs de réserver en ligne. Inspiré de Leboncoin / La Centrale, version dédiée uniquement à la location de voitures.",
      technologies: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Stripe", "Tailwind CSS"],
      image: "/projects/swiftloc.png",
      link: "https://github.com/Scandere78/",
      demoUrl: "https://votre-ecommerce-demo.vercel.app",
      category: "Fullstack",
      status: "En cours",
      startDate: "2025-01",
    },
   
     {
      id: 2,
      title: "LD Comedy SHOW 🎭🤡🎤",
      description: "LD Comedy Show est une plateforme web innovante de mise en relation entre Talents amateurs et lieux de diffusion comme les bars, cafés-théâtres, scènes ouvertes et petits théâtres.",
      technologies: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
      image: "/projects/image.png",
      link: "#",
      demoUrl: "https://ld-comedy-show.vercel.app/",
      category: "Frontend",
      status: "En cours",
      startDate: "2024-11",
      endDate: "2025-03",
      completion: 100,
    },

     {
      id: 3,
      title: "Oceano Adventure 🌊🐠🌴",
      description: "Site web créé pour promouvoir un jeu d'aventure épique mêlant  logique,  code  et  combats.  Le  site  met  en  avant l'univers du jeu et ses personnages de façon interactive",
      technologies: ["React", "Tailwind CSS", "Django", "C#"],
      image: "/projects/oceano.png",
      link: "#",
      demoUrl: "https://oceano.ekoow.xyz/",
      category: "Frontend",
      status: "Livré",
      startDate: "2024-11",
      endDate: "2025-03",
      completion: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
      <Navbar />

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Scandere <span className="text-blue-900">TEJ</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                Développeur Full Stack
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Recherche activement une <span className="text-blue-400 font-semibold bg-blue-500/10 px-2 py-1 rounded">ALTERNANCE</span>, un CDI ou un <span className="text-blue-400 font-semibold bg-blue-500/10 px-2 py-1 rounded">STAGE</span>.
                <br /><br />
                Je transforme des idées en applications web modernes et performantes, avec une passion pour l&apos;expérience utilisateur et l&apos;excellence technique.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-4 mb-8">                {socialLinks.map((link, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <button
                        onClick={() => window.open(link.url, '_blank')}
                        className={`text-gray-400 transition-colors duration-200 ${link.color}`}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto">
                      <p className="text-sm font-medium">{link.label}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>            
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl transform -translate-x-2 translate-y-2"></div>
              <div className="relative w-full h-full rounded-full border-4 border-blue-500/30 overflow-hidden shadow-2xl group">
                <Image
                  src="/profile.JPG"
                  alt="Profile"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ objectPosition: "center 20%" }}
                  priority
                  sizes="(max-width: 768px) 256px, 384px"
                  onError={(e) => {
                    console.error('Erreur de chargement de l\'image:', e);
                    e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Photo';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Compétences & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-neutral-800/50 border-none group hover:bg-neutral-800 transition-all">
                <CardContent className="flex flex-col items-center p-6">
                  <div className={`text-4xl mb-3 transition-colors ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="formation" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Parcours
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 h-full w-px bg-blue-500/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                <Card className="bg-neutral-800/50 border-none hover:bg-neutral-800 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                        {item.year}
                      </Badge>
                      <Badge variant="outline" className="bg-neutral-800">
                        {item.location}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-neutral-800/50 border-none group hover:bg-neutral-800/70 transition-all cursor-pointer overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge
                    className={`absolute top-3 right-3
                      ${project.status === 'En cours' ? 'bg-blue-500' :
                        project.status === 'Terminé' ? 'bg-green-500' :
                        project.status === 'Livré' ? 'bg-purple-500' :
                        'bg-yellow-500'} hover:opacity-90`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                  </div>                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-neutral-700 hover:bg-neutral-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>                  <div className="flex justify-between items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, '_blank');
                      }}
                      className={`${!project.demoUrl ? 'w-full' : 'flex-1'} text-blue-400 border-blue-400 hover:bg-blue-400/20`}
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </Button>
                    {project.demoUrl && (
                      <Button
                        variant="default"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demoUrl, '_blank');
                        }}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                      >
                        <FaGlobe className="mr-2" />
                        Site Web
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-neutral-800/50 border-none hover:bg-neutral-800/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-3xl text-blue-500">
                  <FaEnvelope />
                </div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <a 
                  href="mailto:scanderetejpro@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  scanderetejpro@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/50 border-none hover:bg-neutral-800/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-3xl text-green-500">
                  <FaWhatsapp />
                </div>
                <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/33650875135" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  +33 6 50 87 51 35
                </a>
              </CardContent>
            </Card>

             <Card className="bg-neutral-800/50 border-none hover:bg-neutral-800/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-3xl text-blue-500">
                  <FaLinkedin />
                </div>
                <h3 className="text-white font-bold mb-2">Linkedin</h3>
                <a 
              href="https://www.linkedin.com/in/scandere-tej-a43630297/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
            >
              Scandere TEJ
            </a>
              </CardContent>
            </Card>


            <Card className="bg-neutral-800/50 border-none hover:bg-neutral-800/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-3xl text-black">
                  <FaGithub />
                </div>
                <h3 className="text-white font-bold mb-2">Github</h3>
                <a 
              href="https://github.com/Scandere78" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors text-2xl"
            >
              Scandere78
            </a>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/50 border-none hover:bg-neutral-800/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-3xl text-purple-500">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="text-white font-bold mb-2">Localisation</h3>
                <p className="text-gray-300">Poissy, Ile de France</p>
              </CardContent>
            </Card>
          </div>

          {/* Liens sociaux supplémentaires */}
          <div className="mt-12 flex justify-center gap-6">
            <a 
              href="https://github.com/Scandere78" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;