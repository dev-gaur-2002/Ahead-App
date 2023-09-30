// Components
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import AfterHero from "@/components/AfterTimeline"
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'
import Aboutsection from '@/components/Aboutsection'
import Timeline from '@/components/Timeline'
import AfterTimeline from '@/components/AfterHero'
import Main from '@/components/MVP'
import Sign from '@/components/Sign'
import Work from '@/components/Work'
import Vacancies from '@/components/Vacancies'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <HeroSection />
      <AfterHero />
      <Slider />
      <Aboutsection />
      <Timeline />
      <AfterTimeline />
      <Main />
      <Sign />
      <Work />
      <Vacancies />
      <Footer />
    </main>
  )
}