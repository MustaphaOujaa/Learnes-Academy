import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-neo-bg py-[60px] px-[5%] min-h-[80vh] flex items-center">
      <div className="flex items-center justify-between gap-[50px] max-w-[1200px] mx-auto flex-col-reverse lg:flex-row text-center lg:text-left">
        
        <div className="flex-1 relative w-full">
          <div className="relative z-10 mx-auto max-w-[550px] lg:mx-0">
             <Image 
               src="/assets/images/image.png" 
               alt="Children playing" 
               width={550} 
               height={550} 
               className="w-full rounded-[20px] border border-[#333] block"
               priority
             />
             <div className="absolute -top-[20px] -left-[20px] w-[100px] h-[100px] bg-[radial-gradient(var(--color-neo-orange)_2px,transparent_2px)] bg-[length:15px_15px] -z-10"></div> 
          </div>
        </div>
        
        <div className="flex-[1.2]">
          <span className="inline-block px-4 py-2 border border-[#333] rounded-lg text-sm font-medium mb-5">Welcome to Little Learners</span>
          <h1 className="text-[36px] lg:text-[48px] font-extrabold text-neo-text leading-[1.2] mb-5">
            Where Young Minds Blossom and <span className="text-neo-orange block mt-2">Dreams Take Flight.</span>
          </h1>
          <p className="text-base text-neo-text-gray leading-[1.6] mb-10">
            Our curriculum is carefully designed to foster a love for learning, curiosity, and creativity in every child.
          </p>
          
          <div className="flex bg-white border border-[#333] rounded-xl p-5 gap-[30px] shadow-neo justify-center flex-wrap lg:justify-start">
             <div>
                <h3 className="text-[28px] text-neo-text font-bold">+7000</h3>
                <p className="text-sm mt-[5px] text-neo-text-gray">Children Transformed</p>
             </div>
             <div>
                <h3 className="text-[28px] text-neo-text font-bold">+37</h3>
                <p className="text-sm mt-[5px] text-neo-text-gray">Years Experience</p>
             </div>
             <div>
                <h3 className="text-[28px] text-neo-text font-bold">+15</h3>
                <p className="text-sm mt-[5px] text-neo-text-gray">Qualified Teachers</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
