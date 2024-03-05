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
      'Our team ensures a seamless transition from initial brief to website development, prioritizing your vision and objectives every step of the way.',
  },
  {
    name: 'Maintenance |',
    description: 'We handle all aspects of website maintenance, ensuring your online presence remains optimized and up-to-date while you focus on growing your business.',
  },
  {
    name: 'Fast & Modern |',
    description: 'We deliver fast and modern web solutions, leveraging cutting-edge technology to provide your audience with an engaging and user-friendly experience.',
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
      
      <div className="mx-auto max-w-3xl py-32 sm:py-48 2xl:py-64 md:py-32">

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



<div id="about" className="about-container mx-5 md:mx-10 lg:mx-20 2xl:mx-40 py-12 sm:py-32 lg:py-16 2xl:py-32 mt-20 mb-40 rounded-3xl">
<div className="mx-auto max-w-8xl px-1 md:px-10 lg:px-20">
  <div className="mx-auto grid grid-cols-1 grid-rows-1 lg:grid-rows-1 gap-x-8 gap-y-16 sm:gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <div className="lg:pr-0 lg:pt-4 row-start-1 row-end-2">
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
      src="../images/side-graphic.png"
      alt="Website Image"
      className="side-image row-start-2 lg:row-start-1"
      width={700}
      height={144}
    />
  <span className="text-gray-600 text-xs text-end col-start-1 col-end-1 lg:col-start-2 lg:col-end-2">Illustration from <a href="https://absurd.design/">absurd.design</a></span>
  </div>
</div>
</div>

            <Showcase />            

            <Services />

            <Testimonial />

              

            <Footer />

</>

  )
}