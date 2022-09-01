import Image from 'next/image';
import React from 'react';

export default function Partners() {
  return (
    <div>
      <section className="hidden bg-white pt-7 pb-14 sm:block">
        <div className="container mx-auto px-8 sm:px-12 lg:px-20">
          <h1 className=" mb-7 text-center text-sm font-bold uppercase tracking-wide text-gray-800">
            Innovative organizations that partner with TransCIIT
          </h1>
          <div className="flex gap-16 lg:gap-20">
            <Image
              src="/assets/images/1.png"
              width={580}
              height={30}
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
      </section>
    </div>
  );
}
