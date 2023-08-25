import { Main } from "@/base/Main";
import WhoWeAre from "@/components/about/WhoWeAre";
import Partners from "@/components/index/Partners";
import { Meta } from "@/layouts/Meta";

import bg from "../../public/assets/images/hero/cover.jpg";
import AboutUs from "../components/about/AboutUs";

const About = () => (
  <Main
    meta={
      <Meta
        title="About Us | TransCIIT Project"
        description="Matching the needs of climate entrepreneurs with the skills of master's students"
      />
    }
    name={"about"}
  >
    <div className="relative w-full items-center justify-center overflow-x-hidden xl:pb-6">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="bg-indigo-700/80">
          <div className="container mx-auto py-32 text-center sm:px-4 ">
            <div className="hidden text-4xl font-extrabold leading-xtight tracking-tight text-white sm:block sm:text-5xl md:text-6xl xl:text-6xl">
              <span className="block">About Us</span>
            </div>

            <div className="mx-auto mt-6 max-w-lg text-center text-base text-gray-100 sm:text-base md:mt-12 md:max-w-xl md:text-lg xl:text-xl"></div>
            <div className="mt-8 text-sm text-gray-300">
              Learn more about Us
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <AboutUs />
      <WhoWeAre />
    </div>
  </Main>
);

export default About;
