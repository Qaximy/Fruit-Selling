import React from 'react'
import banner1img from '../../assets/banner-bg.jpg'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/Animation'
import { IoBagHandleOutline } from 'react-icons/io5'

const bgStyle = {
  backgroundImage: `url(${banner1img})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className=" container mb-12">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* banner img */}
        <div className=""></div> {/* Added padding here */}
        {/* brand info */}
        <div className="flex flex-col justify-center py-10">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-2xl lg:text-5xl font-bold uppercase"
            >
              Get Fresh <br />
              Fruits Today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>

            {/* button */}
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandleOutline />
                </span>
                Order Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
