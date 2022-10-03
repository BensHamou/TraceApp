import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setModel, setData }) {
  const [selectedData, setSelectedData] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const navigate = useNavigate();

  const onDataFileChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setSelectedData(JSON.parse(e.target.result));
    };
  };

  const onModelFileChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setSelectedModel(JSON.parse(e.target.result));
    };
  };

  const onFileUpload = () => {
    setData(selectedData);
    setModel(selectedModel);
    navigate("/model");
  };

  return (
    <div className="col-md-12 col-sm-12">
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
            Upload Files
          </h4>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card" style={{ height: "95%" }}>
              <div style={{ marginBottom: "2rem" }}>
                <br />
                <h4
                  style={{
                    textAlign: "center",
                    color: "#00A7E1",
                    fontWeight: "bold",
                  }}
                >
                  Dataset JSON file
                </h4>
              </div>
              <input type="file" onChange={onDataFileChange} />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card" style={{ height: "95%" }}>
              <div style={{ marginBottom: "2rem" }}>
                <br />
                <h4
                  style={{
                    textAlign: "center",
                    color: "#1dd3b0",
                    fontWeight: "bold",
                  }}
                >
                  Model JSON file
                </h4>
              </div>
              <input type="file" onChange={onModelFileChange} />
            </div>
          </div>
        </div>
        <div style={{ width: "10%", alignSelf: "center", margin: "2%" }}>
          <button onClick={onFileUpload}>Upload files</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
