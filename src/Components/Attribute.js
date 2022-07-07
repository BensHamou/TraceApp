import React from "react";

const Attribute = ({ attribute, setTechnique }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card" style={{ height: "95%" }}>
        <div style={{ marginBottom: "2rem" }}>
          <br />
          <h5
            style={{
              textAlign: "center",
              color: "#BB2D3B",
              fontWeight: "bold",
            }}
          >
            Attribute: "{attribute.name}"
          </h5>
        </div>
        <div className="col-md-10 offset-1">
          <p>
            <strong>Description: </strong>
            {attribute.description}
          </p>
        </div>
        <div className="col-md-10 offset-1">
          <p>
            It is a <strong>{attribute.typeA}</strong> type of attribute
          </p>
        </div>
        <div className="col-md-10 offset-1">
          <p>
            There are <strong>{attribute.missing}</strong> missing values,{" "}
            <strong>{attribute.distinct}</strong> distinct values and{" "}
            <strong>{attribute.unique}</strong> unique values
          </p>
        </div>

        {attribute.typeA === "Numerical" ? (
          <div className="col-md-10 offset-1">
            <p>Stats :</p>
            {attribute.stats.map((stat, i) => (
              <p key={i}>{stat.typeS + " " + stat.value}</p>
            ))}
          </div>
        ) : attribute.typeA === "Nominal" ? (
          <div className="col-md-10 offset-1">
            <p>Labels :</p>
            {attribute.labels.map((label, i) => (
              <p key={i}>
                {label.name +
                  ": count - " +
                  label.count +
                  " and weight - " +
                  label.weight}
              </p>
            ))}
          </div>
        ) : (
          <div className="col-md-10 offset-1">
            <p>No further information</p>
          </div>
        )}
        {attribute.applied_techniques.length === 0 ? (
          <div className="col-md-10 offset-1" style={{ marginBottom: "2rem" }}>
            <p>There are no applied techniques on the attribute.</p>
          </div>
        ) : (
          <div className="col-md-10 offset-1" style={{ marginBottom: "2rem" }}>
            <p>
              There are
              <strong>{" " + attribute.applied_techniques.length + " "}</strong>
              applied techniques
            </p>
            <select
              style={{ fontSize: "15px" }}
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(e) => {
                setTechnique(attribute.applied_techniques[e.target.value]);
              }}
            >
              {attribute.applied_techniques.map((applied_technique, i) => (
                <option key={i} value={i}>
                  {applied_technique.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attribute;
