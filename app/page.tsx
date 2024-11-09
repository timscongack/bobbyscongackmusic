import Banner from '@/components/Banner'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import UpcomingShows from '@/components/UpcomingShows'
import Biography from '@/components/Biography'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <Header />
      <main className="container mx-auto px-4">
        <HeroSection />
        <UpcomingShows />
        <Biography />
      </main>
      <Footer />
    </div>
  )
}