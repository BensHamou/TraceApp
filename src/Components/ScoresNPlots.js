import React from "react";
import Table from "react-bootstrap/Table";
import ImageGallery from "react-image-gallery";

function ScoresNPlots({ scores, plots }) {
  const images = [];
  plots
    .slice(0)
    .reverse()
    .forEach((plot) => {
      const p = {
        original: `data:image/jpeg;base64,${plot.image}`,
        thumbnail: `data:image/jpeg;base64,${plot.image}`,
        description: `${plot.title}`,
      };
      images.push(p);
    });
  return (
    <div className="col-md-6 col-sm-12">
      <div className="card" style={{ height: "100%" }}>
        <div style={{ marginBottom: "2rem" }}>
          <br />
          <h5
            style={{
              textAlign: "center",
              color: "#BB2D3B",
              fontWeight: "bold",
            }}
          >
            Scores
          </h5>
        </div>
        <div className="col-md-10 offset-1">
          <Table responsive>
            <thead>
              <tr>
                <th>Measure</th>
                {scores.map((score, i) => (
                  <th key={i}>{score.measure}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Value</td>
                {scores.map((score, i) => (
                  <td key={i}>{score.value}</td>
                ))}
              </tr>
              <tr>
                <td>Category</td>
                {scores.map((score, i) => (
                  <td key={i}>{score.category}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <br />
          <h5
            style={{
              textAlign: "center",
              color: "#BB2D3B",
              fontWeight: "bold",
            }}
          >
            Plots
          </h5>
        </div>
        <div className="col-md-10 offset-1">
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
}

export default ScoresNPlots;
