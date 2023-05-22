import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/home/HeroSection/HeroSection'
import AboutUs from '@/components/home/AboutUs/AboutUs'
import WhatWeDo from '@/components/home/WhatWeDo/WhatWeDo'
import OurServices from '@/components/home/OurServices/OurServices'
import LogoSlider from '@/components/home/LogoSlider/LogoSlider'
import BigImage from '@/components/home/BigImage/BigImage'
import ContactAddress from '@/components/home/ContactAddress/ContactAddress'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <OurServices />
      <LogoSlider />
      <BigImage />
      <ContactAddress />
    </main>
  )
}
