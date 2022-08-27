export const Top = ({ topName }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-1">
      <div className="mt-3 mb-1 px-5 text-xl font-extrabold text-slate-800 sm:text-3xl">
        {topName}
      </div>
      <div className="relative mx-5 items-center self-center overflow-hidden text-gray-600 focus-within:text-gray-400">
        <div className="mb-4 text-xs font-normal text-gray-600">
          All listed Projects are certified and Approved by TransCIIT
        </div>
      </div>
    </div>
  );
};
