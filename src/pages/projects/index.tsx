/* eslint-disable @typescript-eslint/no-shadow */

// import React, { useState } from 'react';

// import { DashBoard } from '@/base/Dashboard';
// import { Meta } from '@/layouts/Meta';

// import { Side } from '../entrepreneur/components/side';
// import AdditionalCard from './components/additional';
// import BusinessCard from './components/business';
// import OverviewCard from './components/overview';
// import ReviewCard from './components/review';
// import { Top } from './components/top';

// export default function Index() {
//   // changables
//   const where = 'projects';
//   const [area, setArea] = useState('Overview');
//   const [resource, setResource] = useState('');
//   // state for steps
//   const [step, setstep] = useState(1);

//   // state for form data
//   const [formData, setFormData] = useState({
//     primary_need: '',
//     primary_gap: '',
//     area_of_expertise: '',
//     business_focus: '',
//   });

//   // function for going to next step by increasing step state by 1
//   const nextStep = () => {
//     setstep(step + 1);
//   };

//   // function for going to previous step by decreasing step state by 1
//   const prevStep = () => {
//     setstep(step - 1);
//   };

//   // handling form input data by taking onchange value and updating our previous form data state
//   const handleInputData = (input) => (e) => {
//     // input value from the form
//     const { value } = e.target;

//     // updating for data state taking previous state and then adding new value to create new object
//     setFormData((prevState) => ({
//       ...prevState,
//       [input]: value,
//     }));
//   };

//   const getArea = (areaDetails: string) => {
//     setArea(areaDetails);
//   };
//   const getResource = (resDetails: string) => {
//     setResource(resDetails);
//   };

//   // javascript switch case to show different form in each step
//   switch (step) {
//     // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
//     case 1:
//       return (
// <DashBoard
//   metaDashboard={
//     <Meta
//       title="My Projects | TransCIIT Project"
//       description="Welcome to TransCIIT"
//     />
//   }
//   nameDashboard={where}
// >
//          <div className="block bg-slate-50 lg:grid lg:grid-flow-row-dense lg:grid-cols-4">
//           <div className="col-span-3">
//             <div className="top-6">
//               <Top current={area} getArea={getArea} />
//             </div>
//             <OverviewCard
//               current={area}
//               nextStep={nextStep}
//               handleFormData={handleInputData}
//               values={formData}
//               getResource={getResource}
//             />

//           </div>
//           <div className="sticky top-6 hidden py-5 lg:block">
//             <Side />
//           </div>
//         </div>
//       </DashBoard>
//     );
//   // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm

//   // default case to show nothing
//   default:
//     return <div className="App"></div>;
// // }

//   return <></>;
// }
import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
