import React from 'react'
import bgimg from '../../assets/fruits-splash-BeZYLA1d.png'
import { motion } from 'framer-motion'
import { FadeLeft, FadeUp } from '../../utility/Animation'
const Banner = () => {
  return (
   <section className='bg-secondary/10'>
    <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
        {/* banner img */}
        <div className='flex justify-center items-center'>
            <motion.img 
            initial ={{opacity:0, scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:"spring",stiffness:100, delay:0.2}}
          
            src={bgimg} alt=""  className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'/>
        </div>
        {/* brand info */}
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                   variants={FadeUp(0.5)}
                   initial ='hidden'
                   whileInView={'visible'}
                   viewport={{once: true}}

                className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info</motion.h1>
                <motion.p 
                 variants={FadeUp(0.7)}
                 initial ='hidden'
                 whileInView={'visible'}
                 viewport={{once: true}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt veniam dolorum est possimus, natus hic, similique eos vero consequuntur delectus exercitationem consectetur minima aliquam voluptates expedita perferendis quo fugit.</motion.p>
                <motion.p  
                variants={FadeUp(0.9)}
                   initial ='hidden'
                   whileInView={'visible'}
                   viewport={{once: true}}>
                    Lorem ipsum consectetur adipisicing elit. Illo 
                    exercitationem perspiciatis nam magnam amet culpa a inventore ducimus
                     architecto expedita.
                </motion.p>
                {/* button */}
                <motion.div
              variants={FadeUp(1, 1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">
                Learn More
              </button>
            </motion.div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Banner