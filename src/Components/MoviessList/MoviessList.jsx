import { Movi } from "../Movi/Movi";
import { Button } from "../ul/button/Button";
// import "./MoviessList.css";
import css from './MoviessList.module.css';
import {useState} from 'react';

export const MoviessList = ({ state, setState }) => {
  const [stateResult, setStateResult] = useState("");
	const removeCard = (id) => {
		const deleteCards = [...state, stateResult];
    deleteCards.splice(id);
    setState(deleteCards);
	};

	return (
		<div className={css.container1}>  
			{state.map(({ name, photo, gh, id }) => (
				<Movi
					key={id}
					name={name}
					photo={photo}
					gh={gh}
					// onClick={() => removeCard(id)}
				/>
			))}
			<Button text='Удалить все' onClick={removeCard}/>
		</div>
	);
};
