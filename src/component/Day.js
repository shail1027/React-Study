import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";

function Day() {
  const day = useParams().day;
  // const wordList = dummy.words.filter(word => (
  //     word.day === Number(day)
  // ))
  // console.log(wordList)
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/word?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;
