/* eslint-disable tailwindcss/no-custom-classname */
export default function AboutUs() {
  return (
    <div>
      <div className="container mx-auto flex h-full flex-col items-center justify-between rounded-[2.5rem] bg-light_green-500 px-2">
        <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-between">
          <h2 className="mt-14 text-sm font-medium uppercase tracking-tight text-indigo-500">
            About Us
          </h2>
          <h3 className="mt-2 max-w-2xl text-center text-3xl font-extrabold leading-tight text-gray-900 sm:px-0 sm:text-5xl">
            Who{' '}
            <span className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent lg:inline">
              We Are
            </span>
          </h3>
          <div className="mt-0 flex w-full flex-col lg:my-20">
            <div className="mt-0 flex w-full flex-col ">
              <div className="mx-auto mb-0 w-full p-4 sm:mb-16 lg:mb-0">
                <div className="text-[17px]">
                  <span className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text font-extrabold text-transparent lg:inline">
                    Transforming Climate Innovation Ecosystems through Inclusive
                    Transdisciplinarity (TransCIIT)
                  </span>{' '}
                  project is seeking to pilot a service in Kenya that matches
                  the needs of climate entrepreneurs with the skills of master’s
                  students, thereby exploring how to develop and strengthen
                  university-industry links and contribute to building
                  innovation systems that can nurture transformative change.
                  This project is funded by the British Council through
                  Innovation in African Universities (IAU) programme. TransCIIT
                  brings together five partners, each with their own
                  capabilities relevant to innovation system building in general
                  and the needs of Kenya’s climate innovation ecosystem in
                  particular.
                </div>
                <p className="text-[17px]">
                  1){' '}
                  <span className="w-full bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text font-bold text-transparent lg:inline">
                    African Centre for Technology Studies (ACTS)
                  </span>
                  , which is a well-established science, technology and
                  innovation (STI) ‘think tank’, who have existing strong links
                  to the project’s other two partners in Kenya.
                </p>
                <p className="text-[17px]">
                  2){' '}
                  <span className="w-full bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text font-bold text-transparent lg:inline">
                    Jaramogi Oginga Odinga University of Science and Technology
                    (JOOUST)
                  </span>{' '}
                  in Kenya will identify suitable masters students from various
                  disciplines to be involved in the matchmaking process and
                  project activities. Masters students in various fields of
                  study (Business, ICT, Marketing, Project management, Energy)
                  were be targeted
                </p>
                <p className="text-[17px]">
                  3){' '}
                  <span className="w-full bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text font-bold text-transparent lg:inline">
                    Kenya Climate Innovation Center (KCIC)
                  </span>{' '}
                  will provide business advisors.
                </p>
                <p className="text-[17px]">
                  4){' '}
                  <span className="w-full bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text font-bold text-transparent lg:inline">
                    University of Johannesburg (UJ)
                  </span>{' '}
                  who, through the Trilateral Research Chair on Transformative
                  Innovation (TRCTI), provide important expertise on innovation
                  systems and informal sector entrepreneurship. And part of the
                  TRCTI along with UJ (and ACTS),
                </p>
                <p className="text-[17px]">
                  5){' '}
                  <span className="w-full bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text font-bold text-transparent lg:inline">
                    The University of Sussex in the UK through the Science
                    Policy Research Unit (SPRU)
                  </span>{' '}
                  is leading the project, connecting it with the work of the
                  Transformative Innovation Policy Consortium (TIPC).
                </p>
              </div>
            </div>
            <div className="mt-0 mr-10 flex w-full flex-col sm:mt-20 lg:my-2 lg:flex-col">
              <img src="/assets/images/about/2.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
