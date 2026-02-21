import ComfortCareSection from '@/components/sections/ComfortCareSection'
import FeatureCardsSection from '@/components/sections/FeatureCardsSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ServicesShowcaseSection from '@/components/sections/ServicesShowcaseSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <FeatureCardsSection />
      <ComfortCareSection />
      <ServicesShowcaseSection />
      <ProjectsSection />
    </div>
  )
}

export default page