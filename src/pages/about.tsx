import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import AboutUs from '../components/about/AboutUs';
import Hero from '../components/index/Hero';

const About = () => (
  <Main
    meta={
      <Meta
        title="About Us | TransCIIT Project"
        description="Matching the needs of climate entrepreneurs with the skills of master's students"
      />
    }
  >
    <div className="relative w-full items-center justify-center overflow-x-hidden lg:py-20 xl:pt-10 xl:pb-6">
      <Hero hero="Who We Are" herodes="TransCIIT Project" />
      <AboutUs />
    </div>
  </Main>
);

export default About;
