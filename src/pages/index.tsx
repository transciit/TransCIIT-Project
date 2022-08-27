/* eslint-disable tailwindcss/no-custom-classname */

import { Splide, SplideSlide } from '@splidejs/react-splide';

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
            <Splide aria-label="My Favorite Images">
              <SplideSlide>
                <img src="/assets/images/2.png" alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src="/assets/images/4.png" alt="Image 2" />
              </SplideSlide>
            </Splide>
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
