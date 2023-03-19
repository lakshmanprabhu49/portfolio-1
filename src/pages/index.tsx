import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import ResumePic from '../assets/ResumePic.png';
import {motion} from 'framer-motion';
import { useTypewriter, Cursor} from "react-simple-typewriter";
import { useEffect, useState , useLayoutEffect} from "react";
import SocialMediaBar from "@/components/SocialMediaBar";
import { Slide } from "react-awesome-reveal";
import { Pages } from "@/common/enums";
import { Helmet } from 'react-helmet';
export default function Home() {

  const welcomeText = "As long as there are programs,          there are always bugs;          and so do software engineers.😁"
  const [welcomeTypewriterText, welcomeTypeWriterHelper] = useTypewriter({
    words: [welcomeText],
    typeSpeed: 70,
    onLoopDone() {
        setIsWelcomeTextDone(true)
    },
  })

  const introText = `Hello World, I'm Lakshman Prabhu, an introvert by character and hence a software developer by profession, and a daydreamer by birth. I usually don't caffeinate nor listen to music , cause just the thought of programming is motivating enough for me.  Thanks for taking the time to have a glance at my portfolio, I'll make sure that it's an interesting one ( or atleast , not a boring one).`
  const [introTypewriterText, introTypeWriterHelper] = useTypewriter({
    words: [introText],
    typeSpeed: 70,
  });
  if (typeof document !== 'undefined') {
    document.body.classList.add('bg-blue1');
  }
  
  const [isWelcomeTextDone, setIsWelcomeTextDone] = useState(false);
  return <>
  <Helmet>
    <body className={`bg-blue1`}></body>
  </Helmet>
  
  <SocialMediaBar/>
    <Header currentPage={Pages.Home} isBackgroundBlue={true} />
    <div className={`font-orelegaOne text-white text-4xl text-center ml-10 mr-36 mt-10 mb-10`}>
     <span>{welcomeTypewriterText}</span>
     <Cursor cursorColor="white" />
    </div>
    {isWelcomeTextDone && <div >
      
        <motion.div className={`sm:m-10 sm:mt-5 lg:mt-20 sm:ml-16 lg:ml-28 sm:w-2/5 lg:w-3/6 max-w-2xl bg-gray-700/[.7] sm:p-8 md:p-10 lg:p-16 border-2 border-white rounded-3xl inline-block mb-10`} 
        animate={{x:0 ,y:0 }} 
        transition={{duration: 0.5, ease:"backOut"}}
        initial={{x: "-100vw"}}>
        <span className={`font-palatinoLinotype text-white opacity-100 lg:text-lg p-10`}>
          {introText}
        </span>
        </motion.div>
        <motion.img animate={{x:0, y:0 , opacity: 1}}
        transition={{duration: 1, ease:"linear"}}
        initial={{opacity: 0}}
        className={`sm:w-2/5 lg:w-2/6 inline-block float-right`}
        src={`./PortfolioCoverPic.png`}></motion.img>
      </div>}
  </> 
}
