import Link from "next/link";

export default function AboutContact() {
  return (
    <div className="bg-main-50">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Want to join our mission?</span>
          <span className="block text-main-600">Get in touch today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-main-600 px-5 py-3 text-base font-medium text-white hover:bg-main-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
