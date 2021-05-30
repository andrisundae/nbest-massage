import { MailIcon, MapIcon, PhoneIcon } from "@heroicons/react/outline"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer({children}) {
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
              <h4 className="text-3xl font-semibold text-white">Segera Hubungi Kami!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Siap melayani jasa pijat spa dan massage panggilan ke rumah, kos hotel, villa dan apartemen 24 jam, {' '} 
                <a
                  href="https://api.whatsapp.com/send?phone=6281236583768&text=Hallo, saya ingin tanya tentang massage."
                  className="cursor-pointer text-white hover:text-gray-400"
                >
                  klik di sini
                </a> untuk melakukan booking.
              </h5>
              <hr className="my-6 border-gray-400" />
              <div>
                <h1 className="text-white text-3xl tracking-tight font-extrabold">Telang Spa and Massage</h1>
                <div className="flex flex-col justify-center text-gray-400 mt-5 space-y-2">
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    <span>081236583768 / 089515331688
                      (Telepon dan whatsapp)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MailIcon className="h-4 w-4" aria-hidden="true" />
                    <span>info@talangspamassage.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapIcon className="h-4 w-4" aria-hidden="true" />
                    <span>Jln. Pantai Berawa No. 94, Tibubeneng, Canggu, Kuta Utara Bali</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-gray-300"
                  type="button"
                >
                  <FontAwesomeIcon className="flex" icon={['fab', 'twitter']} />
                </button><button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-gray-300"
                  type="button"
                >
                  <FontAwesomeIcon className="flex" icon={['fab', 'facebook-square']} />
                </button>
                <button
                className="bg-white text-indigo-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 hover:bg-gray-300"
                  type="button"
                >
                  <FontAwesomeIcon className="flex" icon={['fab', 'instagram-square']} />
                </button>
              </div>
            </div>
            <div className="mt-5 w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span
                    className="block uppercase text-white text-sm font-semibold mb-2"
                    >Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                        href="#about-us"
                        >About Us</a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                        href="#services"
                        >Services</a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-white font-semibold block pb-2 text-sm"
                        href="#prices"
                        >Prices</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div
            className="flex flex-wrap items-center md:justify-between justify-center"
          >
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                Copyright © {new Date().getFullYear()} telangspamassage by {' '}
                <a
                  href="https://www.linkedin.com/in/akhmad-andi-nurdiansyah-25a5aa64/"
                  className="text-gray-400 hover:text-white"
                  >
                    andrissundae
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
