//
import * as React from "react";
import * as ReactDOM from "react-dom";
import "index.scss";

import { parseBibFile, normalizeFieldValue } from "bibtex";
import bib from "../data/refs.txt";
import bios from "../data/bios.json";
import landing from "../data/brain-lips.png";

const bibFile = parseBibFile(bib);

const Application = () => {
  React.useEffect(() => {
    console.log(bibFile.entries$);
    console.log(bibFile.entries$.realscience.type);
    console.log(bibFile.entries$.realscience.fields);
    console.log(bibFile.entries$.realscience.fields.author.authors$);

    const body = document.getElementsByTagName("body")[0];
    body.onscroll = e => {
      //stackoverflow.com/a/14384091
      let top = window.pageYOffset || document.documentElement.scrollTop;
      // console.log(top);
    };
  }, []);

  return (
    <div className="Application">
      <header className="Header">
        <ScrollButton name="Project" />
        <ScrollButton name="Team" />
        <ScrollButton name="Papers" />
        <ScrollButton name="Contact" />
      </header>
      <main>
        <img className="logo" src={landing} alt="Brain-to-speech landing image" />
        <h1>Brain2Speech</h1>
        <h2>Project</h2>
        <p>
          The Brain2Speech project seeks to build and validate new methods for
          advanced speech synthesis and control using neural activation-based
          models and 3D biomechanical articulators.
        </p>
        <h2>Team</h2>
        <div className="Bios">
          {bios.map((bio, index) => (
            <Bio key={`bio-${index}`} {...bio} />
          ))}
        </div>

        <h2>Papers</h2>
        <p>...</p>
        <h2>Contact</h2>
        <p className="center">For press inquires reach us directly at ...</p>
        <footer>
          <div>Copyright © Brain2Speech 2021</div>
          <div>
            <a className="" href="">
              License
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

const Bio = ({ img, name, title, content }) => {
  return (
    <div className="Bio">
      <img alt={`Photo of ${name}`} src={img} />
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

const ScrollButton = ({ name }) => {
  return (
    <span
      className="ScrollButton"
      onClick={e => {
        const headers = document.getElementsByTagName("h2");
        for (let i = 0; i < headers.length; i++) {
          if (headers[i].textContent === name) {
            // console.log(name);
            // console.log(headers[i].getBoundingClientRect());

            // Compute top coordinate of header element
            /*
            let y = headers[i].getBoundingClientRect().top;
            console.log(y);

            // Compute top header margin
            let style =
              headers[i].currentStyle || window.getComputedStyle(headers[i]);
            let marginTop = parseInt(style.marginTop);

            const scrollTo = y - 64 - marginTop;
            // window.scrollTo(0, scrollTo);
            console.log(scrollTo);
            */

            headers[i].scrollIntoView(true);
            break;
          }
        }
      }}
    >
      {name}
    </span>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
