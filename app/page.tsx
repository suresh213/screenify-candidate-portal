"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const QA = [
    {
      ques: "Choose your answer for question 1?",
      options: ["orrupti omnis.e Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad unde, quisquam nemo a incidunt deleniti sed vitae corrupti omnis.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad unde, quisquam nemo a incidunt deleniti sed vitae corrupti omnis.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad unde, quisquam nemo a incidunt deleniti sed vitae corrupti omnis.", "Lorem ipsum dolor sit amet consectetur adipisicing elit."]
    },
    {
      ques: "Choose your answer for question 2?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 3?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 4?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 5?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 6?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 7?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 8?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 9?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    },
    {
      ques: "Choose your answer for question 10?",
      options: ["Apple", "Ball", "Cat", "Dog"]
    }
  ];

  const [question, setQuestion] = useState(0); //index of selected question in QA
  const [selected, setSelected] = useState(""); //selected option in current question
  const [answers, setAnswers] = useState(Array(QA.length).fill("")); //arrray containing all answers

  return (
    <>
      <ul className="flex">
        {
          QA.map((val, Qindex) => {
            return (
              <li
                key={Qindex}
                className={"py-1 w-full text-center cursor-pointer border-b-4 border-black dark:border-white" +
                  (Qindex!=question ? " bg-white dark:bg-black text-black dark:text-white" : " bg-black dark:bg-white text-white dark:text-black rounded-t-md") +
                  (answers[Qindex]=="" ? " border-b-red-600 dark:border-b-red-600" : " border-b-lime-500 dark:border-b-lime-500")
                }
                onClick={() => {
                  setQuestion(Qindex);
                  setSelected(answers[Qindex]);
                }}
              >
                Q{Qindex+1}
              </li>
            )
          })
        }
      </ul>
      <div className="flex flex-auto">
        <span
          className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-500 h-100 flex items-center"
          onClick={() => {
            setQuestion(question==0 ? QA.length-1 : question-1);
            setSelected(answers[question==0 ? QA.length-1 : question-1]);
          }}
        >
          <ChevronLeft size={70}/>
        </span>
        <div className="flex flex-col w-full items-left py-20">
          <p className="text-4xl py-3 px-28 select-none">{`Q${question+1}. ${QA[question].ques}`}</p>
          <form>
            {
              QA[question].options.map((option: string, optIndex: number) => {
                return (
                  <div className="flex-col w-full py-3 px-28 select-none" key={optIndex}>
                    <input
                      type="radio"
                      id={""+optIndex}
                      name={"opt"}
                      value={""+optIndex}
                      className="cursor-pointer"
                      onClick={(e) => {
                        const val = selected==e.currentTarget.value ? "" : e.currentTarget.value;
                        setSelected(val);
                        setAnswers([...answers.slice(0,question), val, ...answers.slice(question+1)]);
                      }}
                      checked={selected==""+optIndex}
                      onChange={() => {}}
                    />
                    <label htmlFor={""+optIndex} className="text-2xl leading-6 px-3 cursor-pointer">{option}</label>
                  </div>
                )
              })
            }
          </form>
        </div>
        <span
          className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-500 h-100 flex items-center"
          onClick={() => {
            setQuestion((question+1)%QA.length);
            setSelected(answers[(question+1)%QA.length]);
          }}
        >
          <ChevronRight size={70}/>
        </span>
      </div>
    </>
  )
}
