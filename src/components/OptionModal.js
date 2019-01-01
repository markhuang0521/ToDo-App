import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectOption, handleModalClose }) => (
	<Modal
		isOpen={!!selectOption}
		onRequestClose={handleModalClose}
		contentLabel="select option"
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Select options</h3>
		{selectOption && <h3 className="modal__body">{selectOption}</h3>}
		<button className="button" onClick={handleModalClose}>
			Confirm
		</button>
	</Modal>
);

export default OptionModal;
