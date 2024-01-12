import React from 'react'

export default function Footer () {
    return (
        

<footer className="rounded-lg mx-4 z-10">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-6 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="../images/Logo.png" className="h-8" alt="ReThinked Web Solutions Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-bold text-black sm:mb-0">
                <li>
                    <a href="#about" className="pr-4 hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#services" className="pr-4 hover:underline me-4 md:me-6">Services</a>
                </li>
                <li>
                    <a href="#work" className="pr-4 hover:underline me-4 md:me-6">Work</a>
                </li>
                <li>
                    <a href="#" className="pr-4 hover:underline me-4 md:me-6">FAQ</a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8 h-0" />
        <span className="block text-sm text-gray-600 sm:text-center">© 2023 <a href="#" className="hover:underline">ReThinked Web Solutions</a>. All Rights Reserved.</span>
    </div>
</footer>

    )
}