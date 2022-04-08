import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			roobots: robots,
			searchfield: "",
		};
	}

	onSearchChange = (event) => {
		console.log(event.target.value);
	};

	render() {
		return (
			<div className="tc">
				<h1>HoboFiends!</h1>
				<SearchBox
					searchChange={this.onSearchChange}
					onChange={this.onSearchChange.bind(this)}
				/>
				<CardList robots={this.state.roobots} />
			</div>
		);
	}
}

export default App;
