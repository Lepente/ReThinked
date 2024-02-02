import React from "react";

export default function Showcase () {
    return (
        <>
        <div id="about" className="mx-5 md:mx-10 lg:mx-20 2xl:mx-20 py-12 sm:py-32 lg:py-16 2xl:py-32 mt-20 mb-40 rounded-3xl">
        <div id="work" className="m-auto work-container text-center mx-5 md:mx-10 lg:mx-40">
            <h3 className="text-5xl mb-4 font-bold">We've worked on</h3>
        </div>
<div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-20">
  <div className="mx-auto grid grid-cols-1 grid-rows-1 lg:grid-rows-1 gap-x-8 gap-y-16 sm:gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <div className="lg:pr-0 lg:pt-4 row-start-1 row-end-2">
      <div className="mr-12 lg:max-w-xl">
        <p className="text-base font-semibold leading-7 blue-txt">Branding & Social Media</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-w-6xl">Evyssa Vacations</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Lorem ipsum
        </p>
        <div className="branding-wrapper text-left mt-4 p-6">
                    <h5 className="text-black font-bold">Branding</h5>
                    <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorum aut repudiandae dolore suscipit nemo? Sint, officiis corporis voluptatem laudantium molestias laborum fugit numquam architecto repudiandae aspernatur incidunt, distinctio qui!</p>
                </div>
                <div className="marketing-wrapper text-left mt-4 p-6">
                    <h5 className="text-black font-bold">Marketing</h5>
                    <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dolorum aut repudiandae dolore suscipit nemo? Sint, officiis corporis voluptatem laudantium molestias laborum fugit numquam architecto repudiandae aspernatur incidunt, distinctio qui!</p>
                </div>
      </div>
    </div>
    <img
      src="../images/Project-Mockup.png"
      alt="Website Image"
      className="row-start-2 lg:row-start-1"
      width={1200}
      height={144}
    />
  </div>
</div>
</div>
        </>
    )
}