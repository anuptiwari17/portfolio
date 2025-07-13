// app/page.js
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectsPreview from '@/components/ProjectsPreview' // Changed from Projects
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProjectsPreview />
      <Footer />
    </main>
  )
}