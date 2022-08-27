/* eslint-disable tailwindcss/no-custom-classname */

import { Main } from '@/base/Main';
import { Meta } from '@/layouts/Meta';

import About from '../components/index/About';
import Hero from '../components/index/Hero';
import Matched from '../components/index/Matched';

const Index = () => {
  return (
    <>
      <Main
        meta={
          <Meta
            title="TransCIIT Project"
            description="Matching the needs of climate entrepreneurs with the skills of master's students"
          />
        }
        name={'home'}
      >
        <div className="relative w-full items-center justify-center overflow-x-hidden lg:py-20 xl:pt-10 xl:pb-6">
          <div>
            <Hero
              hero="Transforming Climate Innovation Ecosystems through Inclusive
Transdisciplinarity"
              herodes="Matching the needs of climate entrepreneurs with the skills of master's students"
            />
          </div>

          <About />
          <Matched />
        </div>
      </Main>
    </>
  );
};

export default Index;
