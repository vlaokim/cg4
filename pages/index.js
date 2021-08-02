import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div>

      <Head>
        <title>Chain Guardians</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>


      <div className="topline bg-violet-grad max-w-container mx-auto"></div>
        <div className="main-img absolute left-0 top-0 hidden lg:block z-10"></div>
      <div className="container mx-auto">
        <header className="h-16 md:h-48 align-middle md:pt-14 mb-8 md:mb-15 flex flex-row z-40 relative">
          <div className="">
            <a href="#">
              <img src="/images/logo-cg-2x.png" className="mt-5 md:mt-0 mb-4 h-12 md:h-20" alt="Chain Guardians Logo" title="Chain Guardians Logo" />
            </a>
          </div>
          <div className="hidden md:block text-right w-full">
            <div className="ml-auto text-center h-5 pt-10 uppercase w-5/12 text-aq-marin font-bold text-sm grid grid-cols-3 divide-x divide-gray-500">
              <div><a href="#">PROJECTS</a></div>
              <div><a href="#">about</a></div>
              <div><a href="#">PROJECTS</a></div>
            </div>
          </div>
        </header>
        <section className="lg:grid lg:grid-cols-2 z-20 relative">
          <div>
            <h1 className="grad-1 text-3xl md:text-6xl xl:text-7xl md:mt-7 leading-none font-bold mb-9 leading-none">
              VOICES OF THE CRYPTOVERSE:<br />WE NEED YOU
            </h1>
            <div className="text-gray-a2 text-sm-2 md:text-xl md:leading-7-1 md:mt-16 w-11/12 md:w-9/12 mb-6 md:mb-14">
              ChainGuardians are proud to announce the latest in our series of NFTs, “The Influencer Series” where the proceeds will be going straight to the Binance Charity.
            </div>
            <button className="hover:bg-purple-700 bg-violet-grad md:h-12 md:w-44 text-black-16 md:text-base text-xs pt-2 pb-2 px-6 text-black font-bold" type="button" name="button">VIEW MORE</button>
          </div>
        </section>
        <section className="mt-10 md:mt-28 z-30 relative">
          <h2 className="font-bold text-lg lg:text-5.5xl 2xl:text-6xl leading-none mb-5">
            <div className="text-aq-marin">LATEST SERIES:</div>
            <div className="text-gray-d1 w-full lg:w-8/12">RISE OF THE INFLUENCERS</div>
          </h2>
          <div className="text-gray-a2 text-sm-2 w-full w-11/12 lg:w-4/12 md:text-xl md:leading-7-1 mb-6 md:mb-20">
            The Cryptoverse is in trouble, the strongest of the Guardians are at the mercy of the Gatekeepers, they’ve had to call for backup from Earths strongest hero's!
          </div>
          <div className="flex flex-col md:w-full pb-10 xl:mt-24">
            <div className="flex overflow-x-scroll hide-scroll-bar md:overflow-auto">
              <div className="flex flex-nowrap lg:w-full md:justify-between xl:justify-start">
                <div className="inline-block overflow-hidden mr-5">
                  <img src="/images/card-0001-xl.webp" className="max-w-xs w-28 sm:w-32 md:w-40 lg:w-56 xl:w-17.5 rounded-md" alt="" />
                </div>
                <div className="inline-block overflow-hidden mr-5">
                  <img src="/images/card-0002-xl.webp" className="max-w-xs w-28 sm:w-32 md:w-40 lg:w-56 xl:w-17.5 rounded-md" alt="" />
                </div>
                <div className="inline-block overflow-hidden mr-5">
                  <img src="/images/card-0003-xl.webp" className="max-w-xs w-28 sm:w-32 md:w-40 lg:w-56 xl:w-17.5 rounded-md" alt="" />
                </div>
                <Link href="">
                  <div className="cursor-pointer hidden lg:block sm:w-32 md:w-40 lg:w-56 xl:w-17.5 inline-block border-dashed border-2 border-aq-marin text-center bg-black-0e lg:pt-36 xl:pt-48">
                    <div className="font-bold text-xl text-aq-marin">
                      <div className="">View Collection</div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="bottom-bg absolute overflow-hidden hidden lg:block z-10"></div>
        <div className="w-40 h-px bg-aq-marin mx-auto lg:mt-12"></div>
        <section className="my-9 md:grid md:grid-cols-5 lg:mt-40 z-50 relative">
          <div className="col-span-3">
            <h2 className="font-bold mb-5 lg:mb-9 text-lg lg:text-5.5xl 2xl:text-6xl leading-none xl:mt-8">
              <span className="text-aq-marin">HOW WE</span><br />
              <span className="text-gray-d1">CAN HELP</span>
            </h2>
            <div className="text-gray-a2 text-sm-2 md:text-xl md:leading-7-1 w-10/12 mb-6 space-y-4">
              <p>ChainGuardians has had a lot of success over the past few years due to having a loyal, supportive, community and a passion for DeFi Superhero block chain gaming.</p>
              <p>Over this period, we wanted to give back to not just our community, but other communities around the world through the power of Crypto.</p>
            </div>
          </div>
          <div className="bg-black-0e col-span-2 border-dashed w-100 p-6 md:p-10 border-2 border-aq-marin text-center">
            <div className="uppercase text-gray-d1 font-bold text-base xl:text-3xl">Our impact</div>
            <div className="uppercase text-aq-marin font-bold text-3xl mb-5 xl:text-5xl">100ETH</div>
            <div className="w-100 h-px bg-gray-800 mx-auto mt-15"></div>
            <div className="uppercase text-gray-d1 font-bold text-base mt-5 xl:text-3xl">CHARITIES WORKED WITH</div>
            <div className="uppercase text-aq-marin font-bold text-3xl mb-5 xl:text-5xl">4</div>
            <div className="w-100 h-px bg-gray-800 mx-auto mt-15"></div>
            <div className="uppercase text-gray-d1 font-bold text-base mt-5 xl:text-3xl">MEMBER CONTRIBUTIONS</div>
            <div className="uppercase text-aq-marin font-bold text-3xl xl:text-5xl">10,000</div>
          </div>
        </section>
        <div className="w-40 xl:w-64 h-px bg-aq-marin mx-auto lg:mt-24"></div>
        <section className="mt-9 lg:mt-20">
          <h2 className="font-bold text-lg mb-5 text-aq-marin text-center uppercase lg:text-5xl xl:text-6xl">OUR VALUES</h2>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar xl:mt-8">
            <div className="flex flex-nowrap">
              <div className="inline-block bg-black-0f rounded-2xl px-5 py-9 xl:px-14 xl:py-16 text-center mr-3 w-60 h-38 md:w-1/3">
                <div className="text-aq-marin text-sm xl:text-xl font-bold leading-none uppercase">TRANSPARENCY MAKES</div>
                <div className="text-gray-d1 text-sm xl:text-xl font-bold leading-none uppercase">AN IMPACT</div>
                <div className="text-gray-a2 text-xs-2 xl:text-sm mt-3 xl:mt-5">
                  With every NFT sale, we disclose exactly how much of your donation is going to the chosen charity, everything is visible through the blockchain
                </div>
              </div>
              <div className="inline-block bg-black-0f rounded-2xl px-5 py-9 xl:px-14 xl:py-16 text-center mr-3 w-60 h-38 md:w-1/3">
                <div className="text-aq-marin text-sm xl:text-xl font-bold leading-none uppercase">CHANGING</div>
                <div className="text-gray-d1 text-sm xl:text-xl font-bold leading-none uppercase">THE CRYPTO WORLD</div>
                <div className="text-gray-a2 text-xs-2 xl:text-sm mt-3 xl:mt-5">
                  Rallying community together to make positive changes into the world to the people that need it.
                </div>
              </div>
              <div className="inline-block bg-black-0f rounded-2xl px-5 py-9 xl:px-14 xl:py-16 text-center mr-3 md:mr-0 w-60 h-38 md:w-1/3">
                <div className="text-aq-marin text-sm xl:text-xl font-bold leading-none uppercase">BENEFITS</div>
                <div className="text-gray-d1 text-sm xl:text-xl font-bold leading-none uppercase">TO YOUR DONATION</div>
                <div className="text-gray-a2 text-xs-2 xl:text-sm mt-3 xl:mt-5">
                  Everytime you purchase one of our limited edition NFTs you can use them directly in the ChainGuardians eco-system
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-black-0f max-w-container py-6 xl:w-18 xl:pb-12">
        <div className="container mx-auto xl:flex xl:flex-row xl:pt-16">
          <img src="/images/logo-cg2-2x.png" srcSet="/images/logo-cg2-1x.png 1x, /images/logo-cg2-2x.png 2x" className="mt-3 mb-5 xl:h-20 mx-auto" alt="Chain Guardians Logo" title="Chain Guardians Logo" />
          <div className="grid grid-cols-2 xl:grid-cols-5 xl:flex-1 xl:ml-24">
            <div>
              <span className="text-aq-marin font-bold text-lg lg:text-2xl">Sitemap</span>
              <ul className="mt-4 xl:mt-8 text-gray-a2 text-sm">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Charities</a></li>
              </ul>
            </div>
            <div>
              <span className="text-aq-marin font-bold text-lg lg:text-2xl">Info</span>
              <ul className="mt-4 xl:mt-8 text-gray-a2 text-sm">
                <li><a href="#">ChainGuardians</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Donations</a></li>
              </ul>
            </div>
            <div className="hidden xl:block">
              <span className="text-aq-marin font-bold text-lg lg:text-2xl">Contact</span>
              <ul className="mt-4 xl:mt-8 text-gray-a2 text-sm">
                <li><a href="mailto:info@charity.chainguardians.io">info@charity.chainguardians.io</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center xl:text-right text-gray-a2 text-xs w-60 mx-auto mt-9">Copyright 2021 powered by the ChainGuardians eco-system</div>
        </div>
      </footer>
    </div>

  )
}
