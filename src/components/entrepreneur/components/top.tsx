import { Timestamp } from 'firebase/firestore';

import AddProjectButton from './AddProjectsButton';

export const Top = ({ ud }) => {
  const time = Timestamp.fromDate(new Date());
  const getDate = new Date(time.seconds * 1000).getHours();
  const hrs = getDate;
  let greet = '';
  if (hrs < 12) greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening';
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-1">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="mt-3 mb-1 px-5 text-base font-extrabold text-slate-800 backdrop:md:text-xl lg:text-2xl xl:text-3xl">
            {`${greet}, ${ud[0].firstName}`}
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
            <div className="mb-4 text-[11px] font-light text-gray-600 md:text-xs md:font-normal">
              All listed Projects are Approved by TransCIIT
            </div>
          </div>
        </div>
        <div className="relative items-center self-center lg:mx-5 ">
          <AddProjectButton />
        </div>
      </div>
    </div>
  );
};
