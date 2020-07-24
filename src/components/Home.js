import React from 'react';
import '../components/home.css'
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articles: []
    }
  }
  componentDidMount(){
    fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cee2ff21da994519a9a463d7b32dfe16')
      .then(response => response.json())
      .then(data => {
          this.setState({
            articles: data.articles
          })
      });
  }
  render(){
    console.log(this.state);
    return (
      <div className="home-container" >
          <div className="news-container">
          {this.state.articles.map((item, index) =>{
              return(
                <div className="news">
                  <div className="news-title">
                   <h2 className="title">{item.title}</h2>
                  </div>
                  <div className="news-author">
                    <b className="author-b">{item.author}</b>
                  </div>
                  <div className="news-img">
                <img src={item.urlToImage} className="img-img" alt=""/>
                  </div>

                  <div className="news-content">
                    <p className="content-p">{item.content}</p>
                  </div>

                  <div className="news-a">
                  <a href={item.url} className="link">Interesting!!! Read More</a>
                  </div>
                </div>
              )
          })}
        </div>    
      </div>
    )
  }

}

export default Home;
