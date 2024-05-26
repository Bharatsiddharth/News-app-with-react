import React, { Component } from 'react'
import Spinner from './Spinner@1x-1.0s-200px-200px.gif'

export default class spinner extends Component {
  render() {
    return (
      <div>
        <img src={Spinner} alt="spinner" />
      </div>
    )
  }
}
