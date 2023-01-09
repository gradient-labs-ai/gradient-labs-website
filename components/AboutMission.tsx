const metrics = [
  {
    id: 1,
    stat: "38%",
    emphasis: "U.S. Jobs",
    rest: "are at high risk of automation by the early 2030s.",
  },
  {
    id: 2,
    stat: "84%",
    emphasis: "Businesses",
    rest: "say AI will help them obtain or sustain a competitive advantage.",
  },
  {
    id: 3,
    stat: "31%",
    emphasis: "U.S. Workers",
    rest: "have limited or no digital skills.",
  },
  {
    id: 4,
    stat: "2/3",
    emphasis: "White students",
    rest: "use computers at home vs. half of Black and Hispanic students.",
  },
];

export default function AboutMission() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/images/gradientlabs-team.jpg"
              alt="Gradient Labs founders working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-base font-semibold text-main-500">Our Mission</h2>
          <h1 className="mt-3 sm:text-6xl text-4xl font-bold tracking-tight text-white">
            Democratize AI
          </h1>
          <p className="mt-5 text-lg text-gray-300">
            By making artificial intelligence more accessible, we can help even
            the playing field and prevent inequality in the digital age. At
            Gradient Labs, we believe that everyone should have the opportunity
            to benefit from the transformative power of AI, regardless of their
            background or resources.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{" "}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
