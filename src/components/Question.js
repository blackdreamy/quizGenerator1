import React from 'react';
import '../styles/question.scss';
import PropTypes from 'prop-types';
let he = require('he');

class Question extends React.Component {
	static propTypes = {
		correctAnswer:PropTypes.string,
		answerQuestion:PropTypes.func,
		increaseQuestion:PropTypes.func,
		questionText:PropTypes.string,
		shuffledAnswers:PropTypes.array
	}
    state = {
        currentAnswer: undefined,
    }
    currentAnswerUpdate = (e) => {
        this.setState({ currentAnswer: e.currentTarget.value })

    }
    finalAnswer = () => {
        if (this.state.currentAnswer !== undefined) {
            if (this.state.currentAnswer === this.props.correctAnswer) {
                this.props.answerQuestion();
            }
            this.props.increaseQuestion();
        }
    }
    render() {
        return (

                <div className="container-fluid">
                    <div className="row question_row text-center justify-content-center">
                        <div className="col-12">
                        <form className="form">
                            <h5 className="card-title">{he.decode(this.props.questionText)}</h5>                          
                        	{this.props.shuffledAnswers.map((element,index) => {
            					return(	<div key={index}>
                                          <div className="inputGroup">
                                            <input id={`radio${index}`} type="radio"  value={element} name='answer' onClick={(e) => this.currentAnswerUpdate(e)} />
                                            <label htmlFor={`radio${index}`} >{he.decode(element)}</label>
                                          </div>
                                          </div>

            						)
            				})}
            				<button type='button' className='btn btn-primary' onClick={this.finalAnswer}>Next</button>
                            </form>
                            </div>
                        </div>

			</div>

        )
    }

}

export default Question;

