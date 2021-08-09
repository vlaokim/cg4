import Link from 'next/link'
export default function LatestSeries() {
  return (
    <div className="container">
      <section className="mt-10 xs2:mt-14 sm:mt-20 md:mt-28 z-30 relative">
        <h2 className="font-bold text-xl xs2:text-2.5xl sm:text-3xl lg:text-5.5xl 2xl:text-6xl leading-none mb-5">
          <div className="text-aq-marin">LATEST SERIES:</div>
          <div className="text-gray-d1 w-full lg:w-8/12">RISE OF THE INFLUENCERS</div>
        </h2>
        <div className="text-gray-a2 text-sm-2 xs2:text-base sm:text-lg w-full w-11/12 sm:w-11/12 lg:w-4/12 md:text-xl md:leading-7-1 mb-6 md:mb-20">
          The Cryptoverse is in trouble, the strongest of the Guardians are at the mercy of the Gatekeepers, they’ve had to call for backup from Earths strongest hero's!
        </div>
        <div className="flex flex-col md:w-full pb-10 sm:mt-12 xl:mt-24">
          <div className="flex overflow-x-scroll hide-scroll-bar md:overflow-visible">
            <div className="flex flex-nowrap lg:w-full md:justify-between xl:justify-start">
              <Link href="/card/0001">
              <div className="inline-block overflow-hidden lg:overflow-visible mr-5 cursor-pointer md:transform hover:scale-105 hover:rotate-2 transition duration-300">
                <img src="/images/card-0001-xl.webp" className="max-w-xs w-28 xs2:w-40 md:w-40 lg:w-56 xl:w-17.5 rounded-lg" alt="" />
              </div>
              </Link>
              <Link href="/card/0002">
              <div className="inline-block overflow-hidden mr-5 cursor-pointer md:transform hover:scale-105 hover:rotate-2 transition duration-300">
                <img src="/images/card-0002-xl.webp" className="max-w-xs w-28 xs2:w-40 md:w-40 lg:w-56 xl:w-17.5 rounded-lg" alt="" />
              </div>
              </Link>
              <Link href="/card/0003">
              <div className="inline-block overflow-hidden mr-5 cursor-pointer md:transform hover:scale-105 hover:rotate-2 transition duration-300">
                <img src="/images/card-0003-xl.webp" className="max-w-xs w-28 xs2:w-40 md:w-40 lg:w-56 xl:w-17.5 rounded-lg" alt="" />
              </div>
              </Link>
              <Link href="/">
                <div className="hidden lg:block sm:w-32 md:w-40 lg:w-56 xl:w-17.5 inline-block border-dashed border-2 border-aq-marin text-center bg-black-0e lg:pt-36 xl:pt-48 cursor-pointer md:transform hover:scale-105 transition duration-300">
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
    </div>
  )
}
