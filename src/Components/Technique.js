import React from "react";
import Params from "./Params";

const Technique = ({ technique }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card" style={{ height: "95%" }}>
        {!technique ? (
          <div style={{ marginBottom: "2rem" }}>
            <br />
            <h4
              style={{
                textAlign: "center",
                color: "#BB2D3B",
                fontWeight: "bold",
              }}
            >
              Techniques
            </h4>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: "2rem" }}>
              <br />
              <h5
                style={{
                  textAlign: "center",
                  color: "#BB2D3B",
                  fontWeight: "bold",
                }}
              >
                Technique: "{technique.name}"
              </h5>
            </div>
            <div className="col-md-10 offset-1">
              <p>
                <strong>Type: </strong>
                {technique.typeT}
              </p>
            </div>
            <div>
              {technique.documentation === "Custom" ? (
                <div className="col-md-10 offset-1">
                  <p>This is a custom function: </p>
                  <p>{technique.others}</p>
                </div>
              ) : (
                <>
                  <div className="col-md-10 offset-1">
                    <p>
                      <strong>Documentation: </strong>
                      {technique.documentation.substr(
                        0,
                        technique.documentation.indexOf("Parameters")
                      ) ? (
                        <>
                          {technique.documentation.substr(
                            0,
                            technique.documentation.indexOf("Parameters")
                          )}
                        </>
                      ) : (
                        <>
                          {technique.documentation.substr(
                            0,
                            technique.documentation.indexOf("Allowed")
                          )}
                        </>
                      )}
                    </p>
                  </div>
                  <Params params={technique.parameters} />
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Technique;
