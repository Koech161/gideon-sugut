import Hero from '@/components/Hero'
import About from '@/components/About'
import RecordTable from '@/components/RecordsTable'
import Contact from '@/components/Contact'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
   <main>
    <Hero />
    <RecordTable/>
    <About/>
    <Gallery />
    <Contact/>
   </main>
  );
}
