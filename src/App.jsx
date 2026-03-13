import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Skills from './components/sections/Skills'
import Timeline from './components/sections/Timeline'
import Stats from './components/sections/Stats'
import GithubActivity from './components/sections/GithubActivity'
import Highlights from './components/sections/Highlights'
import Contact from './components/sections/Contact'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <Timeline />
        <GithubActivity />
        <Stats />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
