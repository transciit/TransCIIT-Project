/* eslint-disable tailwindcss/no-custom-classname */
export default function AboutUs() {
  return (
    <div>
      <div className="container mx-auto flex h-full flex-col items-center justify-between rounded-[2.5rem] bg-light_green-500 px-2">
        <div className="container mx-auto flex h-full max-w-6xl flex-col items-center justify-between">
          <h2 className="mt-14 text-sm font-medium uppercase tracking-tight text-indigo-500">
            Who We Are
          </h2>
          <h3 className="mt-2 max-w-2xl text-center text-3xl font-extrabold leading-tight text-gray-900 sm:px-0 sm:text-5xl">
            What is{' '}
            <span className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent lg:inline">
              TransCIIT Project
            </span>
          </h3>
          <div className="mt-0 flex w-full flex-col lg:my-20 lg:flex-row">
            <div className="mt-0 mr-10 flex w-full flex-col sm:mt-20 lg:my-2 lg:flex-col">
              <img src="/assets/images/about/1.jpg" alt="image" />
              <img
                src="/assets/images/about/3.jpg"
                alt="image"
                className="mt-10"
              />
            </div>

            <div className="mt-0 flex w-full flex-col lg:flex-row">
              <div className="mx-auto mb-0 w-full p-4 sm:mb-16 lg:mb-0">
                <div className="text-[19px]">
                  Transforming Climate Innovation Ecosystems through Inclusive
                  Transdisciplinarity (TransCIIT) project is seeking to pilot a
                  service in Kenya that matches the needs of climate
                  entrepreneurs with the skills of master’s students, thereby
                  exploring how to develop and strengthen university- industry
                  links and contribute to building innovation systems that can
                  nurture transformative change.
                </div>
                <p className="text-[19px]">
                  TransCIIT brings together five partners, each with their own
                  capabilities relevant to innovation system building in general
                  and the needs of Kenya’s climate innovation ecosystem in
                  particular. One is the African Centre for Technology Studies
                  (ACTS), which is a well-established science, technology and
                  innovation (STI) ‘think tank’, who have existing strong links
                  to the project’s other two partners in Kenya – Jaramogi Oginga
                  Odinga University of Science and Technology (JOOUST) and the
                  Kenya Climate Innovation Center (KCIC).
                </p>
                <p className="text-[19px]">
                  Also on the African continent, the project includes the
                  partnership of the University of Johannesburg (UJ) who,
                  through the Trilateral Research Chair on Transformative
                  Innovation (TRCTI), provide important expertise on innovation
                  systems and informal sector entrepreneurship. And part of the
                  TRCTI along with UJ (and ACTS), the Science Policy Research
                  Unit (SPRU) at the University of Sussex in the UK is leading
                  the project, connecting it with the work of the Transformative
                  Innovation Policy Consortium (TIPC).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
