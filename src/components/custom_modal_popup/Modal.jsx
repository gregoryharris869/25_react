import PropTypes from "prop-types";

const Modal = ({ id = "Modal", header, body, footer, onClose }) => {
  return (
    <div id={id} className="modal">
      <div className="modal-content">
        <div className="header">
          <button
            onClick={onClose}
            className="close-modal-icon"
            aria-label="Close"
          >
            &times;
          </button>
          <div>{header}</div>
        </div>
        <div className="body">{body}</div>
        <div className="footer">{footer}</div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  header: "Header",
  body: (
    <section>
      <p>This is our modal.</p>
    </section>
  ),
  footer: <footer>Footer</footer>,
};

Modal.propTypes = {
  id: PropTypes.string,
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
