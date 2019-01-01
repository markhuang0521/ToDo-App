import React, { Component } from "react";

export default class AddOption extends Component {
	state = {
		error: undefined
	};

	handleAdd = event => {
		event.preventDefault();

		const option = event.target.option.value.trim();
		const error = this.props.handleAdd(option);
		this.setState(() => ({ error }));
		if (!error) {
			event.target.option.value = "";
		}
	};
	render() {
		return (
			<div>
				{this.state.error && <p className="option-error">{this.state.error}</p>}
				<form className="add-option" onSubmit={this.handleAdd}>
					<input className="option-input" type="text" name="option" />
					<button className="button">Add option</button>
				</form>
			</div>
		);
	}
}
