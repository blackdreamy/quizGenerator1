import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
	<div className="container-fluid login-padding">
	<div className="row justify-content-center">
	<div className="col-6 text-center">
	<nav className="login">
	<h2>Login</h2>
	<p>Sign and start creating new quiz!</p>
	<button className='facebook btn btn-primary'
			onClick = {() => props.authenticate('Facebook')}>Log In With Facebook
	</button>
	</nav>
	</div>
	</div>
	</div>
);

Login.propTypes = {
	authenticate:PropTypes.func.isRequired
}



export default Login;