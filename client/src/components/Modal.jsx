import React, { useEffect, useRef } from 'react';
import Login from '../pages/Login'; // Assuming this is your Login component
import '../css/LoginModal.css'; // Import CSS for styling the modal

// eslint-disable-next-line react/prop-types
function Modal({ show, onClose ,Component}) {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
        onClose(); // Close the modal when clicked outside of the modal content
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  return (
    <>
      {show && (
        <div className="modal-overlay">
          <div className="modal-content" ref={modalContentRef}>
          
            <Component />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

