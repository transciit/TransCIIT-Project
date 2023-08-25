/* eslint-disable no-console */
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// React-wrapper file
import "@yaireo/tagify/dist/tagify.css"; // Tagify CSS

// React-wrapper file
import { useState } from "react";

// import { storage } from '@/config/firebase';
import { isEmpty } from "@/validator";

import { useStepperContext } from "../context/StepperContext";

const MySkillsCard = ({ getDone }) => {
  //  const [progress, setProgress] = useState(0);
  const [error] = useState(false);

  const { myData, setMyData } = useStepperContext();

  // // Tagify settings object
  // const baseTagifySettings = {
  //   blacklist: ['xxx', 'yyy', 'zzz'],
  //   maxTags: 6,
  //   // backspace: "edit",
  //   placeholder: 'type something',
  //   dropdown: {
  //     enabled: 1, // always show suggestions dropdown
  //   },
  // };
  // // this is an example React component which implemenets Tagify within
  // // itself. This example is a bit elaborate, to demonstrate what's possible.
  // const tagifyRef1 = useRef();

  // // just a name I made up for allowing dynamic changes for tagify settings on this component
  // const [tagifySettings] = useState([]);
  // const [tagifyProps, setTagifyProps] = useState({});
  // const [tagifyWhitelist, setTagifyWhitelist] = useState<any>([]);

  // on component mount
  // useEffect(() => {
  //   setTagifyProps({ loading: true });

  //   const { length } = fc;
  //   fc.map((item, index) => {
  //     const items = item.name;
  //     setTagifyWhitelist(item.name);
  //     console.log(item.name);
  //     console.log(tagifyWhitelist);

  //     if (index === length - 1) {
  //       /* invoke callback */
  //       console.log(tagifyWhitelist);
  //       setTagifyProps((lastProps) => ({
  //         ...lastProps,
  //         whitelist: ['tagifyWhitelist', 'me'],
  //         showFilteredDropdown: 'a',
  //         loading: false,
  //       }));
  //     }

  //     return '';
  //   });

  //   // simulate state change where some tags were deleted
  // }, []);

  // // merged tagify settings (static & dynamic)
  // const settings = {
  //   ...baseTagifySettings,
  //   ...tagifySettings,
  // };

  // const onChange = useCallback((e) => {
  //   console.log('CHANGED:', e.detail.value);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyData({ ...myData, [name]: value });
    if (isEmpty(myData.about_you)) {
      getDone(false);
    } else {
      getDone(true);
    }
  };

  return (
    <div>
      <div className="top-6">
        <div className="mt-10 sm:mt-0">
          <div className="mb-1 mt-3 px-5 font-playfair text-xl font-extrabold text-slate-900 sm:text-2xl">
            About You
          </div>
          <div className="relative mx-5 items-center self-center overflow-hidden text-slate-600 focus-within:text-gray-400">
            <div className="mb-4 text-xs font-normal text-gray-600">
              This information will be displayed publicly.
            </div>
          </div>
          <div className="mt-3 md:mt-0">
            <form action="#">
              <div className="sm:overflow-hidden">
                <div className="space-y-6 px-4 py-2 sm:p-5">
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-base font-medium text-slate-900"
                    >
                      About You
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about_you"
                        rows={7}
                        className="mt-1 block w-full rounded-md border border-slate-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                        placeholder="I am a ..."
                        value={myData.about_you}
                        onChange={handleChange}
                        required
                      />
                      {error ? (
                        <div style={{ color: "red" }}>
                          This is a required field
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="ml-3 mt-2 text-xs font-normal text-slate-700">
                      A summary of who you are and what you would like to
                      achieve. You can also include previous projects youve
                      successfully handled
                    </div>
                    <p className="mt-2 text-base text-gray-500"></p>
                  </div>
                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>

                  <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
                  <div className="mr-2">
                    <label
                      htmlFor="company-website"
                      className="block text-base font-medium text-slate-900"
                    >
                      Your area of expertise
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      {/* <Tags
                        tagifyRef={tagifyRef1}
                        settings={settings}
                        autoFocus={true}
                        {...tagifyProps}
                        onChange={onChange}
                        onEditInput={() => console.log('onEditInput')}
                        onEditBeforeUpdate={() =>
                          console.log`onEditBeforeUpdate`
                        }
                        onEditUpdated={() => console.log('onEditUpdated')}
                        onEditStart={() => console.log('onEditStart')}
                        onEditKeydown={() => console.log('onEditKeydown')}
                        onDropdownShow={() => console.log('onDropdownShow')}
                        onDropdownHide={() => console.log('onDropdownHide')}
                        onDropdownSelect={() => console.log('onDropdownSelect')}
                        onDropdownScroll={() => console.log('onDropdownScroll')}
                        onDropdownNoMatch={() =>
                          console.log('onDropdownNoMatch')
                        }
                        onDropdownUpdated={() =>
                          console.log('onDropdownUpdated')
                        }
                      /> */}

                      <input
                        type="text"
                        name="area_of_expertise"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border-slate-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
                        placeholder=" "
                        value={myData.area_of_expertise}
                        onChange={handleChange}
                        required
                      />
                      {error ? (
                        <div style={{ color: "red" }}>
                          This is a required field
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mt-2 text-xs font-normal text-slate-700">
                      Your Area of expertise
                    </div>
                  </div>
                </div>
                <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-gray-700"></hr>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MySkillsCard;
