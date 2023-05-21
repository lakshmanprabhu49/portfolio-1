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
import { Pages } from "@/common/enums";
import { Helmet } from 'react-helmet';
import Footer from "@/components/Footer";
export default function Home() {

  const welcomeText = "As long as there are programs,          there are always bugs;          and so do software engineers.😁"
  const [welcomeTypewriterText, welcomeTypeWriterHelper] = useTypewriter({
    words: [welcomeText],
    typeSpeed: 40,
    onLoopDone() {
        setIsWelcomeTextDone(true)
    },
  })
  const [done, setDone] = useState(false);


  const introText = `Hello World, I'm Lakshman Prabhu, an introvert by character and hence a software developer by profession, and a daydreamer by birth. I usually don't caffeinate nor listen to music , cause just the thought of programming is motivating enough for me.  Thanks for taking the time to have a glance at my portfolio, I'll make sure that it's an interesting one ( or atleast , not a boring one).`
  const [introTypewriterText, introTypeWriterHelper] = useTypewriter({
    words: [introText],
    typeSpeed: 70,
  });
  if (typeof document !== 'undefined') {
    document.body.classList.add('bg-blue1');
  }
  
  const [isWelcomeTextDone, setIsWelcomeTextDone] = useState(false);
  
  useEffect(() => {
    if (!isWelcomeTextDone) return;
    setTimeout(()=> {
      setDone(true);
    }, 1000);
  },[isWelcomeTextDone])

  return <div className={`w-full`}>
  <Helmet>
    <body className={`bg-blue1`}></body>
    
  </Helmet>
  
    <Header currentPage={Pages.Home} isBackgroundBlue={true} />
    <div className={`font-orelegaOne text-white text-4xl text-center mt-10 mb-10 sm:ml-5 sm:mr-5 lg:ml-10 lg:mr-10 `}>
     <span>{welcomeTypewriterText}</span>
     {!isWelcomeTextDone && <Cursor cursorColor="white" />}
    </div>
    {isWelcomeTextDone && <div className={`flex sm:flex-col lg:flex-row justify-center items-center`}>
        <motion.div className={` bg-gray-700/[.7]  border-white rounded-3xl inline-block sm:ml-5 sm:mr-5 sm:p-5 lg:ml-10 lg:mr-10 lg:p-10`} 
        animate={{x:0 ,y:0 }} 
        transition={{duration: 0.5, ease:"backOut"}}
        initial={{x: "-100vw"}}>
        <span className={`font-palatinoLinotype text-white opacity-100 lg:text-lg p-10 `}>
          {introText}
        </span>
        </motion.div>
        <img
            src={`./PortfolioCoverPic.png`}
            className={`inline-block p-10 sm:w-9/10 lg:w-2/5`}
          ></img>
      </div>}
  {/* <SocialMediaBar/> */}
  <footer>
    {done && 
    <Footer isBackgroundBlue={true}/>
    }
    

    </footer>
  </div> 
}
