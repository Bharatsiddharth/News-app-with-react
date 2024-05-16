import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let {title,description} = this.props;

    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="https://cdn.vox-cdn.com/thumbor/NMjsanOXQMWIIZJcE7Sm7wrSNu8=/0x75:1920x1080/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24906992/chants_of_sennaar_puzzles.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Newsitem
