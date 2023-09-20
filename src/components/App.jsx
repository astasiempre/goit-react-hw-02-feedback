
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };


  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] += 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={()=>{this.handleFeedback('good')}}>Good</button>
        <button onClick={()=>{this.handleFeedback('neutral')}}>Neutral</button>
        <button onClick={()=>{this.handleFeedback('bad')}}>Bad</button>

        <h2>Statistic</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}</p>
      </div>
    );
  }
}

export default App;
