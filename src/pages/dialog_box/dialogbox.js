import React from "react";
import Head from "next/head";

const dialogbox = () => {
  return (
    <>
      <Head>
        <title>HTML Table with Icons</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="main">
        <div className="section1">
          <h1 className="title">Recently Generated Reports</h1>
          <div className="head-buttons">
            <button class="icon-btn">
              <i class="fas fa-filter"></i>
            </button>
            <button class="icon-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="section2">
          <table>
            <thead>
              <tr>
                <td>Date</td>
                <td>Report Name</td>
                <td className="download-heading">Download</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="date-time">
                  <div className="date">monday 12th</div>
                  <div className="time">12:00 PM</div>
                </td>
                <td> create mode 100644 src/pages/about.js</td>
                <td>
                  <button class="icon-btn">
                    <i class="fas fa-download" className="download-button"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="date-time">
                  <div className="date">monday 12th</div>
                  <div className="time">12:00 PM</div>
                </td>
                <td>master 706fa2c initial commit</td>
                <td>
                  <button class="icon-btn" className="download-button">
                    <i class="fas fa-download"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="date-time">
                  <div className="date">monday 12th</div>
                  <div className="time">12:00 PM</div>
                </td>
                <td>PS D:\desktop\nextjs\my-app</td>
                <td>
                  <button class="icon-btn">
                    <i class="fas fa-download" className="download-button"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="section3">
          <div className="page-buttons">
            <button class="prev-btn">
              <i class="fas fa-angle-left"></i> Prev
            </button>
            <button className="icon-btn">1</button>
            <button className="icon-btn">2</button>
            <button className="icon-btn">3</button>
            <button className="icon-btn">4</button>
            <button className="icon-btn">5</button>
            <button class="next-btn">
              Next <i class="fas fa-angle-right"></i>
            </button>
          </div>
          <div>
            <button className="icon-btn">
              <i className="fas fa-list-ul"></i> Rows Per Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default dialogbox;
