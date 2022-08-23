import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Popover, Transition } from "@headlessui/react"
import { HiMenu } from "@react-icons/all-files/hi/HiMenu"
import { HiX } from "@react-icons/all-files/hi/HiX"
import { StaticImage } from "gatsby-plugin-image"
import useSticky from "../../hooks/useSticky"

const navigation = [
  { name: "About Us", href: "#about-us" },
  { name: "Services", href: "#services" },
  { name: "Prices", href: "#prices" },
]

const Header = ({ siteTitle }) => {
  const { isSticky, element } = useSticky()
  const buttonRef = React.useRef()
  const handleClickPanel = () => {
    buttonRef.current?.click()
  }
  return (
    <header
      className={`bg-white w-full transition duration-200 ease-in-out ${
        isSticky
          ? "fixed -top-24 animated z-50 shadow-lg transform translate-y-24 "
          : "relative top-0"
      }`}
    >
      <Popover>
        {({ open }) => (
          <>
            <div className="relative py-2 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between lg:justify-start"
                aria-label="Global"
                ref={element}
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">{siteTitle}</span>
                      <div className="flex justify-center items-center">
                        <StaticImage
                          className="rounded-full h-12 w-12 ring-2 ring-indigo-300"
                          src="../../images/logo.png"
                          quality={95}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="Logo"
                        />
                        <h3 className="ml-2 text-indigo-500 tracking-tighter font-bold text-xl">
                          NBest Bali Masssage
                        </h3>
                      </div>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <HiMenu className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 mx-auto">
                  <a
                    href="#home"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Home
                  </a>
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                // static
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                onClick={handleClickPanel}
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <StaticImage
                        className="rounded-full h-12 w-12 ring-2 ring-indigo-300"
                        src="../../images/logo.png"
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        ref={buttonRef}
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        <HiX className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#home"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Home
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
