import Link from "next/link";

export default function Example() {
  return (
    <div className="bg-gradient-to-t from-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Want to join our mission?</span>
          <span className="block">Get in touch today.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/about#contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-main-600 px-5 py-3 text-base font-medium text-white hover:bg-main-700"
            >
              Contact
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-main-100 px-5 py-3 text-base font-medium text-main-700 hover:bg-main-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
