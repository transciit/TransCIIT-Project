/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';

import bg from '../../../public/assets/images/hero/cover.jpg';

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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="bg-indigo-700/80">
        <div className="container mx-auto flex h-full flex-col items-center justify-between px-4 sm:max-w-7xl lg:py-20 xl:pt-10">
          <div className="z-30 flex w-full flex-col items-center pt-12 text-center lg:pt-10">
            <p className=" sm:text-md pr-0 text-base text-gray-50 xl:text-lg">
              {props.hero}
            </p>
            <h1 className="mt-2 mb-5 max-w-5xl text-center font-montserrat text-2xl font-extrabold leading-tight text-gray-50 sm:mt-0 sm:px-5 md:text-4xl lg:text-5xl xl:mb-12">
              {props.herodes}
            </h1>

            <div className="mt-14 hidden flex-col sm:flex lg:mt-14">
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
    </div>
  );
}
