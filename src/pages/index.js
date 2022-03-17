import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PhoneIcon, MailIcon, MapIcon } from "@heroicons/react/outline"

import Layout from "../components/layout"
import Seo from "../components/seo"

const layanan = [
  {
    title: "Full Body Massage",
    desc:
      "Relaxing all of your muscles and enhance your blood circulations. Treats all the pain an makes you more healthy. Pamper you body with this treatment and take comfortness all day long at your palace!",
    icon: (
      <StaticImage
        className="h-15 w-15"
        src="../images/svg/full-body-massage.svg"
        height={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Full Body Massage"
        placeholder="blurred"
      />
    ),
  },
  {
    title: "Balinese Massage",
    desc:
      "Combined with gentle stretches, acupressure and aromatherapy to give you complete relaxation. Improve your well-being and stress relieving.",
    icon: (
      <StaticImage
        className="h-15 w-15"
        src="../images/svg/balinese-massage.svg"
        height={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Balinese Massage"
        placeholder="blurred"
      />
    ),
  },
  {
    title: "Javanese Massage",
    desc:
      "Feel the experience Javanese Massage with more intense pressure to relieve muscle and joint pain. Bringing back your energized body.",
    icon: (
      <StaticImage
        className="h-15 w-15"
        src="../images/svg/javanese-massage.svg"
        height={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Javanese Massage"
        placeholder="blurred"
      />
    ),
  },
  {
    title: "VIP Reflexy Massage",
    desc:
      "A combination between traditional massage with reflexy massage focusing on pressure on the spots of body blood circulation which is located on body and foot.",
    icon: (
      <StaticImage
        className="h-15 w-15"
        src="../images/svg/vip-massage.svg"
        height={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="VIP Reflexy Massage"
        placeholder="blurred"
      />
    ),
  },
]

const therapist = [
  {
    id: 1,
    name: "Dinda",
    age: 31,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Dinda.jpeg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Dinda 21th"
        height={450}
        // width={400}
      />
    ),
  },
  {
    id: 3,
    name: "Maria",
    age: 32,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Maria.jpeg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Maria 32th"
        height={450}
      />
    ),
  },
  {
    id: 8,
    name: "Lisa",
    age: 33,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Lisa.jpg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Lisa 33th"
        height={450}
      />
    ),
  },
  {
    id: 2,
    name: "Ina",
    age: 35,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Ina.jpeg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ina 35th"
        height={450}
      />
    ),
  },
  {
    id: 4,
    name: "Caca",
    age: 22,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Ida.jpeg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Caca 22th"
        height={450}
      />
    ),
  },
  {
    id: 5,
    name: "Ida",
    age: 20,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Caca.jpeg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Ida 20th"
        height={450}
      />
    ),
  },
  {
    id: 6,
    name: "Dhany",
    age: 36,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Dani.jpeg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Dhany 36th"
        height={450}
      />
    ),
  },
  {
    id: 7,
    name: "Dedy",
    age: 32,
    photo: (
      <StaticImage
        className="w-full rounded-lg"
        src={`../images/Dedi.jpeg`}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Dedy 32th"
        height={450}
      />
    ),
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section
      id="home"
      className="container bg-section-main bg-center bg-no-repeat bg-cover h-500px pt-8 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-28 px-8"
    >
      <div className="sm:text-center md:text-left w-full">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
          <p className="block text-indigo-600">Nbest Bali Massage</p>
          <p className="block">Home Service</p>
        </h1>
        <div className="mt-3 text-base text-gray-800 md:text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          <p>
            NBest Bali Massage provides home service to your palace with massage
            area in Bali
            <span className="font-bold">
              {" "}
              (Canggu, Seminyak, Legian, Kuta, Jimbaran, Nusa Dua, Kerobokan,
              Sanur etc).
            </span>
          </p>
        </div>
        <div className="mt-5 sm:mt-8 lg:flex lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="tel:+6281236583768"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-3 lg:mt-0 lg:ml-3">
            <a
              href="https://api.whatsapp.com/send?phone=6281236583768&text=Hallo NBest, I Want To Book a Massage."
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Chat Us on Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      id="about-us"
      className="container bg-section-aboutus bg-center bg-no-repeat bg-cover bg-fixed px-8 py-10 text-base mt-8"
    >
      <div className="mx-auto py-8 text-center">
        <h1 className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          About Us
        </h1>
        <div className="text-gray-800 md:text-gray-500 mt-3 sm:mt-5 sm:text-lg md:mt-5 md:text-xl max-w-3xl lg:mx-auto">
          <p>
            <span className="font-bold">NBest bali massage</span> will give you
            a completely relaxing full body massage will make you feel fantastic
            . No matter what time of day or night you receive a message.
          </p>
          <div className="mt-3">
            We show you about real massage feels like, Choose Our therapist
            women/ man and they all completely with certificate skill book us
            will give you the best massage. We will come to your home or hotel
            room so that it is convenient and private. You no need to have to go
            to massage parlor or a spa to get the relaxation.
            <p className="mt-3 font-bold">So, Make your day special.</p>
            <div className="mt-5">
              <h3 className="text-3xl my-3 text-gray-900">Certificate</h3>
              <StaticImage
                className="w-full md:w-1/2 rounded-lg opacity-80"
                src="../images/sertifikat.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Certificate"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-x-20 shadow-lg rounded-lg border px-5 py-5">
        <div className="relative">
          <h1 className="md:text-center text-1xl font-extrabold text-gray-900 sm:text-2xl md:text-3xl mb-5">
            Contact
          </h1>
          <div className="mt-8 flex flex-col justify-center space-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <MapIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-12 text-lg leading-4 font-medium text-gray-900">
                  Address
                </p>
              </dt>
              <dd className="mt-2 md:ml-12 text-base text-gray-800 md:text-gray-500">
                Jln. Pantai Berawa No. 94, Tibubeneng, Canggu, Kuta Utara Bali
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <MailIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-12 text-lg leading-4 font-medium text-gray-900">
                  Email
                </p>
              </dt>
              <dd className="mt-2 md:ml-12 text-base text-gray-800 md:text-gray-500">
                info@nbestbalimassage.com
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-12 text-lg leading-4 font-medium text-gray-900">
                  Telephone and whatsapp
                </p>
              </dt>
              <dd className="mt-2 md:ml-12 text-base text-gray-800 md:text-gray-500">
                081236583768 / 089515331688
              </dd>
            </div>
          </div>
        </div>
        <div className="relative">
          <h1 className="md:text-center text-1xl font-extrabold text-gray-900 sm:text-2xl md:text-3xl mb-5">
            Location
          </h1>
          <div className="mt-5 text-xl text-gray-900">
            Only home service, so please contact Us!
          </div>
        </div>
      </div>
    </section>
    <section
      id="services"
      className="container bg-section-service bg-center bg-no-repeat bg-fixed bg-cover px-8 py-10 text-base mt-8"
    >
      <div className="mx-auto text-center py-8">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Our Services
        </h1>
        <div className="text-gray-800 mt-3 sm:mt-5 sm:text-lg md:mt-5 md:text-xl max-w-3xl lg:mx-auto">
          <p>
            Our services are aimed only at customers satisfaction. We focus on
            complete customer satisfaction to ensure repeat business. Our staff
            members are unique and highly skilled. They are equipped with the
            needed resources to help them satisfy you and give you an experience
            that is memorable.
          </p>
        </div>
      </div>
      <div className="mt-20 space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-16">
        {layanan.map((item, key) => {
          return (
            <div
              key={`${item.title}_${key}`}
              className="relative min-h-40 py-8 px-4 shadow-lg rounded-lg border bg-white text-center text-base transform scale-100 hover:scale-110 hover:bg-gray-100"
            >
              <dt>
                {item.icon}
                <p className="mt-3 text-lg leading-4 font-medium text-gray-900">
                  {item.title}
                </p>
              </dt>
              <dd className="mt-5 text-gray-500">{item.desc}</dd>
            </div>
          )
        })}
      </div>
    </section>
    <section
      id="prices"
      className="container px-8 py-10 text-base mt-8 bg-white"
    >
      <div className="mx-auto text-center py-16 bg-clip-border border-4 border-indigo-300 border-dashed lg:w-10/12">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Prices and Treatment
        </h1>
        <div className="text-gray-500 mt-3 sm:mt-5 sm:text-lg md:mt-5 md:text-xl max-w-3xl lg:mx-auto">
          <p>One therapist for one customer.</p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
            <div className="pb-8 shadow-lg bg-gradient-to-r from-gray-300 to-white sm:flex-1 lg:flex-initial lg:w-1/3 rounded-lg rounded-tr-none rounded-br-none mt-4 flex flex-col">
              <StaticImage
                className="w-full rounded-lg opacity-80"
                src="../images/price-1.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Certificate"
              />
              <div className="px-8 py-5 text-3xl font-bold text-center">
                Silver
              </div>
              <div className="border-0 border-grey-light border-t border-solid text-sm">
                <div className="text-xl text-center border-0 border-grey-light border-b border-solid py-4">
                  60 minutes
                </div>
              </div>
              <div className="w-full text-center px-8 mt-8">
                <span className="text-base text-indigo-500">IDR</span>{" "}
                <span className="text-4xl text-indigo-500 font-bold">200K</span>
              </div>
              <div className="mt-3 text-base text-gray-900">
                <p>Packages :</p>
                <p>
                  Full body massage, balinese massage, javanese massage, VIP
                  reflexy massage
                </p>
              </div>
            </div>
            <div className="pb-8 flex-1 lg:flex-initial lg:w-1/3 rounded-lg bg-gradient-to-r from-yellow-300 to-white mt-4 sm:-mt-4 sm:-mb-4 shadow-lg z-30 flex flex-col">
              <StaticImage
                className="w-full rounded-lg opacity-80"
                src="../images/price-2.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Certificate"
              />
              <div className="w-full px-8 py-5 text-3xl font-bold text-center">
                Gold
              </div>
              <div className="w-full border-0 border-grey-light border-t border-solid text-sm">
                <div className="text-xl text-center border-0 border-grey-light border-b border-solid py-4">
                  90 minutes
                </div>
              </div>
              <div className="w-full text-center px-8 mt-8">
                <span className="text-base text-indigo-500">IDR</span>{" "}
                <span className="text-4xl text-indigo-500 font-bold">250K</span>
              </div>
              <div className="mt-3 text-base text-gray-900">
                <p>Packages :</p>
                <p>
                Full body massage, balinese massage, javanese massage, VIP
                reflexy massage
                </p>
              </div>
            </div>
            <div className="pb-8 shadow-lg flex-1 lg:flex-initial lg:w-1/3 rounded-lg rounded-l-none bg-gradient-to-r from-gray-500 to-white mt-4 flex flex-col">
            <StaticImage
                className="w-full rounded-lg opacity-80"
                src="../images/price-3.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Certificate"
              />
              <div className="px-8 py-5 text-3xl font-bold text-center">
                Platinum
              </div>
              <div className="border-0 border-grey-light border-t border-solid text-sm">
                <div className="text-xl text-center border-0 border-grey-light border-b border-solid py-4">
                  120 minutes
                </div>
              </div>
              <div className="w-full text-center px-8 mt-8">
                <span className="text-base text-indigo-500">IDR</span>{" "}
                <span className="text-4xl text-indigo-500 font-bold">350K</span>
              </div>
              <div className="mt-3 text-base text-gray-900">
                <p>Packages :</p>
                <p>
                Full body massage, balinese massage, javanese massage, VIP
                reflexy massage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="theraphis" className="container px-8 py-10 text-base mt-8">
      <h1 className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Therapist
      </h1>
      <div className="mt-10 grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {therapist.map(({ id, photo, name, age }) => {
          return (
            <div
              key={id}
              className="relative rounded-lg shadow-lg overflow-hidden bg-gray-300"
            >
              {photo}
              <div className="text-center w-5/12 absolute left-0 bottom-0 bg-gray-300 py-2 rounded-tr-lg">
                <h3 className="text-lg text-gray-500 self-center">
                  {name} {`${age}th`}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  </Layout>
)

export default IndexPage
