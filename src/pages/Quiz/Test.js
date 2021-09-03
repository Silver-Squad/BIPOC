import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Question from './Question';
import Result from './Result'
import quizQuestions from './quizQuestions'
import Quiz from './Quiz'

class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      answerArray: [],
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
}

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      (question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

    // Shuffle is not being used at this time:

    // for above componentDidMount:
    // this.shuffleArray(question.answers)

    // shuffleArray(array) {
    //   var currentIndex = array.length,
    //     temporaryValue,
    //     randomIndex;
    //
    //   // While there remain elements to shuffle...
    //   while (0 !== currentIndex) {
    //     // Pick a remaining element...
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;
    //
    //     // And swap it with the current element.
    //     temporaryValue = array[currentIndex];
    //     array[currentIndex] = array[randomIndex];
    //     array[randomIndex] = temporaryValue;
    //   }
    //
    //   return array;
    // }

    setUserAnswer(answer) {
      this.setState((state, props) => ({
        answersCount: {
          ...state.answersCount,
          [answer]: (state.answersCount[answer] || 0) + 1
        },
        answer: answer
      }));
    }

    handleAnswerSelected(event) {
      // console.log(event.currentTarget.value)
      const answerArray = this.state.answerArray
      answerArray.push(event.currentTarget.value)
      // console.log(answerArray)

      this.setUserAnswer(event.currentTarget.value);

      if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
    }

    setNextQuestion() {
      const counter = this.state.counter + 1;
      const questionId = this.state.questionId + 1;

      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
      });
    }

    getResults() {
      const answersCount = this.state.answersCount;
      const answersCountKeys = Object.keys(answersCount);
      const answersCountValues = answersCountKeys.map(key => answersCount[key]);
      const maxAnswerCount = Math.max.apply(null, answersCountValues);

      return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
    }

    scoreTest(answer, questions) {
    var score = (answer/questions) * 100;
    return score;
    }

    setResults(result) {
      if (result.length === 1) {
        this.setState({ result: result[0] });
      } else {
        this.setState({ result: 'Undetermined' });
      }
    }

    // setResults(result, answersCountKeys) {
    //   this.setState({result: answersCountKeys})
    // }

    renderQuiz() {
      return (
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      );
    }

    renderResult() {
      console.log(this.state.answerArray)
      // convert array of strings to numbers
      let newArray = this.state.answerArray.map(Number)
      console.log(newArray)
      // reduce array to one number that is a sum of all numbers in array
      const reducer = (accumulator, curr) => accumulator + curr
      let scoreTotal = newArray.reduce(reducer)
      console.log(scoreTotal)
      return <Result quizResult={scoreTotal + "%"}/>;
    }

    render() {
      return (
        <div className="QuizContainer">
          <div className="Quiz">
            <div className="Quiz-header pt-1 pb-1">
              <img src="./images/diversify-logo.png" className="App-logo" alt="logo" />
            </div>
            <div className="Quiz-header-2">
              <h2>Diversity & Inclusion Quiz</h2>
            </div>
            {this.state.result ? this.renderResult() : this.renderQuiz()}
          </div>
        </div>
      );
    }
  }

export default Test
