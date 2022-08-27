import React, { useEffect, useRef, useState } from 'react';

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState<any>([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, step) => {
    const newSteps = [...step];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count += 1;
      }

      // step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count += 1;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count += 1;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? 'flex w-full items-center'
            : 'flex items-center'
        }
      >
        <div className="relative flex flex-col items-center text-indigo-600">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 py-3 transition duration-500 ease-in-out  ${
              step.selected
                ? 'border border-indigo-600 bg-indigo-600 font-bold text-white '
                : ''
            }`}
          >
            {step.completed ? (
              <span className="text-xl font-bold text-white">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0  mt-14 w-32 text-center text-xs font-medium uppercase ${
              step.highlighted ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
            step.completed ? 'border-indigo-600' : 'border-gray-300 '
          }  `}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-4 flex items-center justify-between">{stepsDisplay}</div>
  );
};
export default Stepper;
