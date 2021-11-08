//
import * as React from "react";
import * as ReactDOM from "react-dom";
import "index.scss";

import { parseBibFile, normalizeFieldValue } from "bibtex";

const bibFile = parseBibFile(`
    @InProceedings{realscience,
      author    = {Marteen Fredrik Adriaan ding de la Trumppert and مهدي N\\"allen and henQuq, jr, Mathize},
      title     = {You Won't Believe This Proof That {P} \\gtreqqless {NP} Using Super-{T}uring Computation Near Big Black Holes},
      booktitle = {Book of Qeq},
      month     = {September},
      year      = {2001},
      address   = {Dordrecht},
      publisher = {Willems Uitgeverij},
      url       = {https://github.com/digitalheir/},
      pages     = {6--9}
    }
`);

const Application = () => {
  React.useEffect(() => {
    console.log(bibFile.entries$);
    console.log(bibFile.entries$.realscience.type);
    console.log(bibFile.entries$.realscience.fields);
    console.log(bibFile.entries$.realscience.fields.author.authors$);
  }, []);

  return <div className="Application">Hello, World!</div>;
};

ReactDOM.render(<Application />, document.getElementById("root"));
