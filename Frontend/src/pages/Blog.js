import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class Blog extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="blog-content">
        <p className="App-intro" onClick={ () => this.handleClick() }> กูติดยังวะ? </p>
        <p className="App-intro" onClick={ () => this.handleClick() }> กูติดยังวะ? </p>
        <p className="App-intro" onClick={ () => this.handleClick() }> กูติดยังวะ? </p>
        <ToggleDisplay show={this.state.show}>
          I am rendered in a span (by default) and hidden with display:none when show is false.
        </ToggleDisplay>

        <ToggleDisplay if={this.state.show} tag="section">
          I am rendered in a section and removed from the DOM when if is false.
        </ToggleDisplay>
      </div>
    );
  }
}

export default Blog;