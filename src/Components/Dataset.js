import React from "react";
import Attribute from "./Attribute";
import Metadata from "./Metadata";
import Technique from "./Technique";

function Dataset({ data, setAttribute, setTechnique, attribute, technique }) {
  return (
    <div className="row">
      <Metadata data={data} setAtt={setAttribute} setTechnique={setTechnique} />
      <Attribute attribute={attribute} setTechnique={setTechnique} />
      <Technique technique={technique} />
    </div>
  );
}

export default Dataset;
