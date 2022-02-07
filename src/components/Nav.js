import React from 'react';

const Nav = (props) => (
    
<nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
            	<div className="container-fluid">
            		<a className='navbar-brand'href="/"><img src='images/logo.png' alt='logo' height='50px'/></a>
            		<button className='navbar-toggler' type='button' data-toggle='collapse'
            				data-target='#navbarResponsive'><span className='navbar-toggler-icon'></span>
            		</button>
            		<div className="collapse navbar-collapse" id='navbarResponsive'>
            			<ul className='navbar-nav ml-auto'>
            				<li className='nav-item'>
            					<a href="/" className="nav-link active">Home</a>
            				</li>
            				<li className='nav-item'>
            					<a href="/#howtouse" className="nav-link">How to use</a>
            				</li>
            				<li className='nav-item'>
            					<a href="/createQuiz" className="nav-link">CreateQuiz</a>
            				</li>
            				<li className='nav-item'>
            					<a href="/randomquiz" className="nav-link">RandomQuiz</a>
            				</li>
            			</ul>
            		</div>
            	</div>
            </nav>
);


export default Nav;




















