

import { services } from "../constants";

const Service = () => {
  return (
    <section id="service" className="mt-20 bg-smokewhite">
       
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2 ">
        <h1 className=" font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
          Chat Smarter, Not Harder with Brainwave"
        </h1>

        <div className="flex flex-wrap gap-10 mt-10 mb-10">
          {services.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.type}</h5>
                <p className="body-2 mb-6 text-gray-400"> {item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.imageUrl}
                    width={48}
                    height={48}
                    alt={item.name}
                  />
                  <p className="ml-auto font-full text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
              
          
                </div>
              </div>
         
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
        
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
