import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaListAlt } from 'react-icons/fa';

function App() {
	return (
		<div className="App">
			<p>Welcome to Datapod for React.</p>
			<ul>
				<li>0.0.0.006 sixth change test</li>
				<li>0.0.0.005 second five</li>
				<li>0.0.0.004 fourth change</li>
				<li>0.0.0.003 fixed versions to be more standard n.n.n</li>
				<li>0.0.0.002 added version info</li>
				<li>0.0.0.001 initial site</li>
				<li>initial state</li>
			</ul>
			<FaListAlt />
		</div>
	);
}

export default App;
