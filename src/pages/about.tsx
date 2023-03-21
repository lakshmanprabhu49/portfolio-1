import { Pages } from "@/common/enums";
import Header from "@/components/Header";
import SocialMediaBar from "@/components/SocialMediaBar";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

interface IQNA {
  question: string;
  answer: string;
}

const allChatQNA = [
  {
    id: 0,
    question: "Where are you from?",
    answer: "I'm from Chennai, India",
  },
  {
    id: 1,
    question: "What's your goal in life?",
    answer:
      "Well honestly, this is one such question to which the  answer keeps changing over time. But right now, my goal is to keep you interested",
  },
  {
    id: 2,
    question: "What do you do for a living?",
    answer: "As of now, I write code to develop better products at Oracle",
  },
  {
    id: 3,
    question: "Messi or Ronaldo?",
    answer: "On pitch - Messi, Off pitch - Ronaldo",
  },
  {
    id: 4,
    question: "Do gods exist?",
    answer:
      "They do, but within yourself. It's called the subconsious. Pray to it to see the results",
  },
  {
    id: 5,
    question: "Best moment of your life so far?",
    answer:
      "Every moment so far has been the best moment for me. Sorry for the awkward answer, but to be honest, whenever something great happens, we claim it to be the best moment, not because it is the best moment, but because we've forgotten other great moments that have happened",
  },
  {
    id: 6,
    question: "Best memory of your travel or trip to some place",
    answer:
      "I once went to a waterfall in Jalagampari, I touched paradise momentarily when the water fell on my head.",
  },
];

const headerText =
  "Want to know more about me ? Let's chat then (I'm not a spammer 😉)";
const subtitleText =
  "Click on any of the questions in brown to start chatting.";

function About() {
  const [remainingQuestionsIds, setRemainingQuestionsIds] = useState([
    0, 1, 2, 3, 4, 5, 6,
  ]);
  const [answeredQuestionsIds, setAnsweredQuestionsIds] = useState([]);
  const [answeringAQuestion, setAnsweringAQuestion] = useState(false);
  const [questionIdCurrentlyAnswered, setQuestionIdCurrentlyAnswered] =
    useState(-1);

  const messageLoadingText = "⚪⚪⚪";
  //   const [messageLoadingTypewriterText, messageLoadingTypewriterHelper] = useTypewriter({
  //     words: [messageLoadingText],
  //     typeSpeed: 500,
  //   })

  const answerTheQuestion = (id: number) => {
    setQuestionIdCurrentlyAnswered(id);
    setAnsweringAQuestion(true);
    setRemainingQuestionsIds(
      remainingQuestionsIds.filter(
        (remainingQuestionsId) => remainingQuestionsId != id
      )
    );
    setTimeout(() => {
      setAnsweredQuestionsIds([...answeredQuestionsIds, id]);
      setQuestionIdCurrentlyAnswered(-1);
      setTimeout(() => {
        setAnsweringAQuestion(false);
      }, 1500);
    }, 1500);
  };
  useEffect(() => {
    const remQuestionIds = allChatQNA
      .map((item) => item.id)
      .filter((id) => !answeredQuestionsIds.includes(id));
    setRemainingQuestionsIds(remQuestionIds);
  }, [answeredQuestionsIds]);
  return (
    <>
      <Helmet>
        <body className={`bg-white`}></body>
      </Helmet>
      <SocialMediaBar />
      <Header currentPage={Pages.About} isBackgroundBlue={false} />
      <motion.div
        transition={{ ease: "backInOut", duration: 0.5 }}
        initial={{ y: "-100%" }}
        animate={{ x: 0, y: 0 }}
        className={`font-orelegaOne text-blue1 text-4xl text-center ml-10 mr-36 mt-10 mb-10`}
      >
        <span>{headerText}</span>
      </motion.div>
      <motion.div
        transition={{ ease: "backInOut", duration: 0.5 }}
        initial={{ y: "-100%" }}
        animate={{ x: 0, y: 0 }}
        className={`font-merriWeather text-brown2 text-3xl text-center ml-10 mr-36 mt-10 mb-10 font-semibold`}
      >
        <span>{subtitleText}</span>
      </motion.div>
      {/* Chat Section */}
      <motion.div
        animate={{ x: 0, y: 0, rotate: 0 }}
        initial={{ x: "-100%", rotate: 360 }}
        transition={{ duration: 1, ease: "backOut" }}
        className={
          "sm:w-3/4 lg:w-3/5 xl:w-1/2 sm:ml-16 lg:ml-60 xl:ml-96 shadow-lg shadow-blue1 drop-shadow-lg min-h-3/4 h-60vh max-h-3/4 rounded-b-10xl inline-block  overflow-y-scroll scrollbar-none"
        }
      >
        {/* Chat header */}
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={`pl-5 pt-2 pb-3 bg-blue1 rounded-b-5xl`}
        >
          <img
            src={`./ChatDP.png`}
            className={`w-28 inline-block -translate-y-3`}
          ></img>
          <div className={`ml-10 pt-6 inline-block`}>
            <span
              className={
                "font-bold text-white font-timesNewRoman text-4xl mt-10"
              }
            >
              Lachu
            </span>
            <br />
            <span className={"text-brown3 text-xl mt:20"}>Online</span>
          </div>
        </motion.div>
        {/* Chat area */}
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={`p-10 `}
        >
          {/* Answered questions */}
          {answeredQuestionsIds.map((answeredQuestionsId) => {
            return (
              <>
                {/* Question on the left */}
                <div className={`flex justify-end`}>
                  <span
                    className={`bg-blue1 text-right font-merriweather font-bold text-white m-2 p-6 rounded-t-5xl rounded-bl-5xl text-md `}
                  >
                    {allChatQNA[answeredQuestionsId].question}
                  </span>
                </div>
                {/* Answer on the right */}
                <div className={`flex justify-start`}>
                  <span
                    className={`max-w-xl bg-blue2 text-left font-merriweather font-bold text-blue1 m-2 p-6 rounded-t-5xl rounded-br-5xl text-md `}
                  >
                    {allChatQNA[answeredQuestionsId].answer}
                  </span>
                </div>
              </>
            );
          })}
          {/* Question currently answered */}
          {questionIdCurrentlyAnswered != -1 && (
            <>
              <div className={`flex justify-end`}>
                <span
                  className={`bg-blue1 text-right font-merriweather font-bold text-white m-2 p-6 rounded-t-5xl rounded-bl-5xl text-md `}
                >
                  {allChatQNA[questionIdCurrentlyAnswered].question}
                </span>
              </div>
              <div className={`flex justify-start`}>
                <span
                  className={`max-w-xl bg-blue2 text-left font-merriweather font-bold text-blue1 m-2 p-6 rounded-t-5xl rounded-br-5xl text-md `}
                >
                  {messageLoadingText}
                </span>
              </div>
            </>
          )}
          {/* Remaining Questions */}
          {!answeringAQuestion &&
            remainingQuestionsIds.map((remainingQuestionsId) => {
              return (
                <div className={`flex justify-end`}>
                  <span
                    className={`bg-brown2 text-right font-merriweather font-bold text-white m-2 p-3 rounded-t-5xl rounded-bl-5xl text-sm`}
                  >
                    <button
                      onClick={() => {
                        answerTheQuestion(remainingQuestionsId);
                      }}
                    >
                      {allChatQNA[remainingQuestionsId].question}
                    </button>
                  </span>
                </div>
              );
            })}
        </motion.div>
      </motion.div>
      {/* Chat questions section */}
    </>
  );
}

export default About;
