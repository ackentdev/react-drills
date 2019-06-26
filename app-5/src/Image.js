import React, {Component} from 'react'

export default class Image extends Component {
  
  render() {
    return (
      <div>
        <img alt="dumbass" src={this.props.myImage} />
      </div>
    )
  }
}
