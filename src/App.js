import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiStack } from "react-icons/gi";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageGimp from './components/PageGimp';
import PageAll from './components/PageAll';
import PageGit from './components/PageGit';
import PageLinux from './components/PageLinux';
import { NavLink } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<main className="container mt-4">
				<BrowserRouter>
					<ul className="nav nav-pills text-left pl-4 pb-3">
						<li className="nav-item"><NavLink to="/all" className="nav-link text-dark"><GiStack /> All</NavLink></li>
						<li className="nav-item"><NavLink to="/git" className="nav-link text-dark"><GiStack /> Git</NavLink></li>
						<li className="nav-item"><NavLink to="/gimp" className="nav-link text-dark"><GiStack /> Gimp</NavLink></li>
						<li className="nav-item"><NavLink to="/linux" className="nav-link text-dark"><GiStack /> Linux</NavLink></li>
					</ul>
					<Switch>
						{/* <Route path="/all" component={PageAll} flashcards={this.state.flashcards} /> */}
						<Route path="/all" component={PageAll} />
						<Route path="/git" component={PageGit} />
						<Route path="/gimp" component={PageGimp} />
						<Route path="/linux" component={PageLinux} />
					</Switch>
				</BrowserRouter>
			</main>
		);
	}
}

export default App;
