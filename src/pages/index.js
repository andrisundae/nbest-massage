import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"

import { HiPhone } from "@react-icons/all-files/hi/HiPhone"
import { HiMail } from "@react-icons/all-files/hi/HiMail"
import { FaMap } from "@react-icons/all-files/fa/FaMap"
import { FcClock } from "@react-icons/all-files/fc/FcClock"
import { FcShipped } from "@react-icons/all-files/fc/FcShipped"
import { FcBusinesswoman } from "@react-icons/all-files/fc/FcBusinesswoman"
import { FcApproval } from "@react-icons/all-files/fc/FcApproval"
import { FcDiploma2 } from "@react-icons/all-files/fc/FcDiploma2"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // autoplaySpeed: 2000,
  // cssEase: "linear",
}

<!-- Google tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-245316981-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-245316981-1');
</script>

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

const whyChooseUs = [
  {
    title: "Professional Therapist",
    desc: "We provide experienced & professional therapists in their fields.",
    icon: <FcDiploma2 size={80} />,
  },
  {
    title: "Young Therapist",
    desc: "We have young therapists who are trained & experienced.",
    icon: <FcBusinesswoman size={80} />,
  },
  {
    title: "Free Transport",
    desc: "The price we offer in the massage package includes transportation",
    icon: <FcShipped size={80} />,
  },
  {
    title: "24 Hours Service",
    desc:
      "We open a 24-hour on call massage service for the Denpasar & Badung area of ​​​​Bali.",
    icon: <FcClock size={80} />,
  },
  {
    title: "Guaranteed Cleanliness",
    desc:
      "Massage cloths are guaranteed to be clean, fragrant and not used by people.",
    icon: <FcApproval size={80} />,
  },
]

const messages = [
  {
    comment:
      "Nbest Bali Massage provides good & professional service with friendly therapists. The on-call massage service is also open 24 hours so it can help if I'm tired after work.",
    name: "Rendi",
  },
  {
    comment:
      "The first time I tried a call massage service for the SPA the results were satisfactory, the therapist was very professional, could come directly to my location, it was very easy for those who were lazy to leave the house..",
    name: "Putri",
  },
  {
    comment:
      "Nbest Bali Massage provides good & professional service with friendly therapists. The on-call massage service is also open 24 hours so it can help if I'm tired after work.",
    name: "Albert",
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
              href="tel:+6282139702121"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-3 lg:mt-0 lg:ml-3">
            <a
              href="https://api.whatsapp.com/send?phone=6282139702121&text=Hallo NBest, I Want To Book a Massage."
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
                  <FaMap className="h-6 w-6" aria-hidden="true" />
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
                  <HiMail className="h-6 w-6" aria-hidden="true" />
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
                  <HiPhone className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-12 text-lg leading-4 font-medium text-gray-900">
                  Telephone and whatsapp
                </p>
              </dt>
              <dd className="mt-2 md:ml-12 text-base text-gray-800 md:text-gray-500">
                082139702121 / 089515331688
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
                className="w-full rounded-t-lg opacity-90"
                src="../images/relaxing-spa-1.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Certificate"
              />
              <div className="px-8 py-5 text-3xl font-bold text-center">
                Nbest-Silver Reguler one therapist 
              </div>
              <div className="border-0 border-grey-light border-t border-solid text-sm">
                <div className="text-xl text-center border-0 border-grey-light border-b border-solid py-4">
                  60 minutes 299K
                  90 minutes 499K
                  120 minutes 599K
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
            <div className="pb-8 flex-1 lg:flex-initial lg:w-1/3 rounded-lg bg-gradient-to-r from-yellow-300 to-white mt-4 sm:-mt-4 sm:-mb-4 shadow-lg z-30 flex flex-col">
              <StaticImage
                className="w-full rounded-t-lg opacity-90"
                src="../images/relaxing-spa-3.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Certificate"
              />
              <div className="w-full px-8 py-5 text-3xl font-bold text-center">
                Nbest-Gold Duo Terapist 
              </div>
              <div className="w-full border-0 border-grey-light border-t border-solid text-sm">
                <div className="text-xl text-center border-0 border-grey-light border-b border-solid py-4">
                  <p>Couple message :</p>
                  <p>60 minutes 599K       
                  90 minutes 899K
                  120 minutes 1199K</p>
                  
                  <p>4 Hand message :</p>
                  <p>60 minutes 599K       
                  90 minutes 899K
                  120 minutes 1199K</p>
                </div>
              </div>
              <div className="w-full text-center px-8 mt-8">
                <span className="text-base text-indigo-500">IDR</span>{" "}
                <span className="text-4xl text-indigo-500 font-bold">300K</span>
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
                className="w-full rounded-t-lg opacity-90"
                src="../images/relaxing-spa-2.jpg"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Certificate"
              />
              <div className="px-8 py-5 text-3xl font-bold text-center">
                Nbest-Platinum special request message
              </div>
              <div className="border-0 border-grey-light border-t border-solid text-sm">
                <div className="text-xl text-center border-0 border-grey-light border-b border-solid py-4">
                  cellulite massage 60 minutes 400K       
                  Hot Stone massage 90 minutes 899K
                </div>
              </div>
              <div className="w-full text-center px-8 mt-8">
                <span className="text-base text-indigo-500">IDR</span>{" "}
                <span className="text-4xl text-indigo-500 font-bold">400K</span>
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
    <section
      id="question"
      className="container bg-section-choose-us bg-no-repeat bg-fixed bg-cover px-8 py-10 text-base mt-8"
    >
      <h1 className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Why choose us ?
      </h1>
      <div className="p-5 w-full flex flex-wrap mt-3">
        {whyChooseUs.map(row => (
          <div key={row.title} className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="flex flex-row items-center">
              <div className="relative h-15 w-15">{row.icon}</div>
              <div className="ml-3">
                <h3 className="text-2xl text-gray-500">{row.title}</h3>
                <span>{row.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section id="comment" className="container px-8 py-10 text-base mt-8">
      <h1 className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        What are they saying
      </h1>
      <Slider className="my-10" {...settings}>
        {messages.map(row => {
          return (
            <div
              style={{ height: 400 }}
              className="h-15 items-center flex-1 text-center p-5"
              key={row.name}
            >
              <p className="font-mono italic text-gray-500">{row.comment}</p>
              <h5 className="mt-10 text-gray-400">{row.name}</h5>
            </div>
          )
        })}
      </Slider>
    </section>
    <section id="theraphis" className="container px-8 py-10 text-base mt-8">
      <h1 className="text-center text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Therapist by request in whatsapp
      </h1>
    </section>
  </Layout>
)

export default IndexPage
