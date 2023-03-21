import React, { useState } from "react";
import Timer from "./Timer";
import { QUESTION__DATA } from "./data";

const Question = ({ data, setCorrect, isCorrect, setPause }) => {
  const checkResponse = (option) => {
    setPause(true);
    setCorrect(option === data.respuesta);
  };
  const isCorrectClass =
    isCorrect === null
      ? "bg-slate-300"
      : isCorrect === true
      ? "bg-lime-500"
      : "bg-red-600";

  return (
    <>
      <h2 className="w-full mb-10 px-4 text-center text-3xl leading-7 font-semibold">
        {data.pregunta}
      </h2>
      <p className="text-base">Seleccion la respuesta correcta:</p>
      {data.opciones.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              checkResponse(item);
            }}
            className={`${isCorrectClass} block w-11/12 my-3 py-2 text-base rounded-md`}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};

const Questions = () => {
  const [index, setIndex] = useState(0);
  const [isCorrect, setCorrect] = useState(null);
  const [seconds, setSeconds] = useState(30);
  const [pause, setPause] = useState(false);
  const [finished, setFinished] = useState(false);

  const clearAll = () => {
    setCorrect(null);
    setPause(false);
    handleReset();
  };
  const handleReset = () => {
    setSeconds(30);
    setPause(false);
  };
  const nextQuestion = () => {
    clearAll();
    if (QUESTION__DATA.length === index + 1) {
      setFinished(true);
    } else {
      setIndex(index + 1);
    }
  };

  const finishedTime = () => {
    setCorrect(false);
    setPause(true);
  };

  return (
    <div className="relative h-full w-full flex items-end flex-col text-black">
      {!finished && (
        <>
          <div className="m-4 grid place-items-center bg-slate-500 w-20 h-20 rounded-[50%]">
            <Timer
              seconds={seconds}
              setSeconds={setSeconds}
              pause={pause}
              finishedTime={finishedTime}
            />
          </div>
          <div className="mt-10 flex flex-col justify-center items-center self-center">
            <Question
              data={QUESTION__DATA[index]}
              setCorrect={setCorrect}
              isCorrect={isCorrect}
              setPause={setPause}
            />
          </div>
          {pause && (
            <button
              onClick={nextQuestion}
              className="absolute mx-auto bottom-3 right-3 left-auto top-auto bg-orange-400 text-white text-xl px-10 py-1 rounded-md"
            >
              Siguiente
            </button>
          )}
        </>
      )}
      <span className="grid place-items-center text-white absolute bottom-4 mx-auto text-xl left-4 bg-slate-400 w-10 h-10 rounded-[50%]">
        {index}
      </span>
      {finished && (
        <h2 className="w-full text-4xl text-center font-bold">Se termino</h2>
      )}
    </div>
  );
};

export default Questions;
