import React from "react";
import App from "../containers/App";

const SearchBox = (props, SearchChange) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search hobos"
				onChange={props.SearchChange}
			/>
		</div>
	);
};

export default SearchBox;
