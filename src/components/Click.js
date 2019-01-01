import React, { Component } from "react";

const Click = ({ hasOptions, handlePick }) => (
	<div>
		<button className='big-button'
		disabled={!hasOptions} onClick={handlePick}>
			what should I do?
		</button>
	</div>
);

export default Click;
