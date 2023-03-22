import React from "react";
import { questions, questionsSprint } from "./data";
function SecondQuestions() {
  return (
    <div className="py-10 px-2 text-black">
      <h2 className="mb-4 text-2xl font-bold">Repositorio de preguntas:</h2>
      <h3 className="text-xl font-bold">Ámbito personal:</h3>
      <ul className="px-4">
        {questions.map((question, index) => (
          <li
            className="p-2 text-lg leading-6 border-b border-solid border-black"
            key={index}
          >
            {index + 1}. {question}
          </li>
        ))}
      </ul>
      <h3 className="mt-6 text-xl font-bold">Ámbito Sprint/Laboral:</h3>
      <ul className="px-4">
        {questionsSprint.map((question, index) => (
          <li
            className="p-2 text-lg leading-6 border-b border-solid border-black"
            key={index}
          >
            {index + 1}. {question}
          </li>
        ))}
      </ul>
      <h3 className="mt-6 text-xl font-bold">Preguntas Finales:</h3>
      <li className="p-2 text-lg leading-6 border-b border-solid border-black">
        ¿Qué proceso, procedimiento o herramienta específica podríamos mejorar o
        implementar para aumentar la eficiencia de nuestro equipo de trabajo?
      </li>
      <li className="p-2 text-lg leading-6 border-b border-solid border-black">
        ¿Cómo podemos continuar desarrollando nuestras habilidades como equipo y
        como individuos?
      </li>
    </div>
  );
}

export default SecondQuestions;
