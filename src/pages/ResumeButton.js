import React, { useState } from "react";
import { FaDownload, FaCheckCircle, FaSpinner } from "react-icons/fa";
import "./Home.css";

const ResumeButton = () => {
  const [status, setStatus] = useState("idle"); // idle | downloading | done

  const handleDownload = () => {
    if (status === "downloading") return;

    setStatus("downloading");

    // Create a link and trigger file download
    const link = document.createElement("a");
    link.href = "/Sreethar_NJ_Resume.pdf"; // Put your file inside /public folder
    link.download = "Sreethar_NJ_Resume.pdf";
    document.body.appendChild(link);

    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      setStatus("done");

      // Reset back after few seconds
      setTimeout(() => setStatus("idle"), 2500);
    }, 2500);
  };

  return (
    <button
      className={`ResumeButton ${
        status === "downloading" ? "downloading" : ""
      } ${status === "done" ? "done" : ""}`}
      onClick={handleDownload}
    >
      {status === "idle" && (
        <>
          <FaDownload className="download-icon" /> Download Resume
        </>
      )}

      {status === "downloading" && (
        <>
          <FaSpinner className="spinner" /> Downloading...
        </>
      )}

      {status === "done" && (
        <>
          <FaCheckCircle className="done-icon" /> Download Complete
        </>
      )}
    </button>
  );
};

export default ResumeButton;
