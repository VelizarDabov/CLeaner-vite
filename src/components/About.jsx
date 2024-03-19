
import serviceCard from "../assets/serviceCard.jpg";
import {  steps } from "../constants";
import cleen2 from "../assets/clean1.jpg";
import { PhotoChatMessage } from "./ui/ChatMessage";
import { VideoChatMessage } from "./ui/VideoChat";
import Card from "./ui/Card";
const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="mt-10 max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
        <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
          {" "}
          Защо да изберете нас...
        </h1>
<p className="font-light text-[0.975rem] leading-6 md:text-[1.3rem] mb-[3rem] mt-[1rem] text-gray-700">Основната ни цел е да предлагаме висококачествено обслужване и безупречно отношение към клиентите ни.</p>
        <div className="relative">
          {/* <div className="relative z-20 flex items-center h-[39rem] mb-5 p-8 border border-gray-500/20 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] ">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="cleaning"
                height={730}
                src={serviceCard}
              />
            </div>
            <div className="relative z-20 max-w-[17rem] ml-auto">
              <h4 className="mb-4 text-[2rem] leading-normal">
                Какво предлагаме ние
              </h4>

              <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                {chooseUsAdvantages.map((type, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-gray-500"
                  >
                    <div className="border obrder-b rounded-full bg-blue-500 p-1">
                      <Check width={24} height={24} className="text-white" />
                    </div>

                    <p className="ml-4 text-xs">{type}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          <div className="flex flex-wrap justify-center">
      {steps.map((step) => (
        <Card key={step.id} icon={step.icon} title={step.title} description={step.description} />
      ))}
    </div>
          <div className="relative z-20 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-gray-300 rounded-3xl overflow-hidden hidden lg:flex">
              <div className="inset-0 absolute">
                <img
                  src={cleen2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="clean"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-gray-100/0 to-gray-100/90 lg:p-15">
                <h4 className="text-xl">Галерия</h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-gray-500">
                Ако сте заинтересовани, кликнете <a href="#gallery" className="text-blue-500 underline">тук</a>, за да разгледате нашата галерия.
                </p>
                <div className="z-30">
                  <PhotoChatMessage />
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-200/80 rounded-3xl overflow-hidden lg:min-h-[40rem]">
              <div className="py-5 px-4 xl:px-8">
                <h4 className="text-[2rem] leading-normal mb-4">Осигуряваме най-добрите услуги
за нашите клиенти</h4>
                <p className=" mb-[2rem] text-gray-700">
                Ние почистваме всичко и навсякъде – от най-малката тоалетна, до огромни индустриални обекти. Няма да откриете фиксирани цени за отделните услуги в сайта, нито можем да Ви кажем „ориентировъчна“ цена по телефона. 
                </p>
              </div>

              <div className="relative h-[20rem] bg-gray-500 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={serviceCard}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
