import React from 'react'
import Navbar from './components/layouts/Navbar'
import Hero from './components/home/Hero'
import ProblemVision from './components/home/ProblemVision'
import HardwareShowcase from './components/home/HardwareShowcase'
import FeatureGrid from './components/home/FeatureGrid'
import HowItWorks from './components/home/HowItWorks'

export default function page() {
  return (
    <div>
      <Hero/>
      <ProblemVision/>
      <HardwareShowcase/>
      <FeatureGrid/>
      <HowItWorks/>
    </div>
  )
}
