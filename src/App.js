import Navbar from "./Components/Navbar";
import Metadata from "./Components/Metadata";
import "./static/css/styles.css";
import data from "./JSON/json_data.json";
import model from "./JSON/json_model.json";
import Attribute from "./Components/Attribute";
import { useState } from "react";
import Technique from "./Components/Technique";
import TRACE_LOGO from "./static/img/TARCE_LOGO.png";
import LOGO_ENSMA from "./static/img/LOGO_ENSMA.png";
import LOGO_IMPROVEMENT from "./static/img/LOGO_IMPROVEMENT.png";
import Metamodel from "./Components/Metamodel";

const App = () => {
  const [attribute, setAttribute] = useState(data.attributes[0]);
  const [technique, setTechnique] = useState(null);
  return (
    <div className="App">
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo" style={{ height: "100%" }}>
            <img
              src={TRACE_LOGO}
              style={{ width: "100px", alignSelf: "center" }}
              alt="Logo app"
            ></img>
            Case - 01
          </a>
        </div>

        <div className="header__logos">
          <img
            src={LOGO_ENSMA}
            style={{ width: "110px" }}
            alt="Logo ensma"
          ></img>
          <img
            src={LOGO_IMPROVEMENT}
            style={{ width: "130px" }}
            alt="Logo impr"
          ></img>
        </div>
      </header>
      <Navbar />

      <main style={{ marginTop: "5%" }}>
        <div className="row">
          {/* <Metadata
            data={data}
            setAtt={setAttribute}
            setTechnique={setTechnique}
          />
          <Attribute attribute={attribute} setTechnique={setTechnique} />
          <Technique technique={technique} /> */}
          <Metamodel model={model} />
        </div>
      </main>
    </div>
  );
};

export default App;
