import './styles/color.css'
import { useOriginalScript } from './utils/hooks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CoreServices from './components/CoreServices'
import HowItWorks from './components/HowItWorks'
import SpecializedSupport from './components/SpecializedSupport'
import Testimonials from './components/Testimonials'
import Blogs from './components/Blogs'
import QASection from './components/QASection'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ChatControls from './components/ChatControls'
import TawkTo from './components/TawkTo'

function App() {
  // Initialize original JavaScript functionality
  useOriginalScript()

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <CoreServices />
      <HowItWorks />
      <SpecializedSupport />
      <Testimonials />
      <Blogs />
      <QASection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <ChatControls />
      <TawkTo />
    </div>
  )
}

export default App