import React from "react";
import Header from "./Component/Header"
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Calculator from "./Pages/Calculator";
import Qoute from "./Pages/Qoute";

function App() {
	return (
    <>
    <Header/>
		<Router>
			<Routes>
				<Route exact path="./Component/Header.jsx" element={<Header/>} />
				<Route path="/Calculator" element={<Calculator/>} />
        <Route path="/Qoute" element={<Qoute/>} />
			</Routes>
		</Router>
    <Calculator/>
    </>
	);
}

export default App;