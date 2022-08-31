import type { ReactNode } from 'react';
import React from 'react';

type IMainProps = {
  metaOnboard: ReactNode;
  children: ReactNode;
};

export const Onboarding = (props: IMainProps) => {
  // <AnimationRevealPage> },
  return (
    <div className="h-screen bg-white">
      {props.metaOnboard}
      <div className="flex w-full flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-14 md:pt-0">
            {props.children}
            <p className="mt-6 text-center text-xs text-gray-600">
              I agree to abide by TranCIIT{' '}
              <a href="#" className="border-b border-dotted border-gray-500">
                Terms of Service
              </a>{' '}
              and its{' '}
              <a href="#" className="border-b border-dotted border-gray-500">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden h-screen w-full object-cover md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
  // </AnimationRevealPage>'
};
