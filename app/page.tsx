
"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo, experiences, projects } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-20 md:py-28 text-slate-800 dark:text-slate-200 bg-white dark:bg-[#191919]">
      {/* --- HERO SECTION --- */}
      <motion.section 
        className="mb-24"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl text-slate-600 dark:text-slate-400 mb-6 font-medium">
          {personalInfo.role}
        </h2>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
          {personalInfo.bio}
        </p>
        
        {/* Social Links */}
        <div className="flex gap-4 mt-8">
          <SocialLink href={personalInfo.socials.github} icon={<Github size={20} />} />
          <SocialLink href={personalInfo.socials.linkedin} icon={<Linkedin size={20} />} />
          <SocialLink href={`mailto:${personalInfo.email}`} icon={<Mail size={20} />} />
        </div>
      </motion.section>

      {/* --- ABOUT SECTION --- */}
      <Section title="About">
        <p className="text-slate-600 dark:text-slate-400 leading-loose">
          {personalInfo.about}
        </p>
      </Section>

      {/* --- EXPERIENCE SECTION --- */}
      <Section title="Experience">
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {exp.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-100">
                  {exp.role} · <span className="text-slate-500">{exp.company}</span>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- PROJECTS SECTION --- */}
      <Section title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <Link href={project.link} className="text-slate-400 hover:text-slate-900 dark:hover:text-white">
                  <ArrowUpRight size={18} />
                </Link>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- CONTACT / FOOTER --- */}
      <footer className="pt-20 pb-10 border-t border-slate-100 dark:border-slate-800 mt-20">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.
        </p>
      </footer>
    </main>
  );
}

// Helper Components

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section 
      className="mb-24 scroll-mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      {icon}
    </Link>
  );
}