class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	componentDidMount() {
		// console.log("fetch");
		try {
			const count = parseInt(localStorage.getItem("count"), 10);
			if (count) {
				this.setState(() => ({ count }));
			}
		} catch (error) {}
	}
	componentDidUpdate(prevState) {
		// console.log("saving data");

		if (prevState.count !== this.state.count) {
			localStorage.setItem("count", this.state.count);
		}
	}
	handleAdd() {
		this.setState(prevState => ({ count: prevState.count + 1 }));
	}
	handleMinus() {
		this.setState(prevState => ({
			count: prevState.count - 1
		}));
	}
	handleReset() {
		this.setState(() => ({
			count: 0
		}));
	}

	render() {
		return (
			<div>
				<h1>Count:{this.state.count} </h1>
				<button onClick={this.handleAdd}>+1</button>
				<button onClick={this.handleMinus}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
