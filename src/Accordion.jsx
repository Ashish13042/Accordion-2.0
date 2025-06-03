import "./Accordion.css";
import { questions } from "./api";
import "./Accordion.css";
import { useState } from "react";
import MyAccordian from "./MyAccordian";

function Accordion() {
  const [data, setData] = useState(questions);

  return (
    <>
      <div className="main-div">
        <section className="main-sec">
          <h1>React Interview Questions</h1>
          {data.map((currElem) => {
            const { id } = currElem;
            return <MyAccordian key={id} {...currElem} />;
          })}
        </section>
      </div>
    </>
  );
}

export default Accordion;
