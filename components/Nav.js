import Link from 'next/link'
export default function Nav ({isOpen, toggle}) {

  return (
    <>
    <div className={ isOpen ? 'absolute w-screen h-screen p-0 m-0 md:hidden z-50 transition duration-300 overflow-hidden' : 'hidden'} id="mobile-menu">
    <div className="h-1 bg-aq-marin max-w-container mx-auto"></div>
      <div className="px-10 bg-black-0e pt-10 pb-10 space-y-1 pb-16">
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
      <div className="h-1 bg-aq-marin max-w-container mx-auto"></div>
    </div>
    </>
  )
}
