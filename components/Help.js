import React from 'react'

export default function Help () {
  return (
    <>
    <div className="hidden md:block bg-bottom rounded-lg w-full h-60 absolute bg-no-repeat"></div>
    <div className="container">
      <div className="w-40 h-px bg-aq-marin mx-auto lg:mt-12"></div>
      <section className="my-9 md:grid lg:grid-cols-5 lg:mt-40 z-50 relative">
        <div className="lg:col-span-3">
          <h2 className="font-bold text-xl xs2:text-2.5xl sm:text-3xl lg:text-5.5xl 2xl:text-6xl leading-none mt-10 xs2:mt-14 lg:mt-0 xl:mt-8 mb-7 xs2:mb-9 lg:mb-9">
            <div className="text-aq-marin uppercase">HOW WE</div>
            <div className="text-gray-d1 mt-3 xs2:mt-4 uppercase">CAN HELP</div>
          </h2>
          <div className="text-gray-a2 text-sm-2 xs2:text-lg sm:text-lg md:text-xl md:leading-7-1 w-11/12 mb-6 xs2:mb-10 space-y-4">
            <p>ChainGuardians has had a lot of success over the past few years due to having a loyal, supportive, community and a passion for DeFi Superhero block chain gaming.</p>
            <p>Over this period, we wanted to give back to not just our community, but other communities around the world through the power of Crypto.</p>
          </div>
        </div>
        <div className="lg:col-span-2 bg-black-0e border-dashed w-100 p-6 xs2:p-6 md:p-10 border-2 border-aq-marin text-center">
          <div className="uppercase text-gray-d1 font-bold text-base xs2:text-xl xl:text-3xl">Our impact</div>
          <div className="uppercase text-aq-marin font-bold text-3xl xs2:text-4xl xl:text-5xl mb-4 xs2:mb-5">100ETH</div>
          <div className="w-100 h-px bg-gray-800 mx-auto mt-15"></div>
          <div className="uppercase text-gray-d1 font-bold text-base xs2:text-xl xl:text-3xl mt-4 xs2:mt-5">CHARITIES WORKED WITH</div>
          <div className="uppercase text-aq-marin font-bold text-3xl xs2:text-4xl xl:text-5xl mb-4 xs2:mb-5">4</div>
          <div className="w-100 h-px bg-gray-800 mx-auto mt-15"></div>
          <div className="uppercase text-gray-d1 font-bold text-base xs2:text-xl mt-4 xs2:mt-5 xl:text-3xl">MEMBER CONTRIBUTIONS</div>
          <div className="uppercase text-aq-marin font-bold text-3xl xs2:text-4xl xl:text-5xl">10,000</div>
        </div>
      </section>
    </div>
    </>
  )
}
