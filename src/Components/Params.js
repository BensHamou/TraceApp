import React from "react";

function Params({ params }) {
  return (
    <div>
      {params.length === 0 ? (
        <div className="col-md-10 offset-1">
          <p>The parameters were kept as default.</p>
        </div>
      ) : (
        <div>
          <strong>Used parameters: </strong>
          {params.map((param, i) => (
            <div key={i}>
              '{param?.name}':
              {param.value.length === 0 ? (
                <>
                  {Object.entries(param.others).map(([key, value], i) => {
                    const ind = i + 1;
                    return (
                      <div className="col-md-10 offset-1" key={i}>
                        {"Param " + ind + " ==> " + key + ": " + value}
                      </div>
                    );
                  })}
                </>
              ) : (
                <p>
                  '{param?.name}' = '{param?.value}'
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Params;
