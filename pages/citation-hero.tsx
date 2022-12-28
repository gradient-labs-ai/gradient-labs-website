import Head from 'next/head'
import HomeCta from '../components/citation-hero/HomeCta'
import HomeFeatures from '../components/citation-hero/HomeFeatures'
import HomeLogos from '../components/citation-hero/HomeLogos'
import MainFooter from '../components/MainFooter'

export default function Aboout() {
  return (
    <div>
      <Head>
        <title>Citation Hero - Free Instant Citation Generator</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <HomeFeatures />
      <HomeLogos />
      <HomeCta />
      
      <footer>
        <MainFooter />
      </footer>
    </div>
  )
}