import BestMarketplace from '@/components/Home/BestMarketplace/BestMarketplace'
import Hero from '@/components/Home/Hero/Hero'
import HighestRatedSeller from '@/components/Home/HighestRatedSeller/HighestRatedSeller'
import NeedSomethingDone from '@/components/Home/NeedSomethingDone/NeedSomethingDone'
import TrendingServices from '@/components/Home/TrendingServices/TrendingServices'
import Footer from '@/components/common/Footer/Footer'


export default function Home() {
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
