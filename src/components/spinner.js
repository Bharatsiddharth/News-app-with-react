import React, { Component } from 'react'
import loader from './Spinner@1x-1.0s-200px-200px.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="loader" />
      </div>
    )
  }
}
