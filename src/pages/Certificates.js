import React, { useState } from "react";
import certsData from "../data/certs.json";
import CertCard from "../components/CertCard";
import FilterBar from "../components/FilterBar";
import LightRays from "../components/LightRays/LightRays";
import "./Certificates.css"; // only grid styling

const Certificates = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const platforms = Object.keys(certsData);
  const [previewImage, setPreviewImage] = useState(null);

  const displayedCerts =
    selectedPlatform === "All"
      ? platforms.flatMap((p) => certsData[p])
      : certsData[selectedPlatform] || [];

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* LightRays background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, padding: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <h1 className="cert-heading">Certifications</h1>
          <p className="cert-description">
            A showcase of my completed certifications across web development,
            programming, data analysis, and other technical skills. Each
            certificate represents hands-on experience and mastery in its
            respective field.
          </p>
        </div>
        <FilterBar
          platforms={platforms}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
        <div className="cert-grid">
          {displayedCerts.map((cert) => (
            <CertCard
              key={cert.link}
              title={cert.title}
              link={cert.link}
              image={cert.image}
              onImageClick={setPreviewImage}
            />
          ))}
        </div>
      </div>

      {previewImage && (
        <div className="image-modal" onClick={() => setPreviewImage(null)}>
          <img
            src={previewImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()} // Click on image won't close modal
          />
        </div>
      )}
    </div>
  );
};

export default Certificates;
