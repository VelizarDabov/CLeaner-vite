import { Check} from 'lucide-react'
import cleaner1 from '../assets/cleaner1.jpg'
import { chooseUsAdvantages } from '../constants'
import cleen2 from '../assets/cleen2.jpg'
import { PhotoChatMessage } from './ChatMessage'
const About = () => {
  return (
    <section id='about'>
        <div className='mt-10 max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]'>
            <h1 className='font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]'> Защо да изберете нас...</h1>
       
       <div className='relative'>
<div className='relative z-20 flex items-center h-[39rem] mb-5 p-8 border border-gray-500/20 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] '>
<div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
<img className='w-full h-full object-cover md:object-right' width={800} alt='cleaning' height={730} src={cleaner1}/>
</div>
<div className='relative z-20 max-w-[17rem] ml-auto'>
<h4 className='mb-4 text-[2rem] leading-normal'>Какво предлагаме ние</h4>

<ul className='font-light text-[0.875rem] leading-6 md:text-base'>
{chooseUsAdvantages.map((type, index)=> (
<li key={index} className='flex items-start py-4 border-t border-gray-500'>
    <div className='border obrder-b rounded-full bg-blue-500 p-1'>
    <Check width={24} height={24} className='text-white' />
    </div>

<p className='ml-4 text-xs'>{type}</p>
</li>
))}
</ul>
</div>
</div>
<div className='relative z-20 grid gap-5 lg:grid-cols-2'>
    <div className='relative min-h-[39rem] border border-gray-300 rounded-3xl overflow-hidden'>
<div className='inset-0 absolute'>
<img src={cleen2} className='h-full w-full object-cover' width={630} height={750} alt='clean'/>
</div>
<div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-gray-100/0 to-gray-100/90 lg:p-15'>
<h4>Photos</h4>
<p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
                <div className='z-30'>
                <PhotoChatMessage  />
                </div>
                
              
</div>
    </div>

</div>
       </div>
       
        </div>
    </section>
  )
}

export default About