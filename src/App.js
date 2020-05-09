import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaListAlt } from 'react-icons/fa';
import { BsArrowLeftRight, BsInfoSquare } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Item from './components/Item';

function App() {
	return (
		<div className="container mt-4">
			<ul class="nav nav-pills">
				<li className="nav-item"><a href="#" className="nav-link disabled font-weight-bold">Datapod for React</a></li>
				<li className="nav-item"><a href="#" className="nav-link"><BsInfoSquare /> Info</a></li>
				<li className="nav-item"><a href="#" className="nav-link active"><BsArrowLeftRight /> Create Item</a></li>
				<li className="nav-item"><a href="#" className="nav-link"><MdCreate /> Create Page</a></li>
				<li className="nav-item"><a href="#" className="nav-link"><AiOutlineQuestionCircle /> About</a></li>
			</ul>

			<Item />
			<Item />
		</div>
	);
}

export default App;
