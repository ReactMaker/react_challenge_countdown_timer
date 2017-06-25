import React, { Component } from 'react';

import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <div className="timerControls">
          <button data-time="20" className="timerButton">20 Secs</button>
          <button data-time="300" className="timerButton">Work 5</button>
          <button data-time="900" className="timerButton">Quick 15</button>
          <button data-time="1200" className="timerButton">Snack 20</button>
          <button data-time="3600" className="timerButton">Lunch Break</button>
          <input type="text" name="minutes" placeholder="Enter Minutes" />
        </div>
        <div className="display">
          <h1 className="displayTL">asdf</h1>
          <p className="displayTR">wefr</p>
        </div>
      </div>
    );
  }
}
