import { HiMail as MailIcon } from "@react-icons/all-files/hi/HiMail"
import { HiPhone as PhoneIcon } from "@react-icons/all-files/hi/HiPhone"
import { HiChevronUp as ChevronUpIcon } from "@react-icons/all-files/hi/HiChevronUp"
import { FaMap as MapIcon } from "@react-icons/all-files/fa/FaMap"
import React, { useCallback } from "react"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare"
import { Disclosure, Transition } from "@headlessui/react"

function Footer() {
  const openInstagram = useCallback(() => {
    window.open(
      "https://www.instagram.com/nbestbalimassage/?utm_medium=copy_link",
      "_blank"
    )
  }, [])
  const openFacebook = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=100070654096541",
      "_blank"
    )
  }, [])
  return (
    <footer className="relative bg-indigo-600 pt-8 pb-6">
      <svg
        className="absolute z-20 right-0 left-0 overflow-hidden w-full min-h-19px transform rotate-180 top-0 -mt-1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-50 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
      <div className="container mx-auto px-4 pt-10">
        <div className="flex flex-wrap">
          {/* <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style="enable-background:new 0 0 2560 100;" xml:space="preserve">
                <polygon points="2560 0 2560 100 0 100"></polygon>
              </svg> */}
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">Contact Us</h4>
            <div className="mt-4 py-2 bg-transparent rounded-2xl">
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-lg md:text-2xl flex justify-between w-full px-4 py-2 font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>How to contact us ?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-400">
                        Call us or write us to book your first appointment with
                        the therapist from - NBest bali massage. When you
                        contact us, it helps to have in mind what massage you
                        are interested in, what time you would like and of
                        course where you want to have the massage.
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2" defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg md:text-2xl font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Make your appointment</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-400">
                        <p className="font-bold mb-4 animate-bounce text-red-200">
                          Only in 30 minutes
                        </p>
                        <p>
                          Phone us or just send a contact form to make your
                          appointment, and in 30 minutes, one of our Masseus
                          will be at the door of your room ready to show you the
                          best Massage you have ever tried.
                        </p>
                        <div className="mt-4">
                          <p>Telephone: +6282139702121</p>
                          <p>WhatsApp: +6282139702121</p>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2" defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg md:text-2xl font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>How to book ?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-400">
                        <ol className="list-decimal ml-5">
                          <li>
                            We accept, IDR, US Dollar, Euro, RMB, and any other
                            kind of major international currency.
                          </li>
                          <li>
                            We accept cash and tranf when therapist finish work.
                          </li>
                          <li>
                            Give detail your address your hotel name, hotel
                            phone number, room number and your last name. If the
                            elevator needs a room-card,pls come down to the
                            lobby to pick up the terapisht.
                          </li>
                          <li>
                            You can choose your favorite therapist after getting
                            in contact with us. All of the photos are real by
                            whatsapp.
                          </li>
                        </ol>
                        <p className="mt-5 text-red-200">
                          If you have any further questions, please don't
                          hesitate to contact us.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=6282139702121&text=Hallo NBest, I Want To Book a Massage."
                className="w-full uppercase flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10"
              >
                Book your session now
              </a>
            </div>
            <hr className="my-6 border-gray-400" />
            <div>
              <h1 className="text-white text-2xl md:text-3xl tracking-tight font-extrabold">
                NBest Bali Massage
              </h1>
              <div className="flex flex-col justify-center text-gray-400 mt-5 space-y-2">
                <div className="flex items-center space-x-3">
                  <PhoneIcon
                    className="h-12 w-12 md:h-6 md:w-6"
                    aria-hidden="true"
                  />
                  <span>
                    082139702121 / 089515331688 (Telepon dan whatsapp)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MailIcon
                    className="h-6 w-6 md:h-6 md:w-6"
                    aria-hidden="true"
                  />
                  <span>info@nbestbalimassage.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapIcon
                    className="h-12 w-12 md:h-6 md:w-6"
                    aria-hidden="true"
                  />
                  <span>
                    Jln. Pantai Berawa No. 94, Tibubeneng, Canggu, Kuta Utara
                    Bali
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-gray-300"
                type="button"
              >
                <FaTwitter className="flex" />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-gray-300"
                type="button"
                onClick={openFacebook}
              >
                <FaFacebookSquare className="flex" />
              </button>
              <button
                className="bg-white text-indigo-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-gray-300"
                type="button"
                onClick={openInstagram}
              >
                <FaInstagramSquare className="flex" />
              </button>
            </div>
          </div>
          <div className="mt-5 w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                      href="#about-us"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                      href="#prices"
                    >
                      Prices
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              Copyright © {new Date().getFullYear()} nbestbalimassage by{" "}
              <a
                href="https://www.linkedin.com/in/akhmad-andi-nurdiansyah-25a5aa64/"
                className="text-gray-400 hover:text-white"
              >
                andrissundae
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
