import { useState } from "react";
import Modal from "./Modal";
import "./style.css";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="button-container">
      <button className="btn" onClick={handleToggleModal}>
        Open
      </button>
      {showModal && (
        <Modal
          header={<h2>New Study Reveals Surprising Benefits of Meditation.</h2>}
          onClose={handleCloseModal}
          body={
            <p>
              Recent research reveals that integrating meditation into daily
              routines boosts workplace productivity. This groundbreaking study
              shows how mindfulness positively influences focus, creativity, and
              job performance. Tap into meditation transformable potential for
              enhanced professional success and well-being.
            </p>
          }
          footer={
            <footer>#Mindfulness #Productivity #WorkplaceWellness</footer>
          }
        />
      )}
    </div>
  );
};

export default ModalTest;
