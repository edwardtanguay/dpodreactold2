import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeftRight, BsInfoSquare } from "react-icons/bs";
import { MdCreate } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageCreatePage from './components/PageCreatePage';
import PageWelcome from './components/PageWelcome';
import PageCreateItem from './components/PageCreateItem';
import PageAbout from './components/PageAbout';
import { NavLink } from 'react-router-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			flashcards: []
		}
	}
	componentDidMount() {
		fetch('./flashcards.json')
			.then(response => response.json())
			.then(result => {
				const f = result.map(item => {
					return item;
				});
				this.setState({
					flashcards: f
				})
			})
	}
	render() {
		const flashcardsHtml = this.state.flashcards.map(item => (
			<div className="mb-2">
				<div className="bg-secondary p-1 text-white font-italic">{item.front}</div>
				<div className="p-1 theCode">{item.back}</div>
			</div>
		));
		return (
			<main className="container mt-4">
				<BrowserRouter>
					<ul className="nav nav-pills text-left pl-4 pb-3">
						<li className="nav-item"><NavLink to="/welcome" className="nav-link text-dark"><BsInfoSquare /> Welcome</NavLink></li>
						<li className="nav-item"><NavLink to="/createItem" className="nav-link text-dark"><BsArrowLeftRight /> Create Item</NavLink></li>
						<li className="nav-item"><NavLink to="/createPage" className="nav-link text-dark"><MdCreate /> Create Page</NavLink></li>
						<li className="nav-item"><NavLink to="/about" className="nav-link text-dark"><AiOutlineQuestionCircle /> About</NavLink></li>
					</ul>

					<div className="page bg-dark text-white p-3 ml-4">
						<Switch>
							<Route path="/welcome" component={PageWelcome} />
							<Route path="/createItem" component={PageCreateItem} />
							<Route path="/createPage" component={PageCreatePage} />
							<Route path="/about" component={PageAbout} />
						</Switch>
					</div>
					<div className="ml-4 mt-2 text-dark">
						<h3>Flashcards:</h3>
						{flashcardsHtml}
					</div>
				</BrowserRouter>
			</main>
		);
	}
}

export default App;
