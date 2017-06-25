import React, { Component } from 'react';
import moment from 'moment';
import './Home.less';

export default class Home extends Component {

  state = {
    remindTime: 0,
    endDate: moment()
  }

  interval = undefined;

  countDown = (second) => {
    this.setState({
      remindTime: second,
      endDate: moment().add(second, 'second'),
    });
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({
        remindTime: this.state.remindTime -= 1,
      });
      if (this.state.remindTime <= 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  enterMinutes = (e) => {
    const minutes = parseInt(e.target.value, 10) * 60;
    if (e.key === 'Enter' && minutes) {
      this.countDown(minutes);
    }
  }

  showTime = () => {
    const timer = moment()
      .startOf('day')
      .add(this.state.remindTime, 'second');
    if (this.state.remindTime >= 3600) {
      return timer.format('HH:mm:ss');
    }
    return timer.format('mm:ss');
  }

  showEndTime = () => this.state.endDate.format('HH:mm:ss');


  render() {
    return (
      <div id="pageHome">
        <div className="timerControls">
          <button className="timerButton" onClick={() => { this.countDown(20); }}>20 Secs</button>
          <button className="timerButton" onClick={() => { this.countDown(300); }}>Work 5</button>
          <button className="timerButton" onClick={() => { this.countDown(900); }}>Quick 15</button>
          <button className="timerButton" onClick={() => { this.countDown(1200); }}>Snack 20</button>
          <button className="timerButton" onClick={() => { this.countDown(3600); }}>Lunch Break</button>
          <input type="number" min="0" max="999" placeholder="Enter Minutes" onKeyPress={this.enterMinutes} />
        </div>
        <div className="display">
          <h1 className="displayTL">{this.showTime()}</h1>
          <p className="displayTR">Be Back At {this.showEndTime()}</p>
        </div>
      </div>
    );
  }
}
