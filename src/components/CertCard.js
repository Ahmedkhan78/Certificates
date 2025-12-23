import ElectricBorder from "./ElectricBorder/ElectricBorder";

const CertCard = ({ title, link, image, onImageClick }) => {
  return (
    <div className="cert-card">
      <img
        src={image}
        alt={title}
        style={{ cursor: "pointer" }} // ✅ Finger cursor
        onClick={() => onImageClick && onImageClick(image)} // Open modal
      />
      <h3>{title}</h3>
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </ElectricBorder>
    </div>
  );
};

export default CertCard;
