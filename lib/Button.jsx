import React, { Component } from 'react';

class Button extends Component {
  state = {
    loading: false
  }
  clickHandler = (e) => {
    this.setState(prevState => {
      return {
        loading: !prevState.loading
      }
    })
  }
  render() {
    return (
      <button
        disabled={this.props.isDisabled}
        onClick={(e) => this.clickHandler(e)}
      >
        {this.state.loading ? this.props.render.loader() : this.props.children}
      </button>
    )
  }
}

export default Button
