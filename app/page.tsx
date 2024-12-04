import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import HackathonTracks from '@/components/hackathon-tracks'
import ScheduleTimeline from '@/components/schedule-timeline'
import PrizesSection from '@/components/prizes-section'
import FaqSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <HackathonTracks />
        <ScheduleTimeline />
        <PrizesSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

