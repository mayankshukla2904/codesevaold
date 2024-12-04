import Head from 'next/head'
import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import RegistrationCounter from '../components/registration-counter'
import AboutSection from '../components/about-section'
import HackathonTracks from '../components/hackathon-tracks'
import ProblemCarousel from '../components/problem-carousel'
import ScheduleTimeline from '../components/schedule-timeline'
import PrizesSection from '../components/prizes-section'
import FaqSection from '../components/faq-section'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>CodeSewa Hackathon</title>
        <meta name="description" content="Join the most innovative charitable hackathon in Delhi, India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        <HeroSection />
        <RegistrationCounter />
        <AboutSection />
        <HackathonTracks />
        <ProblemCarousel />
        <ScheduleTimeline />
        <PrizesSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  )
}

