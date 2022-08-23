import Lottie from 'lottie-react';
import type { ReactNode } from 'react';
import React from 'react';

import { Meta } from '@/layouts/Meta';

import animationData from '../lotties/login.json';
import { Main } from './Main';

type IMainProps = {
  metaOnboard: ReactNode;
  children: ReactNode;
};

export const Onboarding = (props: IMainProps) => {
  // <AnimationRevealPage> },
  return (
    <Main meta={<Meta title=" " description=" " />} name={'onboard'}>
      <div className="-m-8 flex min-h-screen justify-center font-medium text-white">
        {props.metaOnboard}
        <div className="mx-10 my-16 flex max-w-screen-xl flex-1 justify-center rounded-lg border border-slate-300 text-gray-900 sm:mx-20 ">
          <div className="m-auto hidden h-full justify-center text-center sm:rounded-l-lg lg:flex">
            <Lottie
              loop={true}
              autoplay={true}
              animationData={animationData}
              height={400}
              width={400}
            />
          </div>
          <div className="w-full max-w-3xl p-6">
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
      </div>
    </Main>
  );
  // </AnimationRevealPage>'
};
