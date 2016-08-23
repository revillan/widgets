import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ infoIndex: 0 });
  }

  getTitles() {
    // debugger
    const out = this.props.info.map((object, index) => (
      <h1 onClick={this.getIndex.bind(this, index)}
       key={object['title']} >{object['title']}
      </h1>
    )
  );
  return out;
  }

  getIndex(index) {
    this.setState({infoIndex: index});
  }

  getContent() {
    // debugger
    const output = this.props.info[this.state.infoIndex];
    return <li key={output['content']} >{output['content']}</li>
  }

  render() {

    return (
      <div>
        <article>
          {this.getTitles()}
          <ul>
            {this.getContent()}
          </ul>
        </article>
      </div>
    );
  }
}

export default Tabs;
