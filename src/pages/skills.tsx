import { Pages } from "@/common/enums";
import Header from "@/components/Header";
import SocialMediaBar from "@/components/SocialMediaBar";
import React, { useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const skillsHeaderText = 'Skills are built by repeatedly performing boring stuff over a long period of time...'
const mySkillsIntroText = `Since I graduated with a CS degree, most of my expertise lies in tech related stuff. Hopefully it matches with the job description, in case you are a recruiter 😁`
const proTipText = 'Pro tip : '
const useMouseWheelForHorizontalScrollingText = `Use Shift+MouseWheel for horizontal scrolling if you are viewing this page from a PC (I've removed the scrollbar because of it's annoying style 😅) `;
const technologyFrameworksHeaderText = `Technology Frameworks`;

const languagesHeaderText = `Languages`;

const technologyFrameworkSkills = [
  {
    logoPath: "./ReactLogo.png",
    name: "React / React Native",
    period: "2020 - present",
    bodyPara: `I've been developing webpages and mobile apps with React for over 3 years now, although not consistently. Even in my workplace, we use Preact, which is almost the same as React, except for some minor changes in the architecture. Some of my works accomplished with this technology include :`,
    bodyBulletPoints: [
      "Workout Tracker App (Native) - To track the number of sets and weights performed per exercise",
      "Portfolio Website",
    ],
  },
  {
    logoPath: "./FlutterLogo.png",
    name: "Flutter",
    period: "2021 - present",
    bodyPara: `One of the main reasons I switched to Flutter was it's performance compared to React Native. Although Flutter is comparatively complex than React Native, who cares?. In my case, I wanted to develop a complex application for myself, which is more performance oriented. I developed 2 mobile apps with it, namely :`,
    bodyBulletPoints: [
      "DynStocks - a Automated stock trader App. This is the performance oriented app that I was talking about.",
      "TODO App - Before you say it's cliche, I made this app just for the purpose of learning Flutter, can't consider it as a project to be honest",
    ],
  },
  {
    logoPath: "./AndroidStudioLogo.png",
    name: "Android Studio",
    period: "2018-2020",
    bodyPara: `I initially started developed apps using Android Studio, for my college project. To be honest, I would've never preferred this over React Native / Flutter if not for the subject. Yes it's performance efficient, but it's only Android Native, and the even to make a simple async API call, the code is very complex.`,
    bodyBulletPoints: [],
  },
  {
    logoPath: "./TensorflowLogo.png",
    name: "Tensorflow",
    period: "2020-2021",
    bodyPara: `During my final semesters, I became very curious AI, and deeply interested in Tensorflow, for which I started off by taking courses from DeepLearning.ai from Laurence and Andrew NG. I completed a couple of started projects, namely:`,
    bodyBulletPoints: [
      "Semantic Text Elements Recognition from Handwritten Documents.",
      "Pneumonia detection from XRays of Lungs.",
    ],
  },
  {
    logoPath: "./FlaskLogo.png",
    name: "Flask",
    period: "2022 - present",
    bodyPara: `I predominantly used Flask for developing the APIs, needed for the DynStock Application. The Stock Trader I used offered only Python Libararies at the time of development, and hence I had to use Flask. Learning Flask was very easy, as I already had some experience developing APIs with NodeJS and Express`,
    bodyBulletPoints: [],
  },
];

const languagesSkills = [
  {
    name: "Pro",
    bodyBulletPoints: ["HTML", "CSS", "Typescript"],
  },
  {
    name: "Intermediate",
    bodyBulletPoints: ["C++", "Java", "Python"],
  },
  {
    name: "Beginner",
    bodyBulletPoints: ["SQL", "Dart"],
  },
];

function Skills() {
  return (
    <>
      <Helmet>
        <body className={`bg-blue1`}></body>
      </Helmet>
      {/* <SocialMediaBar /> */}
      <Header currentPage={Pages.Skills} isBackgroundBlue={true} />
      <motion.div className={`text-center text-white text-6xl font-rakkas sm:m-5 md:m-20 mb-0 z-50`} 
      initial={{y: "-100vh", opacity:0}}
      animate={{opacity:1, x:0, y:0}} transition={{duration:0.5}}>
        {skillsHeaderText}
      </motion.div>
      <motion.div className={`ml-20 mr-20 mt-10 text-brown3 text-left text-3xl font-timesNewRoman z-50`}
      initial={{y: "-100vh", opacity:0}}
      animate={{opacity:1, x:0, y:0}} transition={{delay: 0.5, duration:0.5}}>
        {mySkillsIntroText}
      </motion.div>
      <motion.div className={`ml-20 mr-20 mt-10 text-white font-bold italic z-50`}
      initial={{y: "-100vh", opacity:0}}
      animate={{opacity:1, y:0}} transition={{delay: 0.5, duration:0.5}}>
        <span>{proTipText}</span>
        <span>{useMouseWheelForHorizontalScrollingText}</span>
      </motion.div>
      <motion.div
        animate={{ x: 0, y: 0 }}
        initial={{ y: "-100vh" }}
        transition={{ ease: "backInOut", duration: 0.25, delay: 1 }}
        className={`font-orelegaOne text-white text-4xl text-left ml-36 mr-36 mt-10 z-50`}
      >
        <span>{technologyFrameworksHeaderText}</span>
      </motion.div>
      <motion.div
        animate={{ x: 0, y: 0 }}
        initial={{ y: "-100vh" }}
        transition={{ ease: "backInOut", duration: 0.25, delay: 1.5 }}
        className={`p-5 overflow-x-scroll flex scrollbar-none z-10`}
      >
        {technologyFrameworkSkills.map((technologyFrameworkSkill) => {
          return (
            <div
              className={`group hover:md:min-w-full hover:md:max-w-full hover:lg:min-w-full hover:lg:max-w-full hover:xl:min-w-3/5 hover:xl:max-w-3/5  hover:shadow-md hover:shadow-white hover:bg-white
          h-3/5 sm:min-w-full sm:max-w-full md:min-w-3/4 md:max-w-3/4 lg:min-w-3/4 lg:max-w-3/4 xl:min-w-2/5 xl:max-w-2/5 inline-block shadow-md p-10 shadow-black rounded-5xl ml-10 bg-blue1`}
            >
              <div>
                {technologyFrameworkSkill.logoPath && (
                  <img
                    className={
                      "inline-block m-5 -translate-y-3 w-32 group-hover:w-48"
                    }
                    src={technologyFrameworkSkill.logoPath}
                  ></img>
                )}
                <div className={"inline-block"}>
                  <span
                    className={`
              group-hover:text-blue1 group-hover:text-5xl 
              text-white font-rakkas text-2xl `}
                  >
                    {technologyFrameworkSkill.name}
                  </span>
                  <br />
                  <span
                    className={`
              group-hover:text-brown2 group-hover:text-lg 
              text-brown3 font-timesNewRoman text-md font-bold`}
                  >
                    {technologyFrameworkSkill.period}
                  </span>
                </div>
              </div>
              <div
                className={`font-palatinoLinotype 
          group-hover:text-blue1 group-hover:text-xl group-hover:font-bold
          text-white text-lg inline-block`}
              >
                {technologyFrameworkSkill.bodyPara && (
                  <div className="text-center">
                    {technologyFrameworkSkill.bodyPara}
                  </div>
                )}
                <br></br>
                <ol className="list-disc pl-5">
                  {technologyFrameworkSkill.bodyBulletPoints.map(
                    (bulletPoint) => {
                      return <li>{`${bulletPoint}`}</li>;
                    }
                  )}
                </ol>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        animate={{ x: 0, y: 0 }}
        initial={{ y: "-100vh" }}
        transition={{ ease: "backInOut", duration: 0.25, delay: 2 }}
        className={`font-orelegaOne text-white text-4xl text-left ml-10 z-50`}
      >
        <span>{languagesHeaderText}</span>
      </motion.div>
      <motion.div
        animate={{ x: 0, y: 0 }}
        initial={{ y: "-100vh" }}
        transition={{ ease: "backInOut", duration: 0.25, delay: 2.5 }}
        className={`p-5 overflow-x-scroll flex scrollbar-none z-10`}
      >
        {languagesSkills.map((languageSkill) => {
          return (
            <div
              className={`group hover:md:min-w-1/2 hover:md:max-w-1/2 hover:lg:min-w-1/2 hover:lg:max-w-1/2 hover:xl:min-w-1/4 hover:xl:max-w-1/4  hover:shadow-md hover:shadow-white hover:bg-white
          h-3/5 sm:min-w-1/2 sm:max-w-full md:min-w-1/3 md:max-w-1/3 lg:min-w-1/4 lg:max-w-1/4 xl:min-w-1/5 xl:max-w-1/5 inline-block shadow-md p-10 shadow-black rounded-5xl ml-10 bg-blue1`}
            >
              <div>
                <div className={"inline-block"}>
                  <span
                    className={`
              group-hover:text-blue1 group-hover:text-5xl 
              text-white font-rakkas text-2xl`}
                  >
                    {languageSkill.name}
                  </span>
                </div>
              </div>
              <div
                className={`font-palatinoLinotype 
          group-hover:text-blue1 group-hover:text-xl group-hover:font-bold
          text-white text-lg inline-block`}
              >
                <ol className="list-disc pl-5">
                  {languageSkill.bodyBulletPoints.map((bulletPoint) => {
                    return <li>{`${bulletPoint}`}</li>;
                  })}
                </ol>
              </div>
            </div>
          );
        })}
      </motion.div>
      <footer>
    <Footer isBackgroundBlue={true}/>

    </footer>
    </>
  );
}

export default Skills;
