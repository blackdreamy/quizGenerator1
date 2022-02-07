import React from 'react';
import '../styles/main.scss';
import Quiz from './Quiz';
import Nav from './Nav'


class RandomQuiz extends React.Component {
    state = {
        quiz: undefined,
        difficulty: 'easy'
    }
    getQuiz = async () => {
        const url = `https://opentdb.com/api.php?amount=10&difficulty=${this.state.difficulty}`;
        const response = await fetch(url);
        const quiz = await response.json();
        if (quiz.response_code === 0) {
            console.log(quiz);
            this.setState({ quiz });
        } else {
            console.log('error');
        }
    }
    render() {
        if (this.state.quiz === undefined) {
            return (

                <div>
                <Nav/>
                <div className='container-fluid login-padding'>
                <div className="row justify-content-center">
                <div className="col-6">
                <form className="form-inline justify-content-center">
                    <select name="difficulty" className='custom-select custom-select-md'onChange={(e) => this.setState({ difficulty: e.target.value })}>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    <button className='btn btn-primary'  type="button" onClick={this.getQuiz}>Let's go</button>
                </form>
                </div>
				</div>
				</div>
			</div>
            )
        } else return (
            <Quiz quizData = {this.state.quiz} />
        )
    }

}

export default RandomQuiz;