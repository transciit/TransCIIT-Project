/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import Loading from '@/components/loading';
import MySkillsCard from '@/components/skills/components/myskills';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import { Side } from '../../components/entrepreneur/components/side';
import StudentReviewCard from '../../components/skills/components/review';
import Stepper from '../../components/skills/components/Stepper';
import StepperControl from '../../components/skills/components/StepperControl';
import { UseContextProvider } from '../../components/skills/context/StepperContext';

const Index = () => {
  const { user } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [done, setDone] = useState(false);

  const steps = ['About', 'Review'];
  const { data: userDetails } = useSWR(`/api/users/${user.uid}`, fetcher);
  const { data: fetchCategories } = useSWR('/api/category/', fetcher);
  const ud = userDetails?.userDetails;
  const fc = fetchCategories?.fetchCategories;

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
        return <MySkillsCard getDone={getDone} />;
      case 2:
        return <StudentReviewCard />;
      default:
    }
    return '';
  };

  return (
    <DashBoard
      metaDashboard={
        <Meta
          title="My Skills | TransCIIT Project"
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
              {fc?.length ? (
                <UseContextProvider>
                  {displayStep(currentStep)}
                </UseContextProvider>
              ) : (
                <Loading />
              )}

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
        </div>
        <div className="sticky top-6 hidden py-5 lg:block">
          {ud?.length ? <Side ud={ud} /> : ''}
        </div>
      </div>
    </DashBoard>
  );
};

export default Index;
