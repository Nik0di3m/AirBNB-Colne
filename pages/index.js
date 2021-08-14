import Head from "next/head"
import Banner from "../components/Banner/Banner"
import Expolore from "../components/ExploreActivity/Expolore"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import LargeCard from "../components/LargeCard"
import LiveAnyWhere from "../components/LiveAnyWhere/LiveAnyWhere"
import NerbyExplore from "../components/NerbyExplore/NerbyExplore"
import { fetchAPI } from "../components/Utils/api"



const Home = ({ data, data2, data3 }) => {
  console.log(data2)
  return (
    <div>
      <Head>
        <title>
          Airbnb
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-[1600px] mx-auto px-8 sm:p-16">
        <NerbyExplore data={data} />
        <LiveAnyWhere data={data2} />
        <LargeCard img="/bigcard.webp" title="Zostań gospodarzem" desc="Wynajmij wolne miejsce na Airbnb - zarobisz i zyskasz nowe możliwości" buttonText="Dowiedz się więcej" />
        <Expolore data={data3} />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const data = await fetchAPI('/explore-nerbies')
  const data2 = await fetchAPI('/live-anywheres')
  const data3 = await fetchAPI('/explore-activities')
  return {
    props: { data, data2, data3 }
  }
}