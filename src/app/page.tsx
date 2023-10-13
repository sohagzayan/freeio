import Hero from '@/components/Home/Hero/Hero'
import NeedSomethingDone from '@/components/Home/NeedSomethingDone/NeedSomethingDone'


export default function Home() {
  return (
    <main className='h-[20000px]'>
      {/* <CategoriesList /> */}
      <Hero />
      {/* <BrowseCategory /> */}
      <NeedSomethingDone />
    </main>
  )
}
