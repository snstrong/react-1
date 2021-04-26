import React, { useState } from "react";
import MadLibStory from "./MadLibStory";
import MadLibForm from "./MadLibForm";

const MadLib = () => {
  const unfilledStory = [
    "There",
    "was",
    "a",
    "adjective",
    "noun1",
    "who",
    "loved",
    "a",
    "color",
    "noun2",
  ];
  const [story, setStory] = useState(unfilledStory);
  //   const [madWords, setMadWords] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const createStory = (formWords) => {
    // setMadWords(formWords);
    setStory((s) => {
      let newStory = [...s];
      console.log(formWords);
      for (let partOfSpeech in formWords) {
        console.log(`Part of speech is ${partOfSpeech}`);
        if (newStory.includes(partOfSpeech)) {
          console.log(`Includes ${partOfSpeech}`);
          newStory[newStory.indexOf(partOfSpeech)] = formWords[partOfSpeech];
        }
      }
      return newStory;
    });
    setSubmitted(true);
  };

  return (
    <>
      <h1>MadLibs</h1>
      <MadLibForm createStory={createStory} submitted={submitted} />
      <MadLibStory submitted={submitted} madStory={`${story.join(" ")}.`} />
    </>
  );
};

export default MadLib;
