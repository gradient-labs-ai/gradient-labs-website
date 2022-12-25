import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function AboutHero() {
    return (
        <header className="relative bg-main-800 pt-8 pb-24 sm:pb-32">
            <div className="absolute inset-0">
            <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                alt=""
            />
            <div
                className="absolute inset-0 bg-gradient-to-tl from-main-800 to-cyan-700 mix-blend-multiply"
                aria-hidden="true"
            />
            </div>
            <div className="relative mx-auto pt-24 max-w-md px-4 sm:pt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">About Gradient Labs</h1>
                <p className="pt-6 max-w-3xl text-xl text-cyan-100">
                    Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
                    lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
                </p>
            </div>
        </header>
    )
}