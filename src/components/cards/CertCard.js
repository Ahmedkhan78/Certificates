import "./CertCard.css";

const CertCard = ({ title, link, image, type, onImageClick }) => {
  return (
    <article className="cert-card">
      {/* IMAGE */}
      <div
        className="cert-image-wrapper"
        onClick={() => onImageClick && onImageClick(image)}
      >
        <img className="cert-image" src={image} alt={title} loading="lazy" />

        <div className="image-overlay">
          <span>VIEW_IMAGE</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="cert-card-content">
        <h3 className="cert-card-title">{title}</h3>

        {type && <span className="cert-card-type">{type}</span>}

        {link ? (
          <a
            className="cert-view-btn"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>VIEW CERTIFICATE</span>
            <span className="btn-arrow">→</span>
          </a>
        ) : (
          <span className="cert-view-btn cert-disabled">
            <span>NO LINK AVAILABLE</span>
          </span>
        )}
      </div>
    </article>
  );
};

export default CertCard;
