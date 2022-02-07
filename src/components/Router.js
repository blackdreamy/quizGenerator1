import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import RandomQuiz from'./RandomQuiz';
import CreateQuiz from './CreateQuiz';
import Pages from './Pages';

const Router = () => (
	<BrowserRouter basename='App'>
		<Switch>
			<Route exact path='/' component={App}/>
			<Route path='/randomquiz' component={RandomQuiz}></Route>
			<Route path='/createquiz' component={CreateQuiz}></Route>
			<Route path="/pages/:quizId" component={Pages} />
		</Switch>
	</BrowserRouter>
)

export default Router;