import React from 'react';
import PropTypes from 'prop-types';

class QuizQuestion extends React.Component {
    static propTypes = {
      addQuestion: PropTypes.func,
      index: PropTypes.number
    }
    state = {
        answers: ['', ''],
        correct_answerID: '',
        question: '',
        correct_answer:undefined
    }
    addAnswer = () => {
        if (this.state.answers.length<4){
            this.setState({ answers: [...this.state.answers, ''] })
        }
    }
    handleChange = (e, index) => {
        let a = this.state.answers.slice(); //creates the clone of the state
        a[index] = e.target.value;
        this.setState({ answers: a });
    }
    handleRemove = (index) => {
        this.state.answers.splice(index, 1);
        this.setState({ answers: this.state.answers });
    }
    correctAnswer = (e) => {
        this.setState({ correct_answerID: e.currentTarget.value });
    }
    onChangeQuestion = (e) => {
        this.setState({ question: e.currentTarget.value })
    }

    render() {
        return (
            <div className="col-12 border justify-content-center mg" onChange={() => this.setState({},()=> { this.props.addQuestion(this.state,this.props.index)})}>
                
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">?</span>
                  </div>
                  <input type="text" className="form-control" placeholder="questionText" onChange={(e)=>this.onChangeQuestion(e)} name='questionText' />
                </div>
                {
                    this.state.answers.map((answer,index) => {
                        if (index < 2) {
                            return (
                            <div key={index}>
                                <div className="input-group in">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <input type="radio" value={index} name={`${this.props.index}correctAnswer`} onChange={(e) => this.correctAnswer(e)}/>
                                    </div>
                                  </div>
                                  <input type="text" className="form-control" onChange={(e)=>this.handleChange(e,index)} value={answer}/>
                                </div>


                            </div>
                            )
                        }
                        else {
                        return(
                            <div key={index}>
                                <div className="input-group in">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <input type="radio" value={index} name={`${this.props.index}correctAnswer`} onChange={(e) => this.correctAnswer(e)}/>
                                    </div>
                                  </div>
                                  <input type="text" className="form-control" onChange={(e)=>this.handleChange(e,index)} value={answer}/>
                                  <button onClick ={(e)=>this.handleRemove(index)} type="button" className="btn btn-outline-danger">X</button>
                                </div>
                                </div>
                            )
                    }
                    })
                }
                <button className={this.state.answers.length<4 ? 'vislble btn btn-outline-success' : 'hidden'} onClick ={(e)=>this.addAnswer(e)}>AddAnswer</button>
        </div>
        )
    }

}

export default QuizQuestion;
