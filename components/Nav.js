import Link from 'next/link'
export default function Nav ({isOpen, toggle}) {

  return (
    <>
    <div className={ isOpen ? 'right-0 fixed p-0 h-full m-0 md:hidden z-70 transition duration-300 overflow-hidden' : 'hidden'} id="mobile-menu">
      <div className="pl-14 pr-24 bg-black-0e h-full pt-10 pb-10 space-y-1 pb-16">
        <div className="mb-16">
          <ul className="mt-4 xl:mt-8 text-gray-a2 text-md xs:text-lg xs2:text-lg">
            <li className="mb-2">
              <Link href="/">
                <a className="hover:text-blue-300 leading-5 transition duration-200">Home</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <a className="hover:text-blue-300 transition duration-200">Projects</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <a className="hover:text-blue-300 transition duration-200">About</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <a className="hover:text-blue-300 transition duration-200">Charities</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-aq-marin font-bold text-lg xs2:text-xl lg:text-2xl">Info</div>
        <div>
          <ul className="xl:mt-8 text-gray-a2 text-sm xs2:text-lg">
            <li className="mb-2">
              <Link href="/">
                <a className="hover:text-blue-300 transition duration-200">ChainGuardians</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <a className="hover:text-blue-300 transition duration-200">Blog</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/">
                <a className="hover:text-blue-300 transition duration-200">Donations</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden fixed top-1 right-7 flex flex-row justify-end w-full mt-6 xs2:mt-8 md:mt-0 mb-4" id="button-menu">
        <div className="-mr-2">
          <button type="button" onClick={toggle} className="mobile-menu-button inline-flex items-end justify-center p-2 text-aq-marin" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Close main menu</span>

            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="false">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        </div>
      </div>
    </div>
    </>
  )
}
