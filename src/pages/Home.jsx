import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/NavBar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className=''>
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content*/}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
    </div>
  )
}

