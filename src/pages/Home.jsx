import React from 'react'
import TravelBanner from '../components/common/TravelBanner'
import FijiExperience from '../components/common/FijiExperience'
import WhyChooseUs from '../components/common/WhyChooseUs'
import PortfolioStacked from '../components/common/PortfolioStacked'
import BookingSection from '../components/common/BookingSection'
import TopDestinations from '../components/common/TopDestinations'
import CarRentalCarousel from '../components/common/CarRentalCarousel'
import VideoShowcase from '../components/common/VideoShowcase'
import TravelCardsGrid from '../components/common/TravelCardsGrid'
import BrandsMarque from '../components/common/BrandsMarque'
import ContactForm from '../components/forms/ContactForm'
import BlogSection from '../components/blogs/BlogSection'
import ContactSection from '../components/forms/ContactSection'
import PopularThings from '../components/common/PopularThings'

function Home() {
  return (
    <div>
      <TravelBanner/>
      <PopularThings/>
      <FijiExperience/>
      <WhyChooseUs/>
      <PortfolioStacked/>
    <TopDestinations/>
    <CarRentalCarousel/>
    <BlogSection/>
    <ContactSection/>
    <VideoShowcase/>
    <TravelCardsGrid/>
    <BrandsMarque/>
    <ContactForm/>
    </div>
  )
}

export default Home