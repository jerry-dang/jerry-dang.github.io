import { useState } from "react";
import reactImg from "./assets/react.svg";
import "./App.css";

const personalProjects = ["Project 1", "Project 2", "Project 3"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = personalProjects[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="React Logo" />
      <h1>My Portfolio</h1>
      <p>{description} is awesome!</p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title="Components"
            description="The core UI building block"
            img={reactImg}
          />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
      </main>
    </div>
  );
}

export default App;
