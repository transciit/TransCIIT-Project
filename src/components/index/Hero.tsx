import Image from "next/image";

import bg from "../../../public/assets/images/hero/cover.jpg";

type IMetaProps = {
  hero: string;
  herodes: string;
  canonical?: string;
};

export default function Hero(props: IMetaProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-indigo-700/80">
        <div className="container mx-auto py-32 text-center sm:px-4 ">
          <div className="sm:leading-none xl:text-7xl hidden text-4xl font-extrabold leading-xtight tracking-tight text-white sm:block sm:text-5xl md:text-6xl">
            <span className="block">Matching the needs of climate</span>
            <span className="relative inline-block text-white">
              entrepreneurs with the skills
            </span>
            <span className="relative inline-block text-white">
              of master&apos;s students
            </span>
          </div>
          <div className="sm:none sm:leading-none xl:text-7xl block text-4xl font-extrabold leading-xtight tracking-tight text-white sm:hidden sm:text-5xl md:text-6xl">
            {props.herodes}
          </div>
          <div className="mx-auto mt-6 max-w-lg text-center text-base text-gray-100 sm:text-base md:mt-12 md:max-w-xl md:text-lg xl:text-xl">
            {props.hero}
          </div>
          <div className="relative mx-5 mt-12 flex max-w-md items-center overflow-hidden rounded-full text-center sm:mx-auto">
            <input
              type="text"
              name="email"
              placeholder="Have a Question? Reach out"
              className="h-12 w-full px-6 py-2 font-medium text-indigo-800 focus:outline-none"
            />
            <span className="relative right-0 top-0 block">
              <button
                type="button"
                className="leading-6 inline-flex h-12 w-32 items-center border border-transparent bg-indigo-400 px-8 text-base font-bold text-white transition duration-150 ease-in-out hover:bg-indigo-700 focus:outline-none active:bg-indigo-700"
              >
                Send
              </button>
            </span>
          </div>
          <div className="mt-8 text-sm text-gray-300">
            By signing up, you agree to our terms and services.
          </div>
        </div>
      </div>
      <div className="hidden bg-indigo-700/80">
        <div className="container mx-auto flex h-full flex-col items-center justify-between px-4 sm:max-w-7xl lg:py-20 xl:pt-10">
          <div className="z-30 flex w-full flex-col items-center pt-12 text-center lg:pt-10">
            <p className=" sm:text-md pr-0 text-base text-gray-50 xl:text-lg">
              {props.hero}
            </p>
            <h1 className="mb-5 mt-2 max-w-5xl text-center font-montserrat text-2xl font-extrabold leading-tight text-gray-50 sm:mt-0 sm:px-5 md:text-4xl lg:text-5xl xl:mb-12">
              {props.herodes}
            </h1>

            <div className="mt-14 hidden flex-col sm:flex lg:mt-14">
              <p className="mb-4 text-sm font-medium uppercase text-gray-500">
                Innovative organizations that partner with TransCIIT
              </p>
              <div className="flex justify-center gap-16 lg:gap-20">
                <Image
                  src="/assets/images/1.png"
                  width={500}
                  height={200}
                  alt="TransCIIT"
                />
                <Image
                  src="/assets/images/2.png"
                  width={300}
                  height={200}
                  alt="TransCIIT"
                  className="mr-4 h-auto w-auto"
                />
                <Image
                  src="/assets/images/3.png"
                  width={200}
                  height={200}
                  alt="TransCIIT"
                  className="mr-4 h-auto w-auto"
                />
                <Image
                  src="/assets/images/6.png"
                  width={900}
                  height={200}
                  alt="TransCIIT"
                  className="mr-4 h-auto w-auto"
                />
                <Image
                  src="/assets/images/10.png"
                  width={200}
                  height={200}
                  alt="TransCIIT"
                  className="mr-4 h-auto w-auto"
                />
                <Image
                  src="/assets/images/8.png"
                  width={200}
                  height={200}
                  alt="TransCIIT"
                  className="mr-4 h-auto w-auto"
                />
                <Image
                  src="/assets/images/9.png"
                  width={400}
                  height={200}
                  alt="TransCIIT"
                  className="mr-4 h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
