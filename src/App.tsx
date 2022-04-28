import styles from "./styles/App.module.css";

import { useState } from "react";
const bg_top = require("./assets/bg-top.svg").default;
const bg_bottom = require("./assets/bg-bottom.svg").default;

function App() {
  const [value, setValue] = useState(false);
  const {
    container,
    backgroundContainer,
    contentContainer,
    heading,
    switchElement,
    slider,
    cardsContainer,
    card,
    attribution,
    sub_type,
  } = styles;

  return (
    <>
      <main className={container}>
        <div className={backgroundContainer}>
          <img src={bg_bottom} alt="" />
          <img src={bg_top} alt="" />
        </div>
        <div className={contentContainer}>
          <div className={heading}>
            <h1>Our Pricing</h1>
            <div className={sub_type}>
              <div>Annualy</div>
              <label className={switchElement}>
                <input
                  onChange={(e) => setValue(e.target.checked)}
                  type="checkbox"
                />
                <span className={slider}></span>
              </label>
              <div>Monthly</div>
            </div>
          </div>

          <div className={cardsContainer}>
            <div className={card}>
              <h1>Basic</h1>
              <div>
                <span>$</span> {value ? "19.99" : "199.99"}
              </div>
              <p>500 GB Storage</p>
              <p>2 Users Allowed</p>
              <p>Send Up to 3 GB</p>
              <button>Learn More</button>
            </div>
            <div className={card}>
              <h1>Professional</h1>
              <div>
                <span>$</span> {value ? "24.99" : "249.99"}
              </div>
              <p>1 TB Storage</p>
              <p>5 Users Allowed</p>
              <p>Send up to 10 GB</p>
              <button>Learn More</button>
            </div>

            <div className={card}>
              <h1>Master</h1>
              <div>
                <span>$</span> {value ? "39.99" : "399.99"}
              </div>
              <p>2 TB Storage</p>
              <p>10 Users Allowed</p>
              <p>Send up to 20 GB</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </main>

      <footer className={attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/luispintodev/"
          target="_blank"
          rel="noreferrer"
        >
          Luís Pinto
        </a>
        .
      </footer>
    </>
  );
}

export default App;
