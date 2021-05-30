import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PhoneIcon, MailIcon, MapIcon, TrendingDownIcon, ViewListIcon, ViewGridAddIcon, UsersIcon} from '@heroicons/react/outline'

import Layout from "../components/layout"
import Seo from "../components/seo"
import GoogleMaps from "../components/googleMaps"

const layanan = [
  {
    title: 'Pijat Capek',
    desc: 'Layanan pijat capek panggilan tenaga profesional dan terpercaya. Pijat ini bisa mengembalikan kebugaran tubuh anda. Menu pijat capek ini bisa menjadi pilihan yang tepat untuk anda yang memang sedang merasa capek atau lelah akibat aktivitas seharian penuh.',
    icon: TrendingDownIcon
  },
  {
    title: 'Fullbody Massage',
    desc: 'Pilihan menu fullbody massage yang lebih nyaman. Kami merupakan layanan jasa spa pijat massage panggilan yang melayani berbagai macam jenis pijat termasuk jenis layanan pijat fullbody massage ini yang sangat bermanfaat sekali untuk merileksasikan tubuh anda.',
    icon: ViewListIcon
  },
  {
    title: 'Pijat Reflexology',
    desc: 'Pijat refleksi memberi banyak manfaat bagi tubuh. salah satu manfaat dari pijat refleksi adalah memperlancar sirkulasi darah pada tubuh anda saat mengalami penyumbatan darah. Setelah pijat dengan teknik pijat refleksi maka efeknya akan terasa saat itu juga.',
    icon: ViewGridAddIcon
  },
  {
    title: 'Pijat Totok Aura Wajah',
    desc: 'Pijat totok aura wajah biasanya digunakan untuk menghilangkan sakit di kepala, sekitar mata dan wajah. Untuk menyegarkan kembali pikiran dan menghadirkan mood booster setelah pijat totok aura wajah dilakukan.',
    icon: UsersIcon
  },
]

const threatmentAfterPackage = [
  {
    name: 'Lulur',
    price: 'Rp 50.000,00'
  },
  {
    name: 'Kerokan',
    price: 'Rp 50.000,00'
  },
  {
    name: 'Totok wajah',
    price: 'Rp 50.000,00'
  },
  {
    name: 'Pijat refleksi',
    price: 'Rp 50.000,00'
  }
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section id="home" className="container pt-8 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-28 px-8 md:grid md:grid-cols-2 md:gap-x-2">
        <div className="sm:text-center md:text-left">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
            <p className="block">Telang Spa and Massage</p>
            <p className="block text-indigo-600">Layanan 24 jam</p>
          </h1>
          <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            <span className="font-bold">Layanan jasa pijat (massage) dan spa panggilan 24 jam.</span>
            <p>
            Melayani jasa pijat ke rumah, kos, hotel dan apartemen. 
            Kami menyediakan jasa dengan tenaga terapis pria dan terapis wanita yang berpengalaman dan profesional area
            <span className="font-bold"> Badung, Denpasar, Sanur, Jimbaran dan Nusa Dua.</span>
            </p>
          </div>
        <div className="mt-5 sm:mt-8 lg:flex lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="tel:+6281236583768"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Hubungi Kami
            </a>
          </div>
          <div className="mt-3 lg:mt-0 lg:ml-3">
            <a
              href="https://api.whatsapp.com/send?phone=6281236583768&text=Hallo, saya ingin tanya tentang massage."
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Chat Kami di Whatsapp
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-0 xl:mt-0">
        <StaticImage
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="../images/spa-2.jpg"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </div>
    </section>
    <section id="about-us" className="container bg-white px-8 py-10 text-base mt-8">
      <div className="mx-auto text-center py-8">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          About Us
        </h1>
        <div className="text-gray-500 mt-3 sm:mt-5 sm:text-lg md:mt-5 md:text-xl max-w-3xl lg:mx-auto">
          <p>
            <span className="font-bold text-indigo-600">Telang Spa and Massage </span> 
            adalah Layanan Jasa pijat spa massage panggilan dengan tenaga terapis pria dan tenaga terapis wanita berpengalaman dan profesional. 
          </p>
          <p>
            Kami melayani jasa pijat massage spa panggilan ke rumah, kos, hotel, villa dan apartemen 24 jam area <span className="font-bold"> Badung, Denpasar, Sanur, Jimbaran dan Nusa Dua.</span>
          </p>
        </div>
      </div>
      <div className="mt-10 bg-gray-100 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-x-20 shadow-lg rounded-lg border px-5 py-5">
        <div className="relative">
          <h1 className="md:text-center text-1xl font-extrabold text-gray-900 sm:text-2xl md:text-3xl mb-5">
            Kontak
          </h1>
          <div className="mt-8 flex flex-col justify-center space-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <MapIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-12 text-lg leading-4 font-medium text-gray-900">Alamat</p>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-500">
                Jln. Pantai Berawa No. 94, Tibubeneng, Canggu, Kuta Utara Bali
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <MailIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-12 text-lg leading-4 font-medium text-gray-900">Email</p>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-500">info@talangspamassage.com</dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-8 rounded-md bg-indigo-500 text-white">
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-12 text-lg leading-4 font-medium text-gray-900">Telepon dan whatsapp</p>
              </dt>
              <dd className="mt-2 ml-12 text-base text-gray-500">081236583768 / 089515331688</dd>
            </div>
          </div>
        </div>
        <div className="relative">
          <h1 className="md:text-center text-1xl font-extrabold text-gray-900 sm:text-2xl md:text-3xl mb-5">
            Lokasi
          </h1>
          <div className="mt-5 bg-white shadow-lg rounded-lg border">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="container px-8 py-10 text-base mt-8">
      <div className="mx-auto text-center py-8">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Layanan Kami
        </h1>
        <div className="text-gray-500 mt-3 sm:mt-5 sm:text-lg md:mt-5 md:text-xl max-w-3xl lg:mx-auto">
          <p>
            Melayani jasa pijat spa dan massage panggilan ke rumah, kos, hotel, villa dan apartemen 24 jam.
          </p>
          <p className="text-indigo-600">Usia terapis 20 – 40 tahun dengan kualitas berpengalaman dan profesional.</p>
        </div>
      </div>
      <div className="mt-20 space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-16">
        {layanan.map((item, key) => {
          return (
            <div key={`${item.title}_${key}`} className="relative min-h-40 py-8 px-4 shadow-lg rounded-lg border bg-white text-center text-base">
              <div className="absolute flex items-center justify-center h-8 w-8 lg:h-12 lg:w-12 rounded-md bg-indigo-500 text-white mx-auto -top-3 lg:-top-6">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <dt>
                <p className="text-lg leading-4 font-medium text-gray-900">{item.title}</p>
              </dt>
              <dd className="mt-5 text-gray-500">
                {item.desc}
              </dd>
            </div>
          );
        })}
      </div>
    </section>
    <section id="prices" className="container px-8 py-10 text-base mt-8 bg-white">
      <div className="mx-auto text-center py-16 bg-clip-border border-4 border-indigo-300 border-dashed lg:w-10/12">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Harga
        </h1>
        <div className="text-gray-500 mt-3 sm:mt-5 sm:text-lg md:mt-5 md:text-xl max-w-3xl lg:mx-auto">
          <p>
            Kami menawarkan 3 paket harga massage yang bersaing.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
            <div className="py-8 shadow-lg bg-gradient-to-r from-gray-300 to-white sm:flex-1 lg:flex-initial lg:w-1/4 rounded-lg rounded-tr-none rounded-br-none mt-4 flex flex-col">
              <div className="px-8 pb-8 text-3xl font-bold text-center">Silver</div>
              <div className="border-0 border-grey-light border-t border-solid text-sm">
                <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                  60 menit
                </div>
              </div>
              <div className="w-full text-center px-8 text-xl mt-8">
                Rp 200.000, 00
              </div>
            </div>
            <div className="py-8 flex-1 lg:flex-initial lg:w-1/4 rounded-lg bg-gradient-to-r from-yellow-300 to-white mt-4 sm:-mt-4 sm:-mb-4 shadow-lg z-30 flex flex-col">
              <div className="w-full px-8 pb-8 text-3xl font-bold text-center">Gold</div>
                <div className="w-full border-0 border-grey-light border-t border-solid text-sm">
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    90 menit
                  </div>
                </div>
                <div className="w-full text-center px-8 text-xl mt-8">
                  Rp 250.000, 00
                </div>
              </div>
              <div className="py-8 shadow-lg flex-1 lg:flex-initial lg:w-1/4 rounded-lg rounded-l-none bg-gradient-to-r from-gray-500 to-white mt-4 flex flex-col">
                <div className="px-8 pb-8 text-3xl font-bold text-center">Platinum</div>
                <div className="border-0 border-grey-light border-t border-solid text-sm">
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    120 menit
                  </div>
                </div>
                <div className="w-full text-center px-8 text-xl mt-8">
                  Rp 350.000, 00
                </div>
              </div>
            </div>
        </div> 
      
        <div className="mt-10 lg:mx-10 shadow overflow-hidden rounded border-b border-gray-200">
          <h3 className="text-left my-4 mx-4 font-extrabold text-gray-600 text-1xl sm:text-2xl md:text-3xl">
            Perawatan extra setelah paket di atas
          </h3>
          <table className="min-w-full bg-white">
            <thead className="bg-indigo-400 text-white">
              <tr>
                <th className="lg:w-1/3 text-left py-3 px-4 font-semibold text-sm">Perawatan</th>
                <th className="lg:w-1/3 text-right py-3 px-4 font-semibold text-sm">Harga</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {threatmentAfterPackage.map((row, index) => {
                return (
                  <tr key={`${index}`} className={index % 2 !== 0 ? 'bg-gray-100' : ''}>
                    <td className="w-1/3 text-left py-3 px-4">{row.name}</td>
                    <td className="w-1/3 text-right py-3 px-4">{row.price}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
