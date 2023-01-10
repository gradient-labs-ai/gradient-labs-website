import Link from "next/link";

const people = [
  {
    name: "David Grossman",
    role: "Co-founder, Software Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQEy-JwcootyaQ/profile-displayphoto-shrink_400_400/0/1631231000823?e=1678924800&v=beta&t=p_IFmmdhFxhqddyV8979OsNjoQSwHYZEJfGcBp7yOBY",
    linkedin: "https://linkedin.com/in/dg314",
    website: "https://dg314.com",
  },
  {
    name: "Anton Koenig",
    role: "Co-founder, Software Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQEViktwmCmMkQ/profile-displayphoto-shrink_400_400/0/1627591391139?e=1678924800&v=beta&t=JSq79wS8s9lXqjes_tU5Y0EK_1i9QkNCiOfeNsrIDPc",
    linkedin: "https://linkedin.com/in/antonckoenig",
    website: "https://antonkoenig.com",
  },
  // More people...
];

export default function AboutTeam() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-xl text-center font-bold tracking-tight sm:text-2xl">
            We&apos;re a small team trying to make a big impact.
          </h2>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div>
                    <img
                      className="rounded-3xl object-cover shadow-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg leading-6 text-gray-500">
                        <h3 className="font-medium text-xl text-gray-900">{person.name}</h3>
                        <Link href={person.linkedin} target="_blank" className="text-main-600 underline">LinkedIn</Link>,{' '}
                        <Link href={person.website} target="_blank" className="text-main-600 underline">Website</Link>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
