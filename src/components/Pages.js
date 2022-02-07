import React from 'react';
import firebaseApp from './base';
import Quiz from './Quiz'
import loading from '../images/loading.gif';
class Pages extends React.Component {
    state = {
        isLoading:true,
        url: undefined,
    }
    getData = () => {
        firebaseApp
            .database().ref(this.state.url).on('value', (snapshot) => {
            	if (snapshot.exists()){
                	this.setState({quiz:snapshot.val().page,
                                    isLoading:false});

                }
                else {
                	this.setState({quiz:null,
                                   isLoading:false});
                }
                
            });
    }

    componentDidMount() {
        const pageUrl = this.props.match.params.quizId;
        this.setState({ url: pageUrl }, () => { this.getData() });
    }
    render() {
        if (this.state.isLoading === true) {
            return (<div className='centerMe'><img src={loading} alt="loading" width='60px'/></div>)
        }
        else if (this.state.isLoading===false) {
            if (this.state.quiz!==null && this.state.quiz!==undefined ) {
            return (
                <div>
                    <Quiz quizData = {this.state.quiz} />
                </div>
                )
        }
        else {
            return <div>Page Not Found</div>
        }
        }
    }
}

export default Pages;