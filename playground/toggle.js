class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggle=this.handleToggle.bind(this)
		this.state = {
			visible: false
		};
	}
	handleToggle() {
		this.setState(prevState => {
			return {
				visible: !prevState.visible
			};
		});
	}


	render() {
		return (
			<div>
				<div>
					<h1>Toggle Button</h1>

					<button onClick={this.handleToggle}>
						{this.state.visible ? "hide detail" : "show detail"}
					</button>
					{this.state.visible && <h3> here are some contents for you</h3>}
				</div>
			</div>
		);
	}
}

// class Click extends React.Component {

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.hangleToggle}>
// 					{this.state.visible ? "hide detail" : "show detail"}
// 				</button>
// 			</div>
// 		);
// 	}
// }

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 			</div>
// 		);
// 	}
// }

// const render = () => {
// 	const template2 = (
// 		<div>
// 			<h1>Toggle</h1>
// 			<button onClick={Ontoggle}>
// 				{toggle ? "hide detail" : "show detail"}
// 			</button>
// 			{toggle && <h3> here are some contents for you</h3>}
// 		</div>
// 	);
// };
// render();

ReactDOM.render(<App />, document.getElementById("root"));
