import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  const quote = [
    "Be Yourself",
    "Believe in yourself",
    "Do the hardwork especially when you don't feel like it",
    "I keep my goals secret to achieve them faster",
    "Always strive for the best",
    "The Day you stop learning is the day you die",
    "Delayed Gratification",
    "Never Give Up",
    "Never Settle",
    "Great Wall of China was never built in a day",
  ];
  return (
    <>
      <div className="load">
        <h1 className="text-4xl font-serif text-yellow-300">
          <q>{quote[Math.floor(Math.random() * 10) + 1]}</q>
        </h1>
        <Audio
          height="300"
          width="200"
          radius="9"
          color="wheat"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </>
  );
};

export default Loader;