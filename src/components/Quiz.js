import React from 'react';
import Question from './Question';
import {Line} from 'rc-progress';
import Nav from './Nav';
import PropTypes from 'prop-types';

class Quiz extends React.Component {
  
    static propTypes = {
      quizData: PropTypes.object
    }

    state = {
        correctTotal: 0,
        currentQuestion: 0
    }

     shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    shuffleAnswers = (correct, incorrect) => {
        const totalArray = Object.values(incorrect);
        totalArray.push(correct);
        return (this.shuffle(totalArray));
    }
    increaseQuestion = () => {
        this.setState(prevState => {
            return { currentQuestion: prevState.currentQuestion + 1 }
        })
    }
    correctAnswer = () => {
        this.setState(prevState => {
            return { correctTotal: prevState.correctTotal + 1 }
        })
    }

    render() {
        if (this.state.currentQuestion < this.props.quizData.results.length) {
            return (
                <div className="quizContainer">
              <h6>Current Question: {this.state.currentQuestion+1}</h6>
        {this.props.quizData.results.map((element,index) => {
          if(index === this.state.currentQuestion) {
                 return(
            <Question key = {index}
                  questionText = {element.question}
                  incorrectAnswers = {element.incorrect_answers}
                  correctAnswer = {element.correct_answer}
                  answerQuestion = {this.correctAnswer} 
                  shuffledAnswers = {this.shuffleAnswers(element.correct_answer,element.incorrect_answers)}
                  increaseQuestion = {this.increaseQuestion}
                  
            />
            )
            } else {
                 return null;
            }
        })}
        <h6>Right answers: {this.state.correctTotal}</h6>

      </div>
            )
        } else return (
        	<div>
        	<Nav/>
            <div className="quizContainer login-padding">
          	<h2>Quiz is over!</h2>
          	<br/>
            <p>Right answers: {this.state.correctTotal} </p>
            <p>Total questions: {this.props.quizData.results.length}</p>
            <Line percent={Math.round((this.state.correctTotal/this.props.quizData.results.length)*100)} strokeWidth="2" strokeColor="#ff758c" />
            <p>{Math.round((this.state.correctTotal/this.props.quizData.results.length)*100)}%</p>
          
        </div>
        </div>
        )
    }

}

export default Quiz;