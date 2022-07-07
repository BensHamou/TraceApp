import React from "react";
import Params from "./Params";

const Metamodel = ({ model }) => {
  console.log(model.parameters[0].others);
  var finalForm = model.final_form
    .replaceAll("_", "")
    .replaceAll("=", "")
    .split("\n");

  //.map((str, i) => <p key={i}>{str}</p>);

  return (
    <div className="col-md-6 col-sm-12">
      <div className="card" style={{ height: "95%" }}>
        <div style={{ marginBottom: "2rem" }}>
          <br />
          <h4
            style={{
              textAlign: "center",
              color: "#BB2D3B",
              fontWeight: "bold",
            }}
          >
            Metadata: Model {model.id_model}
          </h4>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p>
            The model was trained on <strong>"Dataset {model.id_data}"</strong>{" "}
            by
            <strong>{" " + model.dataScientist}</strong>
          </p>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p>
            The final version is stored in:
            {" " + model.model_path} obtained at{" "}
            <strong>{model.createdAt}</strong>
          </p>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p style={{ textSize: "5px" }}>
            <strong>Final Form:</strong>
          </p>
          {}
          {finalForm.map((str, ind) => {
            return (
              <p key={ind}>
                {ind === 0
                  ? "====== " + str
                  : ind % 2 === 0 && ind < finalForm.length - 4
                  ? "****** " + str
                  : ind >= finalForm.length - 4 && ind < finalForm.length - 1
                  ? "====== " + str
                  : str}
              </p>
            );
          })}
          <br></br>
          <Params params={model.parameters} />
        </div>
        {/* <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p>
            This dataset contains
            <strong>{" " + dataset.number_instances + " "}</strong> instances
          </p>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p>
            There are <strong>{dataset.number__attributes + " "}</strong>
            attributes
          </p>
          <select
            style={{ fontSize: "15px" }}
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={(e) => {
              setAtt(dataset.attributes[e.target.value - 1]);
              setTechnique(null);
            }}
          >
            {dataset.attributes.map((attribute, i) => (
              <option key={i} value={attribute.id_attribute}>
                {attribute.name}
              </option>
            ))}
          </select>
        </div>
        {dataset.applied_techniques.length === 0 ? (
          <div className="col-md-10 offset-1" style={{ marginBottom: "2rem" }}>
            <p>There are no applied techniques on the dataset.</p>
          </div>
        ) : (
          <div
            className="col-md-10 offset-1"
            style={{ marginBottom: "0.6rem" }}
          >
            <p>
              There are
              <strong>{" " + dataset.applied_techniques.length + " "}</strong>
              applied techniques
            </p>
            <select
              style={{ fontSize: "15px" }}
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(e) => {
                setTechnique(dataset.applied_techniques[e.target.value - 1]);
              }}
            >
              {dataset.applied_techniques.map((applied_technique, i) => (
                <option key={i} value={applied_technique.id_technique}>
                  {applied_technique.name}
                </option>
              ))}
            </select>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Metamodel;
