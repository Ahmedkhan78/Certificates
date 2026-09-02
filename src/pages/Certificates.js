import { useState } from "react";

import cybrary from "../data/certificates/cybrary.json";
import freecodecamp from "../data/certificates/freecodecamp.json";
import hackerrank from "../data/certificates/hackerrank.json";
import kaggle from "../data/certificates/kaggle.json";
import networking from "../data/certificates/networking.json";
import nextjs from "../data/certificates/nextjs.json";
import saylor from "../data/certificates/saylor.json";

import mechanicalEngineering from "../data/academic/mechanical-engineering.json";
import computerScienceEngineering from "../data/academic/computer-science-engineering.json";

import CertCard from "../components/cards/CertCard";
import FilterBar from "../components/FilterBar";

import "./Certificates.css";

const Certificates = () => {
  /*
   * ========================================
   * FILTER MODE
   * ========================================
   *
   * platform → Certification platforms
   * academic → Academic qualifications
   */

  const [filterMode, setFilterMode] = useState("platform");

  /*
   * ========================================
   * SELECTED FILTERS
   * ========================================
   */

  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const [selectedAcademic, setSelectedAcademic] = useState("All");

  const [previewImage, setPreviewImage] = useState(null);

  /*
   * ========================================
   * PLATFORM DATA
   * ========================================
   */

  const platformData = {
    FreeCodeCamp: freecodecamp,
    Cybrary: cybrary,
    HackerRank: hackerrank,
    Kaggle: kaggle,
    NextJS: nextjs,
    Networking: networking,
    Saylor: saylor,
  };

  /*
   * ========================================
   * ACADEMIC DATA
   * ========================================
   */

  const academicData = {
    "Computer Science Engineering": computerScienceEngineering,
    "Mechanical Engineering": mechanicalEngineering,
  };

  /*
   * ========================================
   * FILTER OPTIONS
   * ========================================
   */

  const platforms = Object.keys(platformData);

  const academicFields = Object.keys(academicData);

  /*
   * ========================================
   * COMBINE PLATFORM DATA
   * ========================================
   */

  const platformItems = Object.entries(platformData).flatMap(
    ([platform, items]) =>
      items.map((item) => ({
        ...item,
        platform,
        category: "platform",
      })),
  );

  /*
   * ========================================
   * COMBINE ACADEMIC DATA
   * ========================================
   */

  const academicItems = Object.entries(academicData).flatMap(
    ([academic, items]) =>
      items.map((item) => ({
        ...item,
        academic,
        category: "academic",
      })),
  );

  /*
   * ========================================
   * FILTER DATA
   * ========================================
   */

  const displayedCerts =
    filterMode === "platform"
      ? platformItems.filter(
          (item) =>
            selectedPlatform === "All" || item.platform === selectedPlatform,
        )
      : academicItems.filter(
          (item) =>
            selectedAcademic === "All" || item.academic === selectedAcademic,
        );

  /*
   * ========================================
   * ACTIVE FILTER LABEL
   * ========================================
   */

  const activeFilter =
    filterMode === "platform"
      ? selectedPlatform === "All"
        ? "ALL PLATFORMS"
        : selectedPlatform.toUpperCase()
      : selectedAcademic === "All"
        ? "ALL ACADEMIC"
        : selectedAcademic.toUpperCase();

  /*
   * ========================================
   * CHANGE FILTER MODE
   * ========================================
   */

  const changeFilterMode = (mode) => {
    setFilterMode(mode);

    if (mode === "platform") {
      setSelectedPlatform("All");
    }

    if (mode === "academic") {
      setSelectedAcademic("All");
    }
  };

  /*
   * ========================================
   * PLATFORM FILTER
   * ========================================
   */

  const handlePlatformFilter = (platform) => {
    setSelectedPlatform(platform);
  };

  /*
   * ========================================
   * ACADEMIC FILTER
   * ========================================
   */

  const handleAcademicFilter = (academic) => {
    setSelectedAcademic(academic);
  };

  /*
   * ========================================
   * UI
   * ========================================
   */

  return (
    <div className="cert-page">
      {/* =====================================
          CYBER BACKGROUND
      ====================================== */}

      <div className="cyber-bg">
        <div className="cyber-glow cyber-glow-one" />

        <div className="cyber-glow cyber-glow-two" />

        <div className="cyber-grid" />

        <div className="cyber-scanlines" />
      </div>

      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <main className="cert-content">
        {/* =====================================
            HEADER
        ====================================== */}

        <section className="cert-header">
          <div className="cyber-label">
            <span className="label-dot" />

            <span className="cyber-label-text">CERTIFICATION_DATABASE</span>
          </div>

          <p className="cert-description">
            A showcase of my certifications, courses, labs, professional
            platforms, and academic achievements.
          </p>
        </section>

        {/* =====================================
            FILTER MODE
        ====================================== */}

        <div className="filter-mode">
          <button
            type="button"
            className={
              filterMode === "platform"
                ? "filter-mode-btn active"
                : "filter-mode-btn"
            }
            onClick={() => changeFilterMode("platform")}
          >
            PLATFORM
          </button>

          <button
            type="button"
            className={
              filterMode === "academic"
                ? "filter-mode-btn active"
                : "filter-mode-btn"
            }
            onClick={() => changeFilterMode("academic")}
          >
            ACADEMIC
          </button>
        </div>

        {/* =====================================
            PLATFORM FILTER
        ====================================== */}

        {filterMode === "platform" && (
          <FilterBar
            title="Platform"
            items={platforms}
            selectedItem={selectedPlatform}
            setSelectedItem={handlePlatformFilter}
          />
        )}

        {/* =====================================
            ACADEMIC FILTER
        ====================================== */}

        {filterMode === "academic" && (
          <FilterBar
            title="Academic"
            items={academicFields}
            selectedItem={selectedAcademic}
            setSelectedItem={handleAcademicFilter}
          />
        )}

        {/* =====================================
            RESULT COUNT
        ====================================== */}

        <div className="cert-result-count">
          <span>{activeFilter}</span>

          <span>{displayedCerts.length} ITEMS</span>
        </div>

        {/* =====================================
            CERTIFICATE / ACADEMIC GRID
        ====================================== */}

        {displayedCerts.length > 0 ? (
          <div className="cert-grid">
            {displayedCerts.map((cert, index) => (
              <CertCard
                key={cert.id}
                title={cert.title}
                link={cert.link}
                image={cert.image}
                type={cert.type}
                index={index}
                onImageClick={setPreviewImage}
              />
            ))}
          </div>
        ) : (
          <div className="cert-empty">
            <div className="empty-icon">[!]</div>

            <h3>NO DATA FOUND</h3>

            <p>No records match the selected filter.</p>
          </div>
        )}
      </main>

      {/* =====================================
          IMAGE MODAL
      ====================================== */}

      {previewImage && (
        <div className="image-modal" onClick={() => setPreviewImage(null)}>
          <div
            className="image-modal-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setPreviewImage(null)}
            >
              ×
            </button>

            <img src={previewImage} alt="Certificate Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
