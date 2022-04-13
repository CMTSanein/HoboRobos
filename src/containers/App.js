import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "../containers/App.css";
import Scroll from "../components/Scroll";

function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchField] = useState("");
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setRobots(users));
		return;
	}, []);
	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};
	const filteredRobots = robots.filter((robots) => {
		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
	});
	console.log(robots, searchfield);
	return !robots.length ? (
		<h1>Loading...</h1>
	) : (
		<div className="tc">
			<h1 className="f1">HoboFriends!</h1>

			<SearchBox SearchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
}

export default App;
