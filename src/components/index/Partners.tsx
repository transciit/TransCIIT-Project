import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div>
      <section className="hidden bg-white pb-14 pt-7 sm:block">
        <div className="container mx-auto px-4">
          <h1 className=" mb-7 text-center text-sm font-bold uppercase tracking-wide text-gray-800">
            Innovative organizations that partner with TransCIIT
          </h1>
          <div className="flex h-14 gap-10">
            <Image
              src="/assets/images/1.png"
              width={200}
              height={10}
              alt="TransCIIT"
            />
            <Image
              src="/assets/images/2.png"
              width={300}
              height={10}
              alt="TransCIIT"
              className="mr-4 h-auto w-auto"
            />
            <Image
              src="/assets/images/3.png"
              width={200}
              height={20}
              alt="TransCIIT"
              className="mr-4 h-auto w-auto"
            />
            <Image
              src="/assets/images/6.png"
              width={900}
              height={20}
              alt="TransCIIT"
              className="mr-4 h-auto w-auto"
            />
            <Image
              src="/assets/images/10.png"
              width={200}
              height={20}
              alt="TransCIIT"
              className="mr-4 h-auto w-auto"
            />
            <Image
              src="/assets/images/8.png"
              width={200}
              height={20}
              alt="TransCIIT"
              className="mr-4 h-auto w-auto"
            />
            <Image
              src="/assets/images/9.png"
              width={400}
              height={20}
              alt="TransCIIT"
              className="mr-4 h-auto w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
