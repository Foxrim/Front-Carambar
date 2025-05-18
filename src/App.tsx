import styles from "./styles/App.module.css";
import logo from "/images/logo-rose.png";
import Quizz from "./quizz/Quizz";

function App() {
  return (
    <>
      <div className={styles.background}>
        <figure className={styles.jokePlace}>
          <img className={styles.logo} src={logo} alt="Logo de la marque carambar&co" />
          <Quizz/>
        </figure>
      </div>
    </>
  );
}

export default App;
