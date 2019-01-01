const app = {
	title: "React App",
	subTitle: "Put your fate into my hand",
	options: [1, 2, 3, 4, 5]
};

const onMakeDecision = () => {
	const randonNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randonNum];
	alert(option);
};

const onFormSubmit = event => {
	event.preventDefault();

	const option = event.target.option.value;
	if (option) {
		app.options.push(option);
		event.target.option.value = "";
		render();
	}
};

const resetForm = () => {
	app.options = [];
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subTitle && <h3>{app.subTitle}</h3>}
			<h4>
				{app.options.length > 0
					? "Here are your options"
					: "There are no options"}
			</h4>
			<p>{app.options.length}</p>
			<button
				disabled={app.options.length > 0 ? false : true}
				onClick={onMakeDecision}
			>
				what should I do?
			</button>

			<ul>
				{app.options.map((option, i) => {
					return <li key={i}> {option}</li>;
				})}
			</ul>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" id="" />
				<button>Add Option</button>
				<button onClick={resetForm}>reset All</button>
			</form>
		</div>
	);

	ReactDOM.render(template, document.getElementById("app"));
};

render();
