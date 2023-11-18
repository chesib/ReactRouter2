import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Pokemons = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedValue, setSelectedValue] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const result = await response.json();
				setData(result.results);
			} catch (error) {
				setError(error);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			}
		};

		fetchData();
	}, []);
	console.log(data);
	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	const handleSelectChange = (event) => {
		setSelectedValue(event.target.value);
	};

	// Manejador para el envío del formulario
	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/pokemon/${selectedValue}`);
		console.log("Formulario enviado con valor:", selectedValue);
	};

	return (
		<form className="custom-select-container" onSubmit={handleSubmit}>
			<label htmlFor="mySelect">Busca tu pokemon</label>
			<select
				id="mySelect"
				className="custom-select"
				value={selectedValue}
				onChange={handleSelectChange}
			>
				<option value="" disabled>
					Seleccione una opción
				</option>

				{data.map((item) => (
					<option key={item.name} value={item.name}>
						{item.name}
					</option>
				))}
			</select>

			{selectedValue && (
				<h2>quieres ver los detalles de {selectedValue}??</h2>
			)}

			<button className="btn-sub" type="submit">
				Enviar
			</button>
		</form>
	);
};

export default Pokemons;
