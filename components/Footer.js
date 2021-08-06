import Link from 'next/link'
export default function Footer () {
  return (
    <footer className="bg-black-0f max-w-container py-6 xl:w-18 xl:pb-12">
      <div className="container mx-auto xl:flex xl:flex-row xl:pt-16">
        <Link href="/">
          <a>
            <img src="/images/logo-cg2-2x.png" className="mt-3 mb-5 sm:mt-5 sm:mb-8 h-14 xs2:h-16 xl:h-20 mx-auto" alt="Chain Guardians Logo" title="Chain Guardians Logo" />
          </a>
        </Link>
        <div className="grid grid-cols-4 lg:grid-cols-7 xl:flex-1 xl:ml-24">
          <div className="col-span-2">
            <span className="text-aq-marin font-bold text-lg xs2:text-xl lg:text-2xl">Sitemap</span>
            <ul className="mt-4 xl:mt-8 text-gray-a2 text-sm xs2:text-lg">
              <li>
                <Link href="/">
                  <a className="hover:text-blue-300 transition duration-200">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:text-blue-300 transition duration-200">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:text-blue-300 transition duration-200">About</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:text-blue-300 transition duration-200">Charities</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <span className="text-aq-marin font-bold text-lg xs2:text-xl lg:text-2xl">Info</span>
            <ul className="mt-4 xl:mt-8 text-gray-a2 text-sm xs2:text-lg">
              <li>
                <Link href="/">
                  <a className="hover:text-blue-300 transition duration-200">ChainGuardians</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:text-blue-300 transition duration-200">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:text-blue-300 transition duration-200">Donations</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block col-span-2">
            <span className="text-aq-marin font-bold text-lg xs2:text-xl lg:text-2xl">Contact</span>
            <ul className="mt-4 xl:mt-8 text-gray-a2 text-sm xs2:text-lg">
              <li className="hover:text-blue-300 transition duration-200">
                <Link href="mailto:info@charity.chainguardians.io">
                  <a>info@charity.chainguardians.io</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center xl:text-right text-gray-a2 text-xs xs2:text-tiny sm:text-base w-60 xs2:w-80 mx-auto mt-9 sm:mt-14">Copyright 2021 powered by the ChainGuardians eco-system</div>
      </div>
    </footer>
  )
}
