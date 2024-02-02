import React from 'react'

export default function Contact () {
    return (
            <>
            <div id="contact" className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md z-10">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Let's work together!</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-lg text-gray-600 sm:text-xl">Have a question, an idea, or a project in mind? We're here to help you turn your vision into reality. Whether you're looking for web design, development, or just want to explore the possibilities, drop us a message.</p>
                <form action="#" className="contact-form space-y-8">
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">Your email</label>
                        <input type="email" id="email" className="shadow-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@email.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-semibold text-gray-600">Your message</label>
                        <textarea id="message" className="block p-3 w-full text-sm text-gray-600 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <div className='text-center'>
                    <button type="submit" className="rounded-full items-center justify-center cta-btn py-5 px-10 text-sm font-semibold hover:bg-black text-center text-white sm:w-fit">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
            </>
    )
}