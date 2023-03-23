import { Pages } from "@/common/enums";
import Accordion, { IExperienceList } from "@/components/Accordion";
import Header from "@/components/Header";
import SocialMediaBar from "@/components/SocialMediaBar";
import React, { useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const experienceHeaderText = `Experience is a fancy word for covering up all the mistakes we've made in the past while learning.`
const experienceSubHeaderText = `Most of my experience falls in FrontEnd Development, but I do have some experience in backend as well`;
const experinceList: IExperienceList[] = [
  {
    title: "Software Development Engineer",
    company: 'Oracle',
    period: "Aug 2021 - present",
    bodyPara: `I've been working as a software developer , primarily developing UIs for Oracle Hospitality Distribution Platform using technologies like OJET, React , Redux and Cypress . Some of my achievements here include :`,
    bodyBulletPoints: [
      "Implementation of ReduxDataProvider, that would update the Redux store automatically with the response of API calls.",
      "Development of Nested Card Component, which contains a list of rows, each row containing a mapping from a Card Component, to a list of card components with horizontal scrolling. Each and every row has specific parameters which can be used to customize the space the list of cards are spread over.",
      "Implementation of Parallel Calls API Architecture, which enables batching API calls, and making concurrent API calls batch-wise, with necessary error handling"
    ],
  },
  {
    title: "Software Development Intern",
    company: 'Oracle',
    period: "Jan 2021 - Jun 2021",
    bodyPara: `This was a first time I actually worked for 8 hrs in an IT firm, and luckily for me , it happened to be one of the biggest tech giants in the World. I contributed towards`,
    bodyBulletPoints: [
      "Fixing over 100 bugs, which consisted of functionality breaks, cosmetic issues, incorrect handling of API responses.",
      "Incorporation new standards for the Karma testing tool.",
      "Development of preliminary UIs for Content UI in Oracle Hospitality Distribution"
    ],
  },
  {
    title: "Software Development Intern",
    company: 'Sands Private Limited',
    period: "Jul 2019 - Aug 2019",
    bodyPara: `As this was my first internship, the work assigned to me was more of an assistant developer rather than a actual developer. My work was focussed more on optimization rather than development of new products. I thereby`,
    bodyBulletPoints: [
      "Contributed in reducing the latency by 1500 ms (70% reduction) in signal transfer from Alarm's sensor to the Firebase realtime database.",
      "Improvised DB schema by eliminating 2 redundant columns.",
    ],
  },
]

function Experience() {
  return (
    <>
      <Helmet>
        <body className={`bg-white`}></body>
      </Helmet>
      <SocialMediaBar />
      <Header currentPage={Pages.Experience} isBackgroundBlue={false} />
      <div className={`flex justify-center flex-col items-center`}>
        <div className={'text-center font-rakkas text-6xl text-blue1'}>
        {experienceHeaderText}</div>
        <div className="text-center font-rakkas text-brown2 text-3xl mt-10">
          {experienceSubHeaderText}
        </div>
      </div>
      {/* Accordion Component*/}
      {experinceList.map((experience, index) => {
        return <div className={`flex justify-center`} key={experience.period}>
          <Accordion title={experience.title}
          company={experience.company}
          period={experience.period}
          bodyPara={experience.bodyPara}
          bodyBulletPoints={experience.bodyBulletPoints}
          isTextWhite = {index%2 == 0}/>
        </div>
      })}
    </>
  );
}

export default Experience;
