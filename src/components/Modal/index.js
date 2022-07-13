import React, { useState } from "react";

function Modal() {
  return (
    // Create a modal
    <div className="modalBackdrop">
      {/* Title */}
      <h3 className="modalTitle">Photo Name</h3>
      {/* Image */}
      <img alt="current category" />
      {/* Image description */}
      <p>Photo Description</p>
      {/* Close modal */}
      <button type="button">Close this modal</button>
    </div>
  );
}

export default Modal;
