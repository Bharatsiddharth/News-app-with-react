import React, { Component } from 'react'
import Newsitem from './Newsitem';

export class news extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Madsnews - top headlines</h2>


        <div className="row">

            <div className="col-md-3">
                <Newsitem title="myTitle" description=' my des' />
            </div>

            <div className="col-md-3">
                <Newsitem title="myTitle" description=' my des' />
            </div>

            <div className="col-md-3">
                <Newsitem title="myTitle" description=' my des' />
            </div>

           

        </div>
        
        
      </div>
    )
  }
}

export default news
