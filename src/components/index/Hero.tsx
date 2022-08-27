/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import Link from 'next/link';

type IMetaProps = {
  hero: string;
  herodes: string;
  canonical?: string;
};

export default function Hero(props: IMetaProps) {
  return (
    <div>
      <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-between px-8">
        <div className="z-30 flex w-full flex-col items-center pt-12 text-center lg:pt-10">
          <p className=" sm:text-md pr-0 text-base text-gray-600 xl:text-lg">
            {props.hero}
          </p>
          <h1 className="mt-2 mb-7 max-w-5xl text-center font-montserrat text-3xl font-extrabold leading-tight text-gray-900 sm:mt-0 sm:px-5 md:text-4xl lg:text-5xl xl:mb-12">
            {props.herodes}
          </h1>
          <div className="flex gap-7">
            <Link href="/onboarding/signin">
              <a className="fold-bold hover:shadow-3xl relative mx-auto mt-5 inline-block w-auto rounded-md border-t border-gray-200 bg-indigo-600 px-12 py-4 font-manrope font-bold text-white shadow-lg hover:bg-indigo-100 hover:text-indigo-600 md:text-base">
                Get Started
              </a>
            </Link>
          </div>

          <div className="mt-24 hidden flex-col sm:flex lg:mt-44">
            <p className="mb-4 text-sm font-medium uppercase text-gray-500">
              Innovative organizations that partner with TransCIIT
            </p>
            <div className="flex gap-16 lg:gap-20">
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
  );
}
