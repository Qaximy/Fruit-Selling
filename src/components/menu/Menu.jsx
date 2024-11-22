import { div, title } from 'framer-motion/client'
import React from 'react'
import fruit1 from '../../assets/apple.png'
import fruit2 from '../../assets/orange.png'
import fruit3 from '../../assets/avocado.png'
import fruit4 from '../../assets/cherry.png'
import { delay,motion } from 'framer-motion'
import { FadeLeft } from '../../utility/Animation'
const MenuData=[
    {
       id :1,
       title :"Fresh and apples",
        link:"/",
        price:"$2.00",
        img:fruit1,
        delay:0.3,
    },
    {
        id :2,
        title :"Fresh Oranges",
         link:"/",
         price:"$3.00",
         img: fruit2,
         delay:0.6,
     },
     {
        id :3,
        title :"Fresh Avocado",
         link:"/",
         price:"$4.00",
         img:fruit3,
         delay:0.9,
     },
     {
        id :4,
        title :"Fresh Charries",
         link:"/",
         price:"$5.00",
         img:fruit4,
         delay:1.2,
     }
]

const Menu = () => {
  return (
   <section>
    <div className='container pt-12 pb-20'>
      <motion.h1 initial ={{opacity:0, x:-200}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1,delay:0.3}}
       className='text-2xl font-bold text-left pb-10 uppercase'>
        Our Menu
      </motion.h1>
      <motion.div 
     variants={FadeLeft(Menu.delay)}
     initial ='hidden'
     whileInView={'visible'}
    whileHover={{scale:1.1}}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {
            MenuData.map((menu)=>(
                <div className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3' >
                    <img src={menu.img} alt=""  className='w-[60px] mb-4 scale-125 transform -translate-y-6'/>
                    <div>
                        <h1 className='text-lg font-semibold '>{menu.title}</h1>
                        <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                    </div>
                </div>
            ))
        }
      </motion.div>
    </div>
   </section>
  )
}

export default Menu