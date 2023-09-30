"use client";

import { motion } from "framer-motion";
import Shop from "./Shop";
import UI_Image from "./Image/UI_Image";

const HeroSection = () => {
    return (
        <section className="md:px-40 px-4 flex justify-center items-center mt-10 font-[Montserrat] ">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#ECE8FB] w-[95%] md:h-[80vh] rounded-3xl flex flex-col md:flex-row p-6 gap-8 md:gap-0 "
            >
                <div className="flex flex-col justify-center items-start flex-1 px-5 py-2">
                    <motion.p
                        initial={{ x: -20, opacity: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                        }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl text-[#323232] font-semibold ml-1"
                    >
                        Ahead app
                    </motion.p>

                    <motion.h1
                        initial={{ x: -20, opacity: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                        }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:text-6xl text-3xl font-bold text-[#151515] mt-3"
                    >
                        Master your life by mastering emotions
                    </motion.h1>

                    <div className="flex items-center mt-10">
                        <Shop />
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            transition={{
                                delay: 0.8,
                                duration: 0.8,
                            }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center items-start md:w-40 w-28 h-12 rounded-md ml-5 gap-1"
                        >
                            <div className="flex justify-start">
                                <UI_Image
                                    src="/assets/symbolstar.png"
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <UI_Image
                                    src="/assets/symbolstar.png"
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <UI_Image
                                    src="/assets/symbolstar.png"
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <UI_Image
                                    src="/assets/symbolstar.png"
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <UI_Image
                                    src="/assets/symbolstar.png"
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                            </div>
                            <p className="text-xs font-semibold text-black">
                                100+ App Store Reviews{" "}
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className='flex flex-1 justify-center items-center relative px-4 py-2'>
             

                <div className='absolute hidden md:flex h-[450px] w-[450px] rounded-full border-4 border-dashed border-[#f6f6fd] justify-center items-center z-0 '>
                    <div className='absolute h-72 w-72 rounded-full bg-[#DED6F8] '></div>
                </div>

                <div className="container justify-center items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437" className='relative'>
                    <motion.path
                    d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
                    fill="transparent"
                    strokeWidth="12"
                    stroke="rgba(255, 255, 255, 0.0)"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                </svg>
                <motion.div
                    className="boo-1 absolute top-[10px] z-50"
                    initial={{ offsetDistance: "30%", scale: 2 }}
                    animate={{ offsetDistance: "50%", scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} 
                >
                    <UI_Image
                        src='/assets/HeroPokemon.png'
                        width={75}
                        height={75}
                        alt="boo-1"
                    />
                </motion.div>

                <motion.div
                    className="boo-2 absolute top-[-10px] z-50"
                    initial={{ offsetDistance: "35%", scale: 2 }}
                    animate={{ offsetDistance: "60%", scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    <UI_Image
                        src='/assets/HeroPokemon.png'
                        width={75}
                        height={75}
                        alt="boo-2"
                    />
                </motion.div>

                <motion.div
                    className="boo-3 absolute top-[-25px] z-50"
                    initial={{ offsetDistance: "0%", scale: 2 }}
                    animate={{ offsetDistance: "100%", scale: 1}}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    <UI_Image
                        src='/assets/HeroPokemon.png'
                        width={75}
                        height={75}
                        alt="boo-4"
                    />
                </motion.div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.3, rotate: 5, zIndex: 60}}
                    initial={{ scale: -0.3, opacity: 0 , rotate: 2, zIndex: 10}}
                    transition={{
                        delay: 0.1,
                        type: "spring",
                        damping: 5,
                        stiffness: 50
                    }}
                    whileInView={{ scale: 1.2, opacity: 1 }}
                    viewport={{ once: true }}
                    className='flex justify-center items-center z-10 absolute '
                >
                    <UI_Image src='/assets/mobile.png' width={180} height={180} alt='mobile' className='md:scale-100 scale-75 drop-shadow-xl'/>
                </motion.div> 
            </div>
        </motion.div>

    </section>
  )
};

export default HeroSection;
