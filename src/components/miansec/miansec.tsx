"use client"
import React from 'react'
import pccont from "../../../public/pccont.webp";
import mobcont from "../../../public/pccont.webp";
import { motion } from "framer-motion"
export default function Miansec() {
  return (
   <>
   <div className=" hidden  main-sec overflow-y-hidden md:flex justify-center items-center bg-cover bg-center h-screen w-full ">
        <motion.img
          className="h-screen "
          src={pccont.src}
          alt=""
          initial={{ opacity: 0, scale: 0.8  }}
        animate={{opacity: 1, scale: 1 }}
        transition={{ duration: 1 , ease: "easeIn"  }}
        />
      </div>
      <div className=" main-sec2 overflow-y-hidden flex md:hidden justify-center items-center bg-cover bg-center h-[70vh] w-full ">
        <motion.img
          className="h-[40vh] sm:h-[65vh] "
          src={mobcont.src}
          alt=""
          initial={{ opacity: 0, scale: 0.8  }}
        animate={{opacity: 1, scale: 1 }}
        transition={{ duration: 1 , ease: "easeIn"  }}
        />
      </div>
   </>
  )
}
