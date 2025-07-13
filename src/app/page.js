
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectsPreview from '@/components/ProjectsPreview'

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <Hero />
      <About />
      <ProjectsPreview />
    </main>
  )
}