"use client"

import BestMarketplace from '@/components/Home/BestMarketplace/BestMarketplace'
import Hero from '@/components/Home/Hero/Hero'
import HighestRatedSeller from '@/components/Home/HighestRatedSeller/HighestRatedSeller'
import NeedSomethingDone from '@/components/Home/NeedSomethingDone/NeedSomethingDone'
import TrendingServices from '@/components/Home/TrendingServices/TrendingServices'
import Footer from '@/components/common/Footer/Footer'
import { useSession } from 'next-auth/react'


export default function Home() {
  const { data: session } = useSession();
  console.log("home here", session)
  return (
    <main className='overflow-x-hidden'>
      {/* <CategoriesList /> */}
      <Hero />
      {/* <BrowseCategory /> */}
      <NeedSomethingDone />
      <TrendingServices />
      <BestMarketplace />
      <HighestRatedSeller />
      <Footer />
    </main>
  )
}
