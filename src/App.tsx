import { useState } from "react";
import styles from "./styles/App.module.css";

function App() {
  const [joke, setJoke] = useState();

  const getRandomJoke = async () => {
    const response = await fetch('https://back-carambar.onrender.com/api/v1/blagues');
    const data = await response.json();
    setJoke(data);
  };

  return (
    <>
      <div className={styles.background}>
        <button onClick={getRandomJoke} type="button">Une autres ?</button>
        {joke && <p>{joke}</p>}
      </div>
    </>
  )
}

export default App
