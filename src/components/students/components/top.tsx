import { useUser } from "@clerk/nextjs";
import { Timestamp } from "firebase/firestore";

import AddSkills from "./AddSkills";

export const Top = () => {
  const time = Timestamp.fromDate(new Date());
  const getDate = new Date(time.seconds * 1000).getHours();
  const hrs = getDate;
  let greet = "";
  const { user } = useUser();

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  return (
    <div className="relative isolate mt-3 flex items-center gap-x-6 overflow-hidden rounded-lg bg-gray-50 py-1 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#47adb4] to-[#eae9ff] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ffdd80] to-[#fcdd89] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div className="grid w-full grid-cols-3">
        <div className="col-span-2">
          <div className="mb-1 mt-3 px-5 text-base font-extrabold text-slate-700 backdrop:md:text-xl lg:text-2xl xl:text-3xl">
            {`${greet}, ${user?.firstName}`}
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
            <div className="mb-4 text-[11px] font-light text-gray-600 md:text-xs md:font-normal">
              All listed Projects are Approved by TransCIIT
            </div>
          </div>
        </div>
        <div className="relative items-center self-center lg:mx-5 ">
          <AddSkills />
        </div>
      </div>
    </div>
  );
};
