import Hero from '@/components/Hero'
import About from '@/components/About'
import RecordTable from '@/components/RecordsTable'
import Contact from '@/components/Contact'

export default function Home() {
  return (
   <main>
    <Hero />
    <RecordTable/>
    <About/>
    <Contact/>
   </main>
  );
}
