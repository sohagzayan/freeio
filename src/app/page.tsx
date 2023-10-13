import Hero from '@/components/Home/Hero/Hero'
import HighestRatedSeller from '@/components/Home/HighestRatedSeller/HighestRatedSeller'
import NeedSomethingDone from '@/components/Home/NeedSomethingDone/NeedSomethingDone'
import TrendingServices from '@/components/Home/TrendingServices/TrendingServices'


export default function Home() {
  return (
    <main className='h-[20000px] overflow-x-hidden'>
      {/* <CategoriesList /> */}
      <Hero />
      {/* <BrowseCategory /> */}
      <NeedSomethingDone />
      <TrendingServices />
      <HighestRatedSeller />
    </main>
  )
}
