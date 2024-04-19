import React from "react";

const dialogbox = () => {
  return (
    <>
      <div className="main">
        <div className="section1">
          <h1 className="title">Recently Generated Reports</h1>
          <div className="filter-button"></div>
          <div className="close-button"></div>
        </div>
        <div className="section2">
          <table>
            <thead>
              <tr>
                <td>Date</td>
                <td>Report Name</td>
                <td>Download</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>monday 12th</td>
                <td> create mode 100644 src/pages/about.js</td>
                <td>
                  <div className="download-button">Download</div>
                </td>
              </tr>
              <tr>
                <td>Tuesday 3rd</td>
                <td>master 706fa2c initial commit</td>
                <td>
                  <div className="download-button">Download</div>
                </td>
              </tr>
              <tr>
                <td>Wednesday 4th</td>
                <td>PS D:\desktop\nextjs\my-app</td>
                <td>
                  <div className="download-button">Download</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default dialogbox;
