import React from 'react';
import { FaArtstation, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { Img } from './styled-components/StyledComponents';
const Hero = () => {
  return (
    <div className='min-h-screen bg-myGray font-pops relative'>
      <Img
        src='Vector.png'
        className='absolute w-[50%] brightness-75 left-0 -top-8 z-0'
      />
      <Img
        src='tince1.png'
        className='absolute w-[30%] brightness-75 left-[28%] top-0'
      />
      <Img
        src='Oval.png'
        className='absolute z-10 right-0 bottom-[22%] w-[37%] brightness-75'
      />

      <div className='web-width flex flex-col md:flex-row pt-36 relative'>
        {/* text-image */}
        <div className='w-1/2  flex flex-col '>
          <h1 className='text-8xl text-myNeutral font-semibold' id='tina-name'>
            Christina Vay.
          </h1>
          <div className='flex mt-48 gap-8'>
            <FaInstagram size={30} color='#f4f4f4' />
            <FaFacebookSquare size={30} color='#f4f4f4' />
            <FaArtstation size={30} color='#f4f4f4' />
          </div>
        </div>
        <div className=' w-1/2 ml-48 flex flex-col'>
          <h1 className='text-neutral-400 text-xl mb-5'>-Introduction</h1>
          <h2 className='text-myWhite text-4xl font-medium'>
            Creative Art Director
          </h2>
          <p className='text-neutral-400 my-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            itaque delectus quas animi sint perspiciatis, praesentium vitae
            rerum facilis cupiditate.
          </p>
          <div className=''>
            <button className=' font-medium rounded-xl px-6 bg-transparent py-2 text-yellow-500 outline outline-yellow-500 hover:bg-yellow-500 hover:text-neutral-900 transition-all duration-300 hover:duration-300'>
              Click Me
            </button>
          </div>
        </div>

        {/* description */}
      </div>
      <div className=' w-full h-80 bg-zinc-800 mt-12 z-0'>
        <div className='flex items-center justify-center mx-auto'>
          <h1 className='text-neutral-300'>Clients</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
