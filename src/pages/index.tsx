/* eslint-disable tailwindcss/no-custom-classname */

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main c';

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
      >
        <div className="relative w-full items-center justify-center overflow-x-hidden lg:py-20 xl:pt-10 xl:pb-6">
          <Hero
            hero="Transforming Climate Innovation Ecosystems through Inclusive
Transdisciplinarity"
            herodes="Matching the needs of climate entrepreneurs with the skills of master's students"
          />
          <About />
          <Matched />
        </div>
      </Main>
    </>
  );
};

export default Index;
