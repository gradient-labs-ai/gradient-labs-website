import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const products = [
  {
    name: 'VideoGen',
    description: 'Generate social media videos using AI.',
    href: '/videogen',
    icon: ChartBarIcon,
  },
  {
    name: 'Citation Hero',
    description: 'Get instant citations while browsing the web.',
    href: '/citation-hero',
    icon: CursorArrowRaysIcon,
  },
]

function classNames(...classes: Array<object>) {
  return classes.filter(Boolean).join(' ')
}

export default function MainHeader() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Popover className="relative backdrop-blur-md bg-white/[0.92] border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=600"
                    alt=""
                  />
                
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames([
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-main-500 focus:ring-offset-2'
                      ])}
                    >
                      <span>Products</span>
                      <ChevronDownIcon
                        className={classNames([
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        ])}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {products.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-main-600" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="/about#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=main&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        
                          <item.icon className="h-6 w-6 flex-shrink-0 text-main-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                  <Link href="/blog" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Blog
                  </Link>
                  <Link href="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    About
                  </Link>
                  <Link href="/about#contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
