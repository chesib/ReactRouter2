import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Pokemon = () => {
	const { name } = useParams();
	const [pkmnData, setPkmnData] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${name}`
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const result = await response.json();
				setPkmnData(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	console.log(pkmnData);

	const { types, sprites, stats } = pkmnData || {};

	return (
		<div className="pokemon-container">
			<h2> {name.toUpperCase()}</h2>

			<div className="pokemon-types">
				<p>Tipos:</p>
				<ul>
					{types &&
						types.map((type, index) => (
							<li key={index}>{type.type.name}</li>
						))}
				</ul>
			</div>

			<div className="img-container">
				{sprites && (
					<img
						src={sprites.front_default}
						alt={`${name} sprite`}
						className="pokemon-image"
					/>
				)}
				<div className="pokemon-stats">
					<h3>Stats:</h3>
					<ul>
						{stats &&
							stats.map((stat, index) => (
								<li key={index}>
									{stat.stat.name}: {stat.base_stat}
								</li>
							))}
					</ul>
				</div>
			</div>
			<Link to="/pokemon" className="boton-volver-atras">
				Volver Atrás
			</Link>
		</div>
	);
};

export default Pokemon;
