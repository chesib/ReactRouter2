import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Pokemons from "../views/Pokemons";
import Pokemon from "../views/pokemon";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/pokemon/" element={<Pokemons />} />
			<Route path="/pokemon/:name?" element={<Pokemon />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
