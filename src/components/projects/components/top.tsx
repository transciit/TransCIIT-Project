import Link from "next/link";

interface Props {
  getArea: (arg: string) => void;
  current: any;
  done: any;
}

export const Top = ({ current, getArea }: Props) => {
  const navigation = [
    { name: "Overview", href: "#overview" },
    { name: "Additional", href: "#additional" },
    { name: "Business", href: "#business" },
    { name: "Review", href: "#review" },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="mb-4 sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Tab
        </label>
        <select
          id="tabs"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
        >
          <option>Overview</option>
          <option>Additional</option>
          <option>Business</option>
          <option>Review</option>
        </select>
      </div>
      <ul className="hidden divide-x divide-slate-200 rounded-lg border border-slate-300 text-center text-sm font-medium text-slate-500 dark:divide-gray-700 dark:text-gray-400 sm:flex">
        {navigation.map((item) => (
          <li key={item.name} className="w-full">
            <Link
              href={item.href}
              className={classNames(
                item.name.includes(current)
                  ? "bg-indigo-600  text-white dark:bg-gray-700 dark:text-white"
                  : "bg-white p-4 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
                "inline-block w-full p-4"
              )}
              aria-current={item.name.includes(current) ? "page" : undefined}
              onClick={() => {
                getArea(item.name);
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
