import Link from 'next/link'
export default function HeroSection() {
  return (
    <>
    <div className="bg-main-img bg-no-repeat h-83 w-full bg-top-main absolute left-0 top-0 hidden lg:block z-10"></div>
    <div className="container">
      <section className="mt-16 lg:grid lg:grid-cols-2 z-20 relative">
        <div>
          <h1 className="bg-gradient-to-br from-green-400 to-blue-400 text-transparent bg-clip-text text-3xl xs2:text-4.5xl sm:text-5.5xl md:text-6xl xl:text-7xl sm:mt-16 md:mt-7 leading-none font-bold mb-9">
            VOICES OF THE CRYPTOVERSE:<br />WE NEED YOU
          </h1>
          <div className="text-gray-a2 text-sm-2 xs2:text-base sm:text-lg md:text-xl md:leading-7-1 md:mt-16 w-11/12 sm:w-8/12 md:w-8/12 lg:w-10/12 mb-6 xs2:mb-8 sm:mb-10 md:mb-14">
            ChainGuardians are proud to announce the latest in our series of NFTs, “The Influencer Series” where the proceeds will be going straight to the Binance Charity.
          </div>
          <Link href="/">
          <button className="xs2:h-11 md:h-12 xs2:w-36 md:w-44 text-black-16 text-xs xs2:text-base md:text-base pt-2 pb-2 px-6 text-black font-bold bg-gradient-to-br from-pink-400 to-purple-700 transition duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl" type="button" name="button">VIEW MORE</button>
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
