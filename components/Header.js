import Link from 'next/link'
import Nav from '../components/Nav.js'
import React, {useState, useEffect} from 'react'

export default function Header () {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <div className="h-1 bg-gradient-to-br from-pink-400 to-purple-700 max-w-container mx-auto"></div>
    <header className="h-14 xs2:h-16 md:h-48 align-middle md:pt-14 mb-8 md:mb-15 z-40 relative">
      <div className="container flex flex-row">
        <Link href="/">
          <a>
            <img src="/images/logo-cg-2x.png" className="transform hover:scale-105 transition duration-200 mt-5 xs2:mt-8 md:mt-0 mb-4 h-12 xs2:h-14 md:h-20" alt="Chain Guardians Logo" title="Chain Guardians Logo" />
          </a>
        </Link>
        <div className="hidden flex flex-row md:block text-right w-full" id="menu">
          <div className="ml-auto text-center h-5 pt-10 uppercase w-5/12 text-aq-marin font-bold text-md grid grid-cols-3 divide-x divide-gray-500">
            <div className="hover:text-blue-300 transition duration-200"><Link href="/"><a className="hover:shadow-xl">PROJECTS</a></Link></div>
            <div className="hover:text-blue-300 transition duration-200"><Link href="/"><a className="hover:shadow-xl">about</a></Link></div>
            <div className="hover:text-blue-300 transition duration-200"><Link href="/"><a className="hover:shadow-xl">PROJECTS</a></Link></div>
          </div>
        </div>

        <div className="md:hidden flex flex-row justify-end w-full mt-6 xs2:mt-8 md:mt-0 mb-4" id="button-menu">
          <div className="-mr-2">
            <button type="button" onClick={toggle} className="mobile-menu-button inline-flex items-end justify-center p-2 text-aq-marin hover:text-gray-400" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="false">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>
          </div>
        </div>


      </div>

    </header>
    <Nav isOpen={isOpen} toggle={toggle}/>
    </>
  )
}
