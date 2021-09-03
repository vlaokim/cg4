import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header.js'
import HeroSection from '../components/HeroSection.js'
import LatestSeries from '../components/LatestSeries.js'
import Help from '../components/Help.js'
import Values from '../components/Values.js'
import Footer from '../components/Footer.js'


export default function Home() {
  return (
    <div className="font-sans bg-body bg-main bg-no-repeat">
      <Head>
        <title>Main Page | Chain Guardians</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      </Head>
      <Header />
	  <div id="bear"></div>
	<script src="https://beartips.lolodev.com/widget/widget.js" type="text/javascript"></script>
	<script type="text/javascript">bear.init();</script>


        <HeroSection />
        <LatestSeries />
        <Help />
        <Values />
      <Footer />
    </div>
  )
}
