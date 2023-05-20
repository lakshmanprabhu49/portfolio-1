import React, { useState } from "react";
import { motion } from "framer-motion";

export interface IExperienceList {
  title: string;
  company: string;
  period: string;
  technologiesUsed: string;
  bodyPara: string;
  bodyBulletPoints: string[];
}

const accordionMotionVariants = {
  open: { height: "50%" },
  closed: { height: "0" },
};

const accordionBodyVariants = {
    open: { opacity: 1, transition: {duration: 1}},
    closed: { opacity: 0, transition: { duration: 0}}
}
export interface IAccordionProps extends IExperienceList {
  isTextWhite: boolean;
}

const Accordion = ({
  title,
  company,
  period,
  technologiesUsed,
  bodyPara,
  bodyBulletPoints,
  isTextWhite,
}: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-4/5 p-10 pb-5 mt-10  rounded-t-3xl rounded-b-5xl
    ${isTextWhite ? "bg-blue1 text-white" : "bg-blue2 text-blue1"}`}
    >
      <div>
        <div className={`flex justify-between`}>
          <div className={``}>
            <motion.button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              animate={{ rotateZ: isOpen ? 90 : 0 , x: isOpen ? '-25px' : 0, y: isOpen ? '10px' : 0}}
              transition={{ duration: 0.1 }}
            >
              <img
                src={
                  isTextWhite ? "./TriangleWhite.png" : "./TriangleBlack.png"
                }
                className={`inline-block w-10 -translate-y-2 mr-10 ${
                  isTextWhite ? "fill-white" : "fill-black"
                }`}
              />
            </motion.button>
            <span className={`font-merriweather font-bold sm:text-2xl xl:text-3xl`}>
              {title + " - "}
            </span>
            <span className={`font-merriweather italic font-bold sm:text-2xl xl:text-3xl`}>
              {company}
            </span>
          </div>
          <div className={`font-timesNewRoman font-bold text-xl`}>{period}</div>
        </div>
        <div className={`ml-20 font-rakkas text-2xl ${isTextWhite ? 'text-brown3' : 'text-brown2'}`}>{technologiesUsed}</div>
        <motion.div
          className={`p-5 font-palatinoLinotype text-xl `}
          variants={accordionMotionVariants}
          animate={isOpen ? "open" : "closed"}
        >
          {true && (
            <>
              <motion.div 
                variants={accordionBodyVariants}
                // transition={{duration: isOpen ? 0 : 1}}
                animate={isOpen ? "open" : "closed"}>{bodyPara}</motion.div>
              <motion.ol className="list-disc pl-5"
              variants={accordionBodyVariants}
              // transition={{duration: 1}}
              animate={isOpen ? "open" : "closed"}>
                {bodyBulletPoints.map((bulletPoint) => {
                  return <li>{`${bulletPoint}`}</li>;
                })}
              </motion.ol>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Accordion;
