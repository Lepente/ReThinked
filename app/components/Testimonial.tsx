import React from 'react'

export default function Testimonial () {
    return (
        <figure className="max-w-screen-md mx-auto my-24 text-center">
            <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <blockquote>
                <p className="sm:text-xl text-md italic font-medium text-gray-600 p-6 sm:p-6">"Thanks to ReThinked, our website's transformation has been phenomenal. They grasped our vision perfectly and delivered a sleek, user-friendly design that truly elevates our brand. The results speak for themselves – increased traffic and engagement. Highly recommended!"</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-black pr-3">John Doe</cite>
                    <cite className="ps-3 text-sm text-gray-700 pl-2">Marketing Director at YesWeCan</cite>
                </div>
            </figcaption>
        </figure>
    )
}