/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function HomeCta() {
    return (
      <div className="bg-citations-main-600">
        <div className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">Save time with Citation Hero.</span>
                <span className="block">It's a no-brainer!</span>
            </h2>
            <a
                href="https://chrome.google.com/webstore/detail/iojgjmcdmcekjmflcnmmcflcjmkmjmfi/preview?hl=en&authuser=0"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-citations-main-600 shadow hover:bg-citations-main-50"
            >
                Add to Chrome - It&apos;s Free
            </a>
            </div>
        </div>
        <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
            className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
            src="/citation-hero/student-1.jpg"
            alt="App screenshot"
            />
        </div>
        </div>
    </div>
    )
  }
  