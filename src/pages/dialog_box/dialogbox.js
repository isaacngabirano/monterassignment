import React, { useState } from "react";
import Head from "next/head";
import DummyData from "../../components/DummyData";

const DialogBox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); //5rows per page by default

  // Calculate current items based on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DummyData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); //back to first page when changing number of rows
    }
  };

  const handleNextPage = () => {
    if (indexOfLastItem < DummyData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const increaseRowsPerPage = () => {
    setItemsPerPage(itemsPerPage + 1);
    setCurrentPage(1);
  };

  const decreaseRowsPerPage = () => {
    if (itemsPerPage > 1) {
      setItemsPerPage(itemsPerPage - 1);
      setCurrentPage(1);
    }
  };

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
          <div className="title">Recently Generated Reports</div>
          <div className="head-buttons">
            <button className="icon-btn">
              <i className="fas fa-filter"></i>
            </button>
            <button className="icon-btn">
              <i className="fas fa-times"></i>
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
              {currentItems.map((item) => (
                <tr key={item.index}>
                  <td className="date-time">
                    <div className="date">{item.date}</div>
                    <div className="time">{item.time}</div>
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button className="download-btn">
                      <i className="fas fa-download"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section3">
          <div className="page-buttons">
            <button
              className="prev-btn"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <i className="fas fa-angle-left"></i> Prev
            </button>
            {/* generating number of pages required */}
            {Array.from(
              { length: Math.ceil(DummyData.length / itemsPerPage) },
              (_, i) => (
                <button
                  className={`icon-btn ${
                    currentPage === i + 1 ? "active-page" : "" //giving active button active-page class to make button orangered
                  }`}
                  key={i + 1}
                  onClick={() => handlePageClick(i + 1)}
                  disabled={i + 1 === currentPage}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              className="next-btn"
              onClick={handleNextPage}
              disabled={indexOfLastItem >= DummyData.length}
            >
              Next <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <div>
            <span>Rows per page </span>
            <span>
              <button className="icon-btn" onClick={increaseRowsPerPage}>
                <i className="fas fa-arrow-up"></i>
              </button>
            </span>
            <span> </span>
            <span>
              <button className="icon-btn" onClick={decreaseRowsPerPage}>
                <i className="fas fa-arrow-down"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogBox;
