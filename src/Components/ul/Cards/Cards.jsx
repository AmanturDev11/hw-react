// import "./Cards.css";
import css from './Cards.module.css';

export const Card = ({ data }) => {
	return (
		<div className={css.container}>
			{data.map((item) => {
				return (
					<div className={css.cards_container}>
						<img src={item.photo} alt={item.name} />
						<h2>{item.name}</h2>
						<p>{item.nameG}</p>
					</div>
				);
			})}
		</div>
	);
};
