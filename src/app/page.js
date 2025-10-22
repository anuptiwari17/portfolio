import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectsPreview from '@/components/ProjectsPreview'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <Hero />
      <About />
      <Experience />
      <ProjectsPreview />
      <Education/>
      <Contact/>
    </main>
  )
}