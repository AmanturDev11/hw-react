import Reac, { useRef } from "react";

import { Button } from "../ul/button/Button";
import { Input } from "../ul/input/Input";
import "./NewMoviess.css";
import { useState } from "react";

export const NewMoviess = ({ state, setState }) => {
	// const [moviesName, setMoviesName] = useState("");
	// const [moviesPhoto, setMoviesPhoto] = useState("");
	// const [moviesG, setMoviesG] = useState("");
	const moviesName = useRef(null);
	const moviesPhoto = useRef(null);
	const moviesG = useRef(null);

	function valueInputs() {
		const NewMovies = {
			name: moviesName.current.value,
			photo: moviesPhoto.current.value,
			genre: moviesG.current.value,
		};
		setState([...state, NewMovies]);
		// setMoviesName("");
		// setMoviesPhoto("");
		// setMoviesG("");
		moviesName.current.value = '';
		moviesPhoto.current.value = '';
		moviesG.current.value = '';
	}
	console.log(moviesName);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				valueInputs();
			}}>
			<Input
			placeholder="text"
				type="text"
				style="inputMain"
				value={moviesName}
				// setData={setMoviesName}
			/>
			<Input
			placeholder="url"
				type="url"
				style="inputMain"
				value={moviesPhoto}
				// setData={setMoviesPhoto}
			/>
			<Input
			placeholder="text"
				type="text"
				style="inputMain"
				value={moviesG}
				// setData={setMoviesG}
			/>
			<Button type="submit" text="Add" style="addButton" />
		</form>
	);
};
