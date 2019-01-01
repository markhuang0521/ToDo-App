class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}

	componentDidMount() {
		try {
			console.log("fetch ");

			const data = localStorage.getItem("options");
			const options = JSON.parse(data);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (error) {}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const data = JSON.stringify(this.state.options);
			localStorage.setItem("options", data);
		}
	}
	componentWillUnmount() {
		console.log("delete data");
	}
	handleRemoveAll() {
		this.setState(() => ({ options: [] }));
	}

	handleDeleteOption(option) {
		this.setState(prevState => ({
			options: prevState.options.filter(item => item !== option)
		}));
	}

	handleAdd(option) {
		if (!option) {
			return "enter vaild value to add on the list";
		} else if (this.state.options.includes(option)) {
			return "duplicated options are not allow !";
		}
		this.setState(prevState => ({
			options: prevState.options.concat(option)
		}));
	}

	handlePick() {
		this.setState(preState => {
			const randonNum = Math.floor(Math.random() * this.state.options.length);
			const option = preState.options[randonNum];
			alert(`choose ${option}`);
		});
	}

	render() {
		const title = "Decision";
		const subTitle = "Put Your Fate Into My Hand";

		return (
			<div>
				<Header title={title} subTitle={subTitle} />
				<Click
					handlePick={this.handlePick}
					hasOptions={this.state.options.length > 0}
				/>
				<Options
					options={this.state.options}
					handleDeleteOption={this.handleDeleteOption}
					handleRemoveAll={this.handleRemoveAll}
				/>
				<AddOption handleAdd={this.handleAdd} />
			</div>
		);
	}
}

const Header = ({ title, subTitle }) => {
	return (
		<div>
			<h1>{title}</h1>
			{subTitle && <h2>{subTitle}</h2>}
		</div>
	);
};

const Click = ({ hasOptions, handlePick }) => {
	return (
		<div>
			<button disabled={!hasOptions} onClick={handlePick}>
				what should I do?
			</button>
		</div>
	);
};

const Options = ({ handleRemoveAll, handleDeleteOption, options }) => {
	return (
		<div>
			<button onClick={handleRemoveAll}>Remove All</button>
			{options.length === 0 && <p>{"please add options to get started !"}</p>}

			<ul>
				{options.map(option => (
					<Option
						key={option}
						optionText={option}
						handleDeleteOption={handleDeleteOption}
					/>
				))}
			</ul>
		</div>
	);
};

const Option = ({ optionText, handleDeleteOption }) => {
	return (
		<div>
			<li>
				{optionText}
				<button
					onClick={() => {
						handleDeleteOption(optionText);
					}}
				>
					delete
				</button>
			</li>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAdd(event) {
		event.preventDefault();
		const option = event.target.option.value.trim();
		const error = this.props.handleAdd(option);
		this.setState(() => ({ error }));
		if (!error) {
			event.target.option.value = "";
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form action="" onSubmit={this.handleAdd}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
