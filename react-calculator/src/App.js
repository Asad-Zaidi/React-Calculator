import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Qoutes from "./Pages/Qoute";
import Calculator from "./Pages/Calculate";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' Component={Home}></Route>
					<Route exact path='/Calculator' Component={Calculator}></Route>
					<Route exact path='/Qoute' Component={Qoutes}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;