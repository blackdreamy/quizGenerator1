import React from 'react';
import './styles/main.scss';
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/carousel.js";
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/Nav'




class App extends React.Component {
    toRandomQuiz = () => {
        this.props.history.push('/randomquiz');
    }
    createQuiz = () => {
        this.props.history.push('/createQuiz');
    }
    render() {
        return (
            <div className="wrapper-app">


            <Nav />


            <div className='container-fluid padding'>
            	<div className="row text-center">
            		<div className="col-12">
            			<h1 className='display-4'>Start</h1>
            		</div>
           			<hr/>
            	</div>
            </div>


            <div className="container-fluid padding">
            	<div className="row text-center padding">
            		<div className="col-xs-12 col-sm-6 col-md-6">
            			<div className="card">
					      <div className="card-body">
					        <h1 className="card-title">Create a new quiz</h1>
					        <p className="card-text">Easy to start, easy to share!</p>
					        <a href="/createQuiz" className="btn btn-primary">Create</a>
					      </div>
					    </div>
            		</div>
            		<div className="col-xs-12 col-sm-6 col-md-6">
            			<div className="card">
					      <div className="card-body">
					        <h1 className="card-title">Generate random quiz</h1>
					        <p className="card-text">Choose difficulty and get random 10 questions quiz</p>
					        <a href="/randomquiz" className="btn btn-primary">Get lucky</a>
					      </div>
					    </div>
            		</div>
            	</div>
            </div>


            <div id='slides' className='carousel slide' data-ride='carousel'>
            	<ul className='carousel-indicators'>
            		<li data-target='#slides' data-slide-to='0' className='active'></li>
            		<li data-target='#slides' data-slide-to='1'></li>
            		<li data-target='#slides' data-slide-to='2'></li>
            	</ul>
            <div className='carousel-inner '>
            	<div className="carousel-item active">
            		<img src="images/background.png" className='carouselPicture' alt="bg"/>
            		<div className="carousel-caption">
            			<h1 className="display-2">Easy to create</h1>
            			<h3>Create new quiz, and share it!</h3>
            			<button className='btn btn-outline-light btn-lg' onClick={this.createQuiz}>Start!</button>
            		</div>
            	</div>
            	<div className="carousel-item">
            		<img src="images/background2.png" className='carouselPicture' alt="bg1"/>
            	</div>
            	<div className="carousel-item">
            		<img src="images/background3.png" className='carouselPicture' alt="bg2"/>
            	</div>
            </div>
            </div>


            <div className='container-fluid padding' id='howtouse'>
            	<div className="row text-center howto">
            		<div className="col-12">
            			<h1 className='display-4'>How to use?</h1>
            		</div>
           			<hr/>
            	</div>
            </div>


            <div className="container-fluid padding">
            	<div className="row text-center padding">
            		<div className="col-xs-12 col-sm-6 col-md-4">
            			<i className="fa fa-question"></i>
            			<h3>Think up questions</h3>
            			<br/>
            			<p>Ready to create a new quiz?</p>
            		</div>
            		<div className="col-xs-12 col-sm-6 col-md-4">
            			<i className="fa fa-pencil-square"></i>
            			<h3>Start creating</h3>
            			<br/>
            			<p>Create new questions and check correct answers</p>
            		</div>
            		<div className="col-xs-12 col-sm-6 col-md-4">
            			<i className="fa fa-share"></i>
            			<h3>Share!</h3>
            			<br/>
            			<p>When you finished - just share your new quiz!</p>
            		</div>
            	</div>
            </div>

            <footer>
            	<div className="container-fluid padding">
            		<div className="row text-center">
            			<div className="col-12">
            				
            				<img src="images/logo.png" height='100px' alt="logo" className='padding'/>
            				<p>coded by blackdreamy</p>
            			</div>
            		</div>
            	</div>
            </footer>



			</div>
        )
    }

}

export default App;