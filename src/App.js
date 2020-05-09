import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaListAlt } from 'react-icons/fa';
import { BsArrowLeftRight, BsInfoSquare } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Item from './components/Item';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageCreatePage from './components/PageCreatePage';
import PageWelcome from './components/PageWelcome';
import PageCreateItem from './components/PageCreateItem';
import PageAbout from './components/PageAbout';

function App() {
	return (
		<div className="container mt-4">
			<ul class="nav nav-pills text-left">
				<li className="nav-item"><a href="" className="nav-link disabled font-weight-bold">Datapod for React</a></li>
				<li className="nav-item"><a href="/welcome" className="nav-link"><BsInfoSquare /> Welcome</a></li>
				<li className="nav-item"><a href="/createItem" className="nav-link"><BsArrowLeftRight /> Create Item</a></li>
				<li className="nav-item"><a href="/createPage" className="nav-link"><MdCreate /> Create Page</a></li>
				<li className="nav-item"><a href="/about" className="nav-link"><AiOutlineQuestionCircle /> About</a></li>
			</ul>

			<div class="ml-4">
				<BrowserRouter>
					<Switch>
						<Route path="/welcome" component={PageWelcome} />
						<Route path="/createItem" component={PageCreateItem} />
						<Route path="/createPage" component={PageCreatePage} />
						<Route path="/about" component={PageAbout} />
						<Route path="/" component={Item} />
					</Switch>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
