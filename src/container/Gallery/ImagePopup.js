import React from "react";
import './ImagePopup.css';

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div className="image-popup" onClick={onClose}>
      <div className="popup-content">
        <img src={imageUrl} alt="Expanded" />
      </div>
    </div>
  );
};

export default ImagePopup;
