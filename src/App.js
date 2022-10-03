import Navbar from "./Components/Navbar";
import "./static/css/styles.css";
import { useEffect, useState } from "react";
import TRACE_LOGO from "./static/img/TARCE_LOGO.png";
import LOGO_ENSMA from "./static/img/LOGO_ENSMA.png";
import LOGO_IMPROVEMENT from "./static/img/LOGO_IMPROVEMENT.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dataset from "./Components/Dataset";
import Model from "./Components/Model";
import Home from "./Components/Home";

const App = () => {
  const [model, setModel] = useState(null);
  const [data, setData] = useState(null);
  const [attribute, setAttribute] = useState(null);
  const [technique, setTechnique] = useState(null);

  useEffect(() => {
    setAttribute(data?.attributes[0]);
  }, [data]);

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header__container">
            <Link to="/" className="header__logo" style={{ height: "100%" }}>
              <img
                src={TRACE_LOGO}
                style={{ width: "80px", alignSelf: "center" }}
                alt="Logo app"
              ></img>
              TraceApp for model archival
            </Link>
          </div>

          <div className="header__logos">
            <img
              src={LOGO_ENSMA}
              style={{ width: "90px" }}
              alt="Logo ensma"
            ></img>
            <img
              src={LOGO_IMPROVEMENT}
              style={{ width: "110px" }}
              alt="Logo impr"
            ></img>
          </div>
        </header>
        <Navbar />
      </div>
      <main style={{ marginTop: "5%" }}>
        <Routes>
          <Route
            path="/"
            element={<Home setModel={setModel} setData={setData} />}
          />
          <Route
            path="/dataset"
            element={
              <Dataset
                data={data && data}
                setAttribute={setAttribute && setAttribute}
                setTechnique={setTechnique && setTechnique}
                attribute={attribute && attribute}
                technique={technique && technique}
              />
            }
          />
          <Route path="/model" element={<Model model={model} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
