import React from "react";
import './Loader.css'

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
      className="loader-parent"
    >
      <div className="loader-container">
        <div className="loader">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        <p className="loading-text">Chargement...</p>
      </div>
    </div>
  );
};

export default Loader;
