import React, { useState } from 'react';
import { motion } from "framer-motion";

export interface IExperienceList {
    title: string;
    company: string;
    period: string;
    bodyPara: string;
    bodyBulletPoints: string[];
}

export interface IAccordionProps extends IExperienceList {
    isTextWhite: boolean;
}

const Accordion = ({title, company, period, bodyPara, bodyBulletPoints, isTextWhite}: IAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`w-4/5 p-5
    ${isTextWhite ? 'bg-blue1 text-white' : 'bg-blue2 text-blue1'}`}>
        <div className={`flex justify-between`}>
            <div className={``}>
                <motion.button onClick={() => {
                    console.log(isOpen);
                    setIsOpen(!isOpen);
                }} animate={{rotateZ: isOpen ? 90 : 0}}>
                    <img src={isTextWhite ? './TriangleWhite.png' : './TriangleBlack.png'} className={`inline-block w-10 -translate-y-2 mr-10 ${isTextWhite ? 'fill-white' : 'fill-black'}`}
                        />
                </motion.button>
                <span className={`font-merriweather font-bold text-3xl`}>
                    {title + " - "}
                </span>
                <span className={`font-merriweather italic font-bold text-4xl`}>
                    {company}
                </span>
            </div>
            <div className={`font-timesNewRoman font-bold text-xl`}>
                {period}
            </div>
        </div>
    </div>
  )
}

export default Accordion