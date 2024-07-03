import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {

    static defaultProps = {
      country: 'us',
      pageSize: 6,
      category: 'general'
    }

    static propTypes = {
      country: PropTypes.string ,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    
    }

    defaultImg = "https://dims.apnews.com/dims4/default/8bc9ce9/2147483647/strip/true/crop/5862x3297+0+305/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fad%2Fdc%2Fd60b8d10c917f83a26411d02430c%2Fd19f877b5dae486e88e7ebed18d1cb84"

   

     handleNextClick = async () =>{


        if(!(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize))){


        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false

        })

         }
    
    }

     handlePrevClick = async () =>{

    
    
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false

        })
    }


    // articles =  [
    //     {
    //       "source": {
    //         "id": "nbc-news",
    //         "name": "NBC News"
    //       },
    //       "author": "Variety",
    //       "title": "Kinky Friedman, provocative musician, author and one-time politician, dies at 79",
    //       "description": "Kinky Friedman, the satirical and often provocative musician, author and one-time politician, has died at the age of 79.",
    //       "url": "https://www.nbcnews.com/news/us-news/kinky-friedman-provocative-musician-author-one-time-politician-dies-79-rcna159285",
    //       "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240627-Kinky-Friedman-al-1316jpg-860aee.jpg",
    //       "publishedAt": "2024-06-27T17:24:16Z",
    //       "content": "Kinky Friedman, the satirical and often provocative musician, author and one-time politician, has died at the age of 79.\r\nKinky Friedman stepped on a rainbow at his beloved Echo Hill surrounded by fa… [+2143 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "techradar",
    //         "name": "TechRadar"
    //       },
    //       "author": "Allisa James",
    //       "title": "YouTube may be planning to give us new AI song generators this year – and this time the music labels could let it happen",
    //       "description": "YouTube may be working on an ethical use for AI",
    //       "url": "https://www.techradar.com/computing/artificial-intelligence/youtube-may-be-planning-to-give-us-new-ai-song-generators-this-year-and-this-time-the-music-labels-could-let-it-happen",
    //       "urlToImage": "https://cdn.mos.cms.futurecdn.net/XJkBSzyj35YrBmvQK8dtqR-1200-80.jpg",
    //       "publishedAt": "2024-06-27T16:00:04Z",
    //       "content": "The battle between the music industry and the rampant, often copyright-infringing, use of AI to train and compile data sets has been heating up for quite some time. But now YouTube is reportedly nego… [+3015 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "the-hill",
    //         "name": "The Hill"
    //       },
    //       "author": "The Hill staff",
    //       "title": "Watch live: Randy Travis, others testify before House Judiciary Committee on music royalties",
    //       "description": "Country music singer-songwriter Randy Travis and other music industry figures are slated to testify Wednesday on the role of radio stations in paying royalties to recording artists before a House Judiciary subcommittee. The “Forever and Ever, Amen” singer and…",
    //       "url": "https://thehill.com/homenews/4741320-watch-live-randy-travis-others-testify-before-house-judiciary-committee-on-music-royalties/",
    //       "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/07/RandyTravisGettyImages-1489429126.jpg?w=1280",
    //       "publishedAt": "2024-06-26T17:45:00Z",
    //       "content": null
    //     },
    //     {
    //       "source": {
    //         "id": "buzzfeed",
    //         "name": "Buzzfeed"
    //       },
    //       "author": "karenricoy, Buzzy the Robot",
    //       "title": "Test: ¿Cómo sería la banda musical de tu grupo de amigos?",
    //       "description": "Pues hay que hacerlo, ¿no?",
    //       "url": "https://www.buzzfeed.com/mx/karenricoy/dime-el-nombre-de-tu-grupo-de-amigos-y-les-dire-como-seria",
    //       "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2024-05/27/18/campaign_images/cd35670c36ed/dime-el-nombre-de-tu-grupo-de-amigos-y-les-dire-c-3-626-1716833334-0_dblbig.jpg",
    //       "publishedAt": "2024-06-25T07:37:25.3775052Z",
    //       "content": "Este post fue desarrollado con la ayuda de las herramientas de Inteligencia Artificial (IA). Descubre más respecto a cómo funcionan nuestros quizzes impulsados con IA aquí.Si quieres disfrutar de más… [+69 chars]"
    //     }
    //   ]

      async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
          articles: parsedData.articles,
          totalArticles : parsedData.totalResults,
          loading: false});
      }

    constructor(){
        super();

        this.state = {
                
            articles: [],
            loading: false,
            page : 1,
            

        }
    }

  render() {
    return (
      <div>
        <div className="container my-3">
        <h1 className = "text-center" >News Nexus - Top Headlines</h1>
        {this.state.loading && <Spinner/> }
       
        <div className="row ">

            {!this.state.loading && this.state.articles.map((element)=>{
                  
                return <div className="col-md-4" key = {element.url}>

                    <NewsItem  title={element.title ?element.title : ""} description={element.description ? element.description : ""} imageUrl = {element.urlToImage ? element.urlToImage : this.defaultImg} newsUrl = {element.url ? element.url : ""} author = {element.author ? element.author : "unknown author"}  date = {element.publishedAt ? element.publishedAt : "unknown date"} source = {element.source.name ? element.source.name : "unknown source"}/>
                </div>
                  
            })}

            
        </div>
  

        </div>

        <div className="container d-flex justify-content-between">
            <button disabled = {this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
        
      </div>
    );
  }
}

export default News;
