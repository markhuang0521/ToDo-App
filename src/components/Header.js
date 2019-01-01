import React, { Component } from "react";

const Header = ({ title, subTitle }) => (
	<div className="header">
		<div className="container">
			<h1 className="header__title">{title}</h1>
			{subTitle && <h2 className="header__subtitle">{subTitle}</h2>}
		</div>
	</div>
);

export default Header;
