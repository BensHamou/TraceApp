import React from "react";
import Metamodel from "./Metamodel";
import ScoresNPlots from "./ScoresNPlots";

function Model({ model }) {
  return (
    <div className="row">
      <Metamodel model={model} />
      <ScoresNPlots scores={model.scores} plots={model.plots} />
    </div>
  );
}

export default Model;
