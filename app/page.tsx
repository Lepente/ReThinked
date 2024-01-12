import React from 'react'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Contact from './components/Contact.tsx'
import Testimonial from './components/Testimonial.tsx'
import Showcase from './components/Showcase.tsx'
import Services from './components/Services.tsx'


const features = [
  {
    name: 'From Brief to Development |',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    name: 'Maintenance |',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  },
  {
    name: 'Fast & Modern |',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
] 

export default function Home() {
  return (

  <>
    <div className="bg-white body-wrapper overflow-x-hidden">
    <header className="absolute inset-x-0 top-0 z-50">
      <Navbar />
    </header>

    <div className="bg-graphic text-center justify-center">
      <img className="img-graphic" src="../images/bg-graphics.png" alt="Background Image" />
    </div>

    <div className="relative isolate px-6 pt-14 lg:px-8">
      
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-64">

        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Helping businesses reach their potential.
          </h1>
          <p className="mt-6 max-w-xl m-auto text-center text-lg leading-8 text-gray-600">
          From website creation to managing your online presence, we offer several services to empower your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#work" className="rounded-full z-10 cta-btn px-10 py-5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              SEE WORK
            </a>
            <div className="btn-shadow rounded-full text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2">

            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>



<div id="about" className="overflow-hidden bg-white py-24 sm:py-32">
<div className="mx-auto max-w-8xl px-6 lg:px-40">
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <div className="lg:pr-0 lg:pt-4">
      <div className="mr-12 lg:max-w-xl">
        <p className="text-base font-semibold leading-7 blue-txt">Why This Agency?</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-w-6xl">We create high-converting websites that actually turn consumers into customers.</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We believe in simple solutions with awesome designs that doesn't need a year to develop. Offering more services for the web, we want to help businesses create a better online presence.
        </p>
        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt className="inline font-semibold blue-txt">
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <img
      src="../images/slide-graphic.png"
      alt="Website Image"
      className="w-[48rem] max-w-3xl rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem] mt-16 md:-ml-4 lg:-ml-0 hidden sm:block mr-0"
      width={700}
      height={144}
    />
  </div>
</div>
</div>

            <Showcase />

            <Services />

            <Testimonial />

  <img src="../images/footer-background.png" alt="Background Image" className="footer-bg h-screen absolute w-full opacity-70" />
            <Contact />

            <Footer />

</>

  )
}