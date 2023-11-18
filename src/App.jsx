import "./App.css";
import Navbar from "./components/navbar";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Router />
			</BrowserRouter>
		</>
	);
}

export default App;
