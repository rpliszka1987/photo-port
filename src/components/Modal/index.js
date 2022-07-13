import React from "react";

function Modal({ onClose, currentPhoto }) {
 
  // Deconstruct props
  const { name, category, description, index } = currentPhoto;
  return (
    // Create a modal
    <div className="modalBackdrop">
      {/* Title */}
      <h3 className="modalTitle">{name}</h3>
      {/* Image */}
      <img
        src={require(`../../assets/large/${category}/${index}.jpg`)}
        alt="current category"
      />
      {/* Image description */}
      <p>{description}</p>
      {/* Close modal */}
      <button onClick={onClose} type="button">Close this modal</button>
    </div>
  );
}

export default Modal;
