const Home = () => (
  <div>
    <section className="overflow-hidden bg-gray-100 pb-64">
      <nav className="relative bg-gray-900 px-6 pt-4 sm:px-12">
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
          <a className="inline-block" href="#">
            <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
          </a>
        </div>
        <div className="3xl:hidden pb-4">
          <button className="navbar-burger ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-white hover:bg-gray-200">
            <svg width={20} height={9} viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.75" y1="1.25" x2="19.25" y2="1.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0.75" y1="8.25" x2="13.25" y2="8.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="3xl:block hidden">
          <div className="pb-2">
            <a className="mr-6 inline-block text-xs text-gray-400 hover:text-gray-300" href="#">
              Account
            </a>
            <a className="inline-block text-xs text-gray-400 hover:text-gray-300" href="#">
              Saved
            </a>
          </div>
          <div>
            <div className="relative flex">
              <div className="mr-auto w-5/12">
                <div className="border-t border-gray-100 border-opacity-10 pt-5 pr-24">
                  <ul className="flex items-center justify-end">
                    <li className="mr-6">
                      <a className="inline-flex items-center pb-5 pr-8 text-sm text-white hover:text-gray-200" href="#">
                        <span className="mr-4">Collection</span>
                        <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10 2L6 6L2 2"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <div className="border-b-4 border-lime-900" />
                    </li>
                    <li className="mr-20 pb-6">
                      <a className="inline-block text-sm text-white hover:text-gray-200" href="#">
                        Projects
                      </a>
                    </li>
                    <li className="pb-6">
                      <a className="inline-block text-sm text-white hover:text-gray-200" href="#">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="3xl:w-3/12 3xl:mr-12 mr-4 w-auto">
                <div className="3xl:pl-24 border-t border-gray-100 border-opacity-10 pt-5 2xl:pl-10">
                  <div style={{ height: '1px' }} />
                  <ul className="flex items-center">
                    <li className="mr-12 pb-6">
                      <a className="inline-flex items-center text-sm text-white hover:text-gray-200" href="#">
                        <span className="mr-4">How to Start</span>
                        <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10 2L6 6L2 2"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="square"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="pb-6">
                      <a className="inline-block text-sm text-white hover:text-gray-200" href="#">
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-auto flex-shrink-0">
                <div className="-mt-4 flex items-center">
                  <a
                    className="mr-12 inline-block w-full rounded border border-white px-7 py-4 text-center font-medium text-white hover:border-gray-200 hover:text-gray-200 sm:w-auto"
                    href="#"
                  >
                    Get Started
                  </a>
                  <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white hover:bg-gray-200">
                    <svg width={20} height={9} viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line
                        x1="0.75"
                        y1="1.25"
                        x2="19.25"
                        y2="1.25"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="0.75"
                        y1="8.25"
                        x2="13.25"
                        y2="8.25"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-wrap">
        <div className="relative order-last w-full lg:order-first lg:w-2/5 xl:w-1/2">
          <img
            className="h-192 block w-full object-cover"
            src="wrexa-assets/images/people-havinf-fun-placeholder.png"
            alt=""
          />
          <div className="h-26 bg-white" />
          <div className="absolute bottom-0 right-0 -mb-32 w-full px-4 sm:mr-6 sm:w-auto xl:mr-24">
            <div className="pb-18 mx-auto max-w-sm rounded-xl bg-white px-6 pt-5 shadow">
              <div className="mb-16 flex items-center justify-between">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded bg-indigo-500 text-white hover:bg-indigo-600"
                  role="button"
                >
                  <svg width={10} height={10} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3.60156" width="2.4" height="10.4" rx={1} fill="currentColor" />
                    <rect
                      x="9.60156"
                      y={4}
                      width="2.4"
                      height="9.6"
                      rx={1}
                      transform="rotate(90 9.60156 4)"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <svg width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={17} cy={18} r="16.5" stroke="black" strokeOpacity="0.12" />
                  <path
                    d="M16.8645 1.27174C26.1782 1.27174 33.7285 8.82201 33.7285 18.1357"
                    stroke="#5B2FE2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <img className="mx-auto mb-12 block" src="wrexa-assets/images/green-chair.png" alt="" />
              <div className="flex items-center justify-center">
                <a className="inline-block" href="#">
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 10L1 6L5 2"
                      stroke="#232126"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a className="mx-14 block text-center" href="#">
                  <h3 className="text-2xl">Kirk Oak</h3>
                  <span className="text-xs text-gray-400">New in</span>
                </a>
                <a className="inline-block" href="#">
                  <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 2L6 6L2 10"
                      stroke="#232126"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full bg-gray-800 lg:w-3/5 xl:w-1/2">
          <div className="px-4 pt-32 pb-16">
            <div className="mx-auto max-w-lg">
              <div className="mb-32">
                <h1 className="font-heading mb-10 text-5xl text-white sm:text-6xl">
                  Find your editor and create your home.
                </h1>
                <a className="inline-flex items-center text-lg text-white" href="#">
                  <span className="mr-6">Exploring the shift of today</span>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <a
                className="duration-250 mb-40 inline-block w-full rounded bg-indigo-500 px-7 py-4 text-center font-medium text-white transition hover:bg-indigo-600 sm:w-auto"
                href="#"
              >
                Discover Now
              </a>
              <div>
                <a className="mr-24 inline-block text-sm text-gray-500 hover:text-gray-400" href="#">
                  Let’s talk
                </a>
                <a className="inline-block text-sm text-gray-500 hover:text-gray-400" href="#">
                  Scroll for more
                </a>
              </div>
            </div>
          </div>
          <div className="h-26 w-26 absolute bottom-0 right-0 hidden bg-white sm:block">
            <div className="absolute bottom-0 left-1/2 mb-8 translate-x-1/2 transform">
              <div className="h-26 w-px bg-white" />
              <div className="h-18 w-px bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 hidden w-5/6 sm:max-w-xs">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative flex h-full w-full flex-col overflow-y-auto bg-gray-200 pt-12 pb-40">
          <div className="px-12">
            <div>
              <a className="mb-52 inline-block" href="#">
                <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
              </a>
              <button type="button" aria-label="Close" />
            </div>
            <ul>
              <li className="mb-6">
                <a className="flex items-center justify-between" href="#">
                  <span>Collection</span>
                  <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 2L6 6L2 2"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block" href="#">
                  Projects
                </a>
              </li>
              <li className="mb-16">
                <a className="inline-block" href="#">
                  About
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block" href="#">
                  How to Start
                </a>
              </li>
              <li>
                <a className="inline-block" href="#">
                  Design
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 w-full">
          <a className="flex items-center bg-white pt-4 pb-5 pl-6 pr-4" href="#">
            <div className="relative mr-4">
              <img className="h-12 w-12 rounded-full" src="wrexa-assets/images/avatar2.png" alt="" />
              <div className="absolute bottom-0 left-0 -ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-800 text-xs text-white">
                1
              </div>
            </div>
            <div className="mr-auto pr-5">
              <h4 className="text-xs text-gray-400">Account</h4>
              <span>matloay</span>
            </div>
            <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2L6 6L2 2"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
)
export default Home
