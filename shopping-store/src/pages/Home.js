import React from 'react'
import SimpleCarousel from '../components/SimpleCrousel'
import LatestProducts from '../components/Footer'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <SimpleCarousel/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  )
}

export default Home