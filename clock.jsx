import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    const date = new Date();
    this.state = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
    // this.updateSeconds = this.updateSeconds;
    // this.updateMinutes = this.updateMinute.bind(this);
    // this.updateHours = this.updateHours.bind(this);

  }

  componentDidMount() {setInterval(
    () => {
      let seconds = this.state.seconds += 1;
      let minutes = this.state.minutes;
      let hours = this.state.hours;
      if (this.state.seconds === 60) {
        minutes = this.state.minutes +=1;
        seconds = 0;
      }
      if (this.state.minutes === 60) {
        hours = this.state.hours += 1;
        minutes = 0;
      }
      if (this.state.hours > 13) {
        hours = hours - 12;
      }
      this.setState({seconds, minutes, hours});
    }, 1000
  );
  }

  //
  // updateSeconds() {
  //   // console.log("made it hereh");
  //   // e.preventDefault();
  //   if (this.state.seconds === 60) {
  //     const minutes = this.state.minutes +=1;
  //     this.setState({seconds: 0, minutes: minutes});
  //   }
  // }
  //
  // updateMinutes() {
  //   if (this.state.minutes === 60) {
  //     const hours = this.state.hours += 1;
  //     this.setState({minutes: 0, hours: hours});
  //   }
  // }
  //
  // updateHours() {
  //   if (this.state.hours === 13) {
  //     this.setState({hours: 1});
  //   }
  // }

  render () {
    return (
      <div>
        <span  id="hours">{this.state.hours}:</span>
        <span id="minutes">{this.state.minutes <10 ? `0${this.state.minutes}` : this.state.minutes}:</span>
        <span  id="seconds">{this.state.seconds <10 ? `0${this.state.seconds}` : this.state.seconds}</span>
      </div>
    );
  }
}

export default Clock;
