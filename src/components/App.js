import React, { Component } from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Click from "./Click";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class App extends Component {
	state = {
		options: [],
		selectOption: undefined
	};

	handleRemoveAll = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = option => {
		this.setState(prevState => ({
			options: prevState.options.filter(item => item !== option)
		}));
	};

	handleAdd = option => {
		if (!option) {
			return "enter vaild value to add on the list";
		} else if (this.state.options.includes(option)) {
			return "duplicated options are not allow !";
		}
		this.setState(prevState => ({
			options: prevState.options.concat(option)
		}));
	};

	handlePick = () => {
		const randonNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randonNum];
		this.setState(() => ({
			selectOption: option
		}));
	};

	handleModalClose = () => {
		this.setState(() => ({
			selectOption: undefined
		}));
	};

	componentDidMount = () => {
		try {
			const data = localStorage.getItem("options");
			const options = JSON.parse(data);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (error) {}
	};
	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.options.length !== this.state.options.length) {
			const data = JSON.stringify(this.state.options);
			localStorage.setItem("options", data);
		}
	};
	componentWillUnmount = () => {
		console.log("delete data");
	};
	render() {
		const title = "Decision";
		const subTitle = "Put Your Fate Into My Hand";

		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<div className="container">
					<Click
						handlePick={this.handlePick}
						hasOptions={this.state.options.length > 0}
					/>
					<div className="widget">
						<Options
							options={this.state.options}
							handleDeleteOption={this.handleDeleteOption}
							handleRemoveAll={this.handleRemoveAll}
						/>

						<AddOption handleAdd={this.handleAdd} />
					</div>
				</div>
				<OptionModal
					handleModalClose={this.handleModalClose}
					selectOption={this.state.selectOption}
				/>
			</div>
		);
	}
}
