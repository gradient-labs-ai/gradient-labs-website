export default function HomeLogos() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <p className="text-center text-lg font-semibold text-gray-600">
            Trusted by students and faculty at top institutions
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="/citation-hero/5.png"
                alt="Brown University"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src="/citation-hero/1.png" alt="Mass Bay Community College" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src="/citation-hero/6.png" alt="Harvard Medical School" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src="/citation-hero/2.png" alt="WGU" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="/citation-hero/4.png"
                alt="UMass Amherst"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src="/citation-hero/3.png"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  