import React, { Component } from "react";
import Option from "./Option";

const Options = ({ handleRemoveAll, handleDeleteOption, options }) => (
	<div>
		<div className="widget--header">
			<h3 className="widget--title">Your options</h3>
			<button className="button button--link" onClick={handleRemoveAll}>
				Remove All
			</button>
		</div>

		{options.length === 0 && (
			<p className="widget--text">{"Please add options to get started !"}</p>
		)}

		<ol className="widget-top ">
			{options.map((option, index) => (
				<Option
					count={index + 1}
					key={option}
					optionText={option}
					handleDeleteOption={handleDeleteOption}
				/>
			))}
		</ol>
	</div>
);

export default Options;
