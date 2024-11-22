import React from 'react'
import bgimg from '../../assets/fruit-plate2-BK55XwYa.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../../utility/Animation'
const Banner2 = () => {
  return (
   <section className=''>
    <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24'>
        {/* banner img */}
       
        {/* brand info */}
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                <motion.h1 
                   variants={FadeUp(0.5)}
                   initial ='hidden'
                   whileInView={'visible'}
                   viewport={{once: true}}

                className='text-3xl lg:text-6xl font-bold uppercase'>Online fruit store</motion.h1>
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
                Download App
              </button>
            </motion.div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <motion.img 
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
          viewport={{once:true}}
            src={bgimg} alt=""  className='w-[350px] md:max-w-[500px] h-full object-cover drop-shadow'/>
        </div>
    </div>
   </section>
  )
}

export default Banner2