
import homepage from '../assets/homepage.jpg'
import { Gradient } from './ui/Gradient';
import { BackgroundCircles } from './ui/Hero';
import curve from "../assets/curve.png";
import Buttonn from './ui/Buttonn';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

const Home = () => {
useGSAP(() => {
gsap.to('#title', {opacity:1, y:10,x:10, duration:1})
},[])
  const handleClick= (event) => {
    event.preventDefault();
    const section = document.querySelector("#about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  }
}
  return (  
    
    <>
 
        <section id='home'
    className="pt-[7rem] -mt-[5.25rem] "
  >
    <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative" >
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
        <h1 id='title' className="opacity-0 font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
      Професионално почистване{" "}
          <span className="inline-block relative">
        <span className='text-blue-500'>CL</span>eaner🧹
            <img
              src={curve}
              className="absolute top-full w-full left-0  "
              width={624}
              height={28}
              alt="curve"
            />
          </span>
        </h1>
        <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto mb-6 text-n-2 lg-mb-8">
        Нашата Мисия е да Ви Предоставим Чиста и Здравословна Среда, в Която да Живеете и Работите!
        </p>
        <Buttonn onClick={handleClick} className='rounded-lg bg-blue-500 text-white hover:bg-blue-400 '  >
         
        <a  href="#about">
          Започнете сега
        </a>
        </Buttonn>

      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
     
         

            <div className=" rounded-b-[0.9rem] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] z-10 lg:aspect-[1024/490]">
              <img
                src={homepage}
                className="w-full scale-[1.7] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                width={1024}
                height={490}
                alt="homepage"
              />
             
             
            </div>
         
          <Gradient />
        </div>

        
        <BackgroundCircles />
      </div>
   
    </div>
    
  </section>
    </>)
   
}

export default Home
