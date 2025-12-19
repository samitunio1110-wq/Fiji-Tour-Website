import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ContactForm from '../forms/ContactForm'
import TopDestinations from '../common/TopDestinations'
import InfoCardsSection from '../common/InfoCardsSection'

function Layout() {
  return (
    <>
      <Header/>
       <Outlet />
       <TopDestinations/>
       <InfoCardsSection/>
       <ContactForm/>
      <Footer />
    </>
  )
}

export default Layout