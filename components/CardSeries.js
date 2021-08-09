import Link from 'next/link'
export default function CardSeries () {
  return (
    <>
    <div className="container">
    <section className="sm:grid sm:grid-cols-5 sm:grid-rows-5 lg:grid-rows-4 z-20 relative">
      <div className="sm:col-span-3 sm:row-span-3 lg:row-span-2">
        <h1 className="bg-gradient-to-br from-green-400 to-blue-400 text-transparent bg-clip-text text-3xl xs2:text-4.5xl sm:text-5.5xl md:text-6xl xl:text-7xl sm:mt-16 md:mt-7 leading-none font-bold mb-9">
        INFLUENCER SERIES: PELLEK
        </h1>
        <div className="text-gray-a2 text-sm-2 xs2:text-base sm:text-lg md:text-xl md:leading-7-1 md:mt-16 w-11/12 sm:w-11/12 md:w-8/12 lg:w-10/12 mb-6 xs2:mb-8 sm:mb-10 md:mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="sm:col-span-2 sm:row-span-5 lg:row-span-4 sm:mt-16 md:mt-0 2xl:pl-20 mt-6 xl:mt-12">
        <div className="inline-block w-8/12 xs:w-4/12 sm:w-full xl:w-max mb-5 py-3 ml-3 xl:py-8 border-2 border-aq-marin lg:overflow-visible mr-5">
          <img src="/images/card-0002-xl.webp" className="animate-fade-in-down -ml-3 mr-3 xl:-ml-10 xl:mr-10 w-full xs:w-9/12 sm:w-full xl:w-29 rounded-lg transform hover:scale-105 hover:-rotate-1 hover:shadow-lg transition duration-300" alt="" />
        </div>
      </div>
      <div className="sm:col-span-3 xs:w-full sm:row-span-2 sm:w-10/12 xl:w-9/12 bg-black-0e border-dashed w-100 my-6 p-6 xs2:p-6 md:p-10 border-2 border-aq-marin">
        <div className="grid grid-cols-2">
          <div className="text-gray-d1 font-bold text-base xs2:mt-1 xl:mt-2 xs2:text-xl xl:text-xl">Total Minted</div>
          <div className="text-right uppercase text-aq-marin font-bold text-xl xl:text-4xl mb-4 xs2:mb-5">40</div>
        </div>
        <div className="w-100 h-px bg-gray-800 mx-auto mt-15"></div>
        <div className="grid grid-cols-2 pt-7">
          <div className="text-gray-d1 font-bold text-base xs2:mt-1 xl:mt-2 xs2:text-xl xl:text-xl">Hashrate</div>
          <div className="text-right uppercase text-aq-marin font-bold text-xl xl:text-4xl mb-4 xs2:mb-5">1000-1250</div>
        </div>
        <div className="w-100 h-px bg-gray-800 mx-auto mt-15"></div>
        <div className="text-center uppercase text-aq-marin font-bold text-xl xl:text-3xl pt-7">$550 / 0.235ETH</div>
        <button className="mt-7 xl:my-7 xs2:h-11 md:h-12 w-full text-black-16 text-xs xs2:text-base md:text-base pt-2 pb-2 px-6 text-black font-bold bg-gradient-to-br from-pink-400 to-purple-700 transition duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl" type="button" name="button">PURCHASE</button>
      </div>
    </section>
    </div>
    </>
  )
}
