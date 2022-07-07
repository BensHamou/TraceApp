import React from "react";

const Metadata = ({ data: dataset, setAtt, setTechnique }) => {
  return (
    <div className="col-md-4 col-sm-12">
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
            Metadata: Dataset {dataset.id}
          </h4>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p>
            Data provided by <strong>{dataset.author}</strong>, stored in
            <strong>{" " + dataset.stored_in}</strong>
          </p>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p>
            <strong>Description:</strong>
            {" " + dataset.description}
          </p>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
          <p>
            Created at:
            <strong>{" " + dataset.createdAt}</strong>
          </p>
        </div>
        <div className="col-md-10 offset-1" style={{ marginBottom: "0.6rem" }}>
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
                setTechnique(dataset.applied_techniques[e.target.value]);
              }}
            >
              {dataset.applied_techniques.map((applied_technique, i) => (
                <option key={i} value={i}>
                  {applied_technique.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <br></br>
      </div>
    </div>
  );
};

export default Metadata;
