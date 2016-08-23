import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = { latitude: 0, longitude: 0, temp: "", condition: "" };
  }

  componentDidMount() {
    const pos = navigator.geolocation;
    const coords = pos.getCurrentPosition((posit) => {
      this.setState( {latitude: posit.coords.latitude,
                      longitude: posit.coords.longitude }, this.loadXMLDoc.bind(this));
    });
  }

  loadXMLDoc() {
    let request = new XMLHttpRequest();
    let ctx = this;
    console.log(this.state);
    request.open('GET', `http://api.apixu.com/v1/current.json?key=3a57dff55f514c16b66213308162208&q=${this.state.latitude},${this.state.longitude}`,
         true);
    request.onreadystatechange = (result) => {
      // debugger
      console.log(result.currentTarget.readyState);
      console.log(result.currentTarget.responseText);
      ctx.setState({temp: JSON.parse(result.currentTarget.responseText)['current']['temp_f'],
                    condition: JSON.parse(result.currentTarget.responseText)['current']['condition']['text']});

    };
    request.send();
  }

  render () {

    return (
    <div>
      <span>{this.state.temp}</span>
      <span>{this.state.condition}</span>
    </div>
  );
  }
}


export default Weather;
