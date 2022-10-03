import React from "react";
import Params from "./Params";

const Metamodel = ({ model }) => {
  var finalForm = model.final_form
    .replaceAll("_", "")
    .replaceAll("=", "")
    .split("\n");

  return (
    <div className="col-md-6 col-sm-12" style={{ height: "95%" }}>
      <div className="card" style={{ height: "100%" }}>
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
        </div>
        <div style={{ marginBottom: "0.6rem" }}>
          <Params params={model.parameters} />
        </div>
      </div>
    </div>
  );
};

export default Metamodel;
