import { useEffect, useState } from "react";
import styles from "./styles/Quizz.module.css";
import etoile from "/images/etoile.svg";
import eclaboussure from "/images/mini-eclaboussure.svg";

type Answers = {
  text_answer: string;
};

type JokeProps = {
  text_question: string;
  answers: Answers[];
};

export default function Quizz() {
  const [joke, setJoke] = useState<JokeProps | null>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    getRandomJoke();
  }, []);

  const getRandomJoke = async () => {
    setIsShow(false);
    const response = await fetch(
      "https://back-carambar.onrender.com/api/v1/blagues/random",
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    setJoke(data);
  };

  const showResponse = () => {
    setIsShow(true);
  }

  return (
    <div className={styles.whiteboard}>
      <h2>AS TU LA RÉPONSE ?</h2>
      {joke && <h3>{joke.text_question}</h3>}
      {!isShow ? (
        <button onClick={showResponse} type="button">Voir la réponse</button>
      ) : (
        joke && <p>{joke.answers[0].text_answer}</p>
      )}

      <button onClick={getRandomJoke} type="button">
        Une autres ?
      </button>

      <img className={styles.star} src={etoile} alt="etoile" />
      <img className={styles.mini} src={eclaboussure} alt="mini eclaboussure" />
    </div>
  );
}
