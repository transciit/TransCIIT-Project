/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';

import { DashBoard } from '@/base/Dashboard';
import { Meta } from '@/layouts/Meta';

import { Side } from '../entrepreneur/components/side';
import AdditionalCard from '../projects/components/additional';
import BusinessCard from '../projects/components/business';
import OverviewCard from '../projects/components/overview';
import ReviewCard from '../projects/components/review';
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import { UseContextProvider } from './context/StepperContext';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [done, setDone] = useState(false);

  const steps = ['Overview', 'Additional', 'Business', 'Review'];

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? (newStep += 1) : (newStep -= 1);
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  const getDone = (doneDetails: boolean) => {
    setDone(doneDetails);
  };

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <OverviewCard getDone={getDone} />;
      case 2:
        return <AdditionalCard getDone={getDone} />;
      case 3:
        return <BusinessCard getDone={getDone} />;
      case 4:
        return <ReviewCard />;
      default:
    }
    return 'foo';
  };

  return (
    <DashBoard
      metaDashboard={
        <Meta
          title="My Project | TransCIIT Project"
          description="Welcome to TransCIIT"
        />
      }
      nameDashboard={'steps'}
    >
      <div className="block bg-slate-50 lg:grid lg:grid-flow-row-dense lg:grid-cols-4">
        <div className="col-span-3">
          <div className="container mt-5 ">
            <Stepper steps={steps} currentStep={currentStep} />

            <div className="my-12 rounded-xl border border-slate-200 bg-white p-1 shadow-xl">
              <UseContextProvider>
                {displayStep(currentStep)}
              </UseContextProvider>

              <div className="px-4 text-right sm:px-6">
                {currentStep !== steps.length && (
                  <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                    done={done}
                  />
                )}
              </div>
            </div>
          </div>
          {/* <div className="top-6">
            <Top current={area} getArea={getArea} />
          </div>
          <OverviewCard
            current={area}
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
            getResource={getResource}
          />
          <AdditionalCard current={area} />
          <BusinessCard current={area} />
          <ReviewCard current={area} /> */}
        </div>
        <div className="sticky top-6 hidden py-5 lg:block">
          <Side />
        </div>
      </div>
    </DashBoard>
  );
};

export default Index;
