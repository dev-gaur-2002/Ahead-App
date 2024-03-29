"use client";

import { motion } from "framer-motion";
import Shop from "./Shop";
import UI_Image from "./Image/UI_Image";

const Footer = () => {
    return (
        <motion.section
            initial={{ y: 40, opacity: 0 }}
            transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                stiffness: 50,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24  border-t-4 w-[99vw] flex justify-center items-center "
        >
            <div className="md:px-40 flex  md:mt-24 mt-12 font-[Montserrat] flex-col w-[80%] justify-center items-center gap-4">
                <UI_Image
                    src="/assets/logo.png"
                    width={55}
                    height={55}
                    alt="Logo"
                    style={{ cursor: "pointer" }}
                />
                <h1 className="font-bold text-3xl text-[#6B4DEE] ">ahead</h1>

                <div className="flex justify-center items-center my-4 flex-col md:flex-row">
                    <div className="flex  text-sm font-semibold items-center justify-center cursor-pointer">
                        <UI_Image
                            src="/assets/location.svg"
                            width={30}
                            height={30}
                            alt="location"
                            className="mr-2"
                        />
                        AugustStraBe 26, 10117 Berlin
                    </div>
                    <div className="flex text-sm font-semibold items-center justify-center ml-12 cursor-pointer">
                        <UI_Image
                            src="/assets/mail.svg"
                            width={30}
                            height={30}
                            alt="mail"
                            className="mr-2"
                        />
                        hi@ahead-app.com
                    </div>
                </div>
                <Shop />
                <p className="flex text-sm font-semibold my-4 text-[#535353]">
                    &copy; 2023 Ahead app.All rights reserved
                </p>
            </div>
        </motion.section>
    );
};

export default Footer;
