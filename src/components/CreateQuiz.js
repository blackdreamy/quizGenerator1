import React from 'react';
import QuizQuestion from './QuizQuestion';
import firebaseApp from './base';
import Login from './Login';
import firebase from 'firebase/app';
import 'firebase/auth'

class CreateQuiz extends React.Component {
    state = {
        results: [''],
        uid: undefined,
        theme:undefined,
        isLoading: true
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
                this.setState({ isLoading: false })
            }
            else {
            	this.setState({ isLoading: false })
            }
        })
    }
    themeUpdater = (e) => {
    	this.setState({theme:e.target.value})
    }
    logout = async () => {
        await firebase.auth().signOut();
        this.setState({ uid: undefined });
    }
    authHandler = async authData => {
        this.setState({ uid: authData.user.uid })
    }
    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }
    // функция, которую передаем в компонент создания отдельного вопорса, отвечает за обновление стейта
    addQuestion = (question, index) => {
        let a = this.state.results.slice(); //creates the clone of the state
        a[index] = question;
        a[index].correct_answer = a[index].answers[a[index].correct_answerID];
        a[index].incorrect_answers = a[index].answers.filter(e => e !== a[index].correct_answer);
        this.setState({ results: a });
    }
    // функция добавления нового вопроса, проверяем заполнены ли все поля в последнем вопросе
    addCard = () => {
        if (!this.state.results[this.state.results.length - 1].answers) {
            alert('Answers are empty!')
        } else if (this.state.results[this.state.results.length - 1].answers.includes('')) {
            alert('Empty answers are not allowed.');
        } else if (this.state.results[this.state.results.length - 1].correct_answer === undefined) {
            alert('You did not match a correct answer');
        } else if (this.state.results[this.state.results.length - 1].question === '') {
            alert('Question is empty');
        } else if (this.state.results[this.state.results.length - 1].incorrect_answers.length !== this.state.results[this.state.results.length - 1].answers.length - 1) {
            alert('Some answers are the same')
        } else {
            this.setState({ results: [...this.state.results, ''] });
        }
    }


    // функция добавления в Firebase
    pushToDb = () => {
        if (!this.state.results[this.state.results.length - 1].answers) {
            alert('Answers are empty!')
        } else if (this.state.results[this.state.results.length - 1].answers.includes('')) {
            alert('Empty answers are not allowed.');
        } else if (this.state.results[this.state.results.length - 1].correct_answer === undefined) {
            alert('You did not match a correct answer');
        } else if (this.state.results[this.state.results.length - 1].question === '') {
            alert('Question is empty');
        } else if (this.state.results[this.state.results.length - 1].incorrect_answers.length !== this.state.results[this.state.results.length - 1].answers.length - 1) {
            alert('Some answers are the same')
        } else if (this.state.results.length < 3) {
            alert('Add at least 3 questions')
        } else {
            firebaseApp
                .database()
                .ref()
                .push({
                    page: this.state
                }).then((snap) => {
                    this.props.history.push(`/pages/${snap.key}`);
                })
        }
    }

    render() {
        if (this.state.isLoading === false) {
            if (this.state.uid === undefined) {
                return <Login authenticate={this.authenticate}/>;
            } else {
                return (
                	<div>
            		<div className="container-fluid">
            		<div className="row justify-content-end">
            			<div className="col-2">
            				<button className='btn btn-dark' type='button' onClick = {this.logout}>Logout</button>
            			</div>
            		</div>
            		<div className="row justify-content-center">
                		<div className='col-4 text-center'>
                			<input type="text" className="form-control" placeholder='Enter a name for quiz' onChange={(e)=>this.themeUpdater(e)}/>	
                		</div>
                	</div>
                	</div>
                    <div className="container-fluid ">
                    <div className="row justify-content-center">
                    <div className="col-6 justify-content-center">

                {
                    this.state.results.map((answer,index) => {
                        return(
                        <QuizQuestion key={index} addQuestion={this.addQuestion} index={index}/>  
                        )
                    })
                }        
                
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-4 text-center">
                	<button className='btn btn-info' type='button' onClick ={(e)=>this.addCard(e)}>AddQuestion</button>
                	<br/>
                	<br/>
                	<button type="button" className="btn btn-warning" onClick={this.pushToDb}>Create Quiz!</button>
                	</div>
                </div>
        </div>
        </div>
                )
            }
        }
        else return (
        	<div className='centerMe'><img src="images/loading.gif" alt="loading" width='60px'/></div>
        	)
    }


}

export default CreateQuiz;