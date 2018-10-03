
import React from 'react';

class ExamComponent extends React.Component {
  render() { 
    return {
      questionData: [{prompt: "Question 1", answers: ["a","b","c","d"], correct: 2}, {prompt: "Question 2", answers: ["a","b","c","d"], correct: 0}], 
      progress: 0,
      score: 0
    };
  },
  checkAnswer: function(index) {
    var correct = this.state.questionData[this.state.progress].correct;
    var newScore = 0, newProgress = 0;
    if (correct === index) {
      newScore = this.state.score + 1;
      this.setState({score: newScore});
      newProgress = this.state.progress + 1;
      this.setState({progress: newProgress});
    } else {
      newProgress = this.state.progress + 1;
      this.setState({progress: newProgress});
    }
  },
  resetQuiz: function() {
    this.setState({score: 0, progress: 0});
  },
  render: function() {
    var questionDatum = this.state.questionData[this.state.progress];
    if(this.state.questionData.length > this.state.progress) {
    return (
     <div>
       <Questions questionDatum={questionDatum} />
       <AnswerList answers={questionDatum.answers} answerCallback={this.checkAnswer} />
       <Score score={this.state.score} />
       <Progress progress={this.state.progress} />
     </div> 
    );
    } else {
      return (
        <div>
          <p>Quiz Finished!</p>
          <span>Your <Score score={this.state.score} /></span>
          <button type="button" onClick={this.resetQuiz}>Reset Quiz</button>
        </div>
      );
    }
  }
});

class Score extends React.Component {
  render() {
    return (
      <span>Score: {this.props.score}</span>
    )
  }
});

class Progress extends React.Component {
  render() {
    return (
      <p>Question {this.props.progress + 1}</p>
    )
  }
});

class Questions extends React.Component {
  render() {  render: function() {
    return (
      <p>{this.props.questionDatum.prompt}</p>
    )
  }
});

class AnswerList extends React.Component {
  render() {  
    return (
      <ul>
        {this.props.answers.map(function(answer, index) {
         return (
          <ListItem answerItem={answer} answerCallback={this.props.answerCallback} index={index} />
         )
        },this)}
      </ul>
    );
  }

class ListItem extends React.Component {
  render() {  
    this.props.answerCallback(this.props.index);
  },
  render: function() {
    return (
      <li onClick={this.onClickAnswer}>{this.props.answerItem}</li>
    );
  }
});
<ExamComponent />


export default ExamComponent;
