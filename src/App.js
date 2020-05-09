import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaListAlt } from 'react-icons/fa';
import { BsArrowLeftRight, BsInfoSquare } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Item from './components/Item';
import { BrowserRouter, Switch, Route, MemoryRouter } from 'react-router-dom';
import PageCreatePage from './components/PageCreatePage';
import PageWelcome from './components/PageWelcome';
import PageCreateItem from './components/PageCreateItem';
import PageAbout from './components/PageAbout';
import { NavLink } from 'react-router-dom';

function App() {
	return (
		<div className="container mt-4">
			<BrowserRouter>
				<ul class="nav nav-pills text-left">
					<li className="nav-item"><NavLink to="/welcome" className="nav-link"><BsInfoSquare /> Welcome</NavLink></li>
					<li className="nav-item"><NavLink to="/createItem" className="nav-link"><BsArrowLeftRight /> Create Item</NavLink></li>
					<li className="nav-item"><NavLink to="/createPage" className="nav-link"><MdCreate /> Create Page</NavLink></li>
					<li className="nav-item"><NavLink to="/about" className="nav-link"><AiOutlineQuestionCircle /> About</NavLink></li>
				</ul>

				<div class="ml-4">
					<Switch>
						<Route path="/welcome" component={PageWelcome} />
						<Route path="/createItem" component={PageCreateItem} />
						<Route path="/createPage" component={PageCreatePage} />
						<Route path="/about" component={PageAbout} />
						<Route path="/" component={Item} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
