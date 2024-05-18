import React, { Component } from 'react'
import Newsitem from './Newsitem';

export class news extends Component {
  article = [
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Stephanie Nolasco",
      "title": "Sports Illustrated Swimsuit model Kate Upton makes sizzling comeback for 60th anniversary issue",
      "description": "Kate Upton, Chrissy Teigen, Hunter McGrady and Gayle King are officially the newest cover girls for Sports Illustrated Swimsuit’s 2024 issue. The outlet is celebrating its 60th anniversary.",
      "url": "https://www.foxnews.com/entertainment/sports-illustrated-swimsuit-model-kate-upton-sizzling-comeback-60th-anniversary-issue",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/05/SISwimsuit_KateUpton_Cover.jpg",
      "publishedAt": "2024-05-14T20:28:45Z",
      "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+5634 chars]"
    },
    {
      "source": {
        "id": "polygon",
        "name": "Polygon"
      },
      "author": "Nicole Carpenter",
      "title": "Xbox Game Pass May 2024 new games include NHL 24, Chants of Sennaar",
      "description": "Chants of Sennaar is coming to Microsoft’s Xbox Game Pass in May, plus EA Sports NHL 24 and Immortals of Aveum.",
      "url": "https://www.polygon.com/24156307/xbox-game-pass-free-games-may-2024-chants-of-sennaar",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/NMjsanOXQMWIIZJcE7Sm7wrSNu8=/0x75:1920x1080/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24906992/chants_of_sennaar_puzzles.jpg",
      "publishedAt": "2024-05-14T14:15:00Z",
      "content": "Twelve more games are coming to Microsofts Xbox Game Pass service in May, adding to the five games that joined the service earlier this month. Little Kitty, Big City, meet the best puzzle game of 202… [+2435 chars]"
    },
    {
      "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
      },
      "author": "John Fanta, Michael Cohen",
      "title": "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
      "description": "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
      "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2024-02-29T20:59:30Z",
      "content": "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]"
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": "New Micah Parsons Show ",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
      "urlToImage": null,
      "publishedAt": "2023-11-27T20:37:24.6381564Z",
      "content": null
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": " Mikal Bridges Interview ",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
      "urlToImage": null,
      "publishedAt": "2023-11-27T20:37:24.3882176Z",
      "content": "Nets star sits down with Taylor Rooks for exclusive convo."
    }
  ]

  constructor(){
    super();
    this.state = {
      articles: this.article // Ensure the state uses the correct key 'articles'
    }
  }

  async componentDidMount(){
    console.log("hello")
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0b729f9677644257becfb3d7ec6052ad";
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata);
    this.setState({ articles: parsedata.articles }) // Correctly set 'articles' from the response
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Madsnews - top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newsitem 
                  title={element.title ? element.title.slice(0, 45) : "No Title"} 
                  description={element.description ? element.description.slice(0, 95) : "No Description"} 
                  imageUrl={element.urlToImage} 
                  newsUrl={element.url} 
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default news
