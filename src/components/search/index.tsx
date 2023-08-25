// ./components/Search/index.js

// “algoliasearch/lite” is the search-only version of the API client — optimized for size and search
import algoliasearch from "algoliasearch/lite";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  "KRX1TCSHY8",
  "d99ac7bc5714cecf281de4a14e53f078"
);

function Hit({ hit }) {
  return (
    <article>
      <p>{hit.firstName}</p>
      <h1>{hit.lastName}</h1>
      <p>${hit.about}</p>
    </article>
  );
}

export default function Search() {
  return (
    // Our search components will go here!

    <InstantSearch searchClient={searchClient} indexName="student_list_search">
      <SearchBox
        classNames={{
          form: "relative",
          input:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          submitIcon: "absolute top-0 right-0 bottom-0 w-10 mt-4",
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}
