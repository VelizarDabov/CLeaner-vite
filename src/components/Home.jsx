import homepage from '../assets/homepage.jpg'
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from '../constants';
import { Gradient } from './ui/Gradient';

const Home = () => {
  return (
    <div className='max-w-2xl mx-auto relative'>
      <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <img src={homepage} className='w-full'/>
     
        <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop:-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li key={index} className="p-5">
                        <img src={icon} width={24} height={25} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>   
                <Gradient />
                 </div>
  )
}

export default Home
