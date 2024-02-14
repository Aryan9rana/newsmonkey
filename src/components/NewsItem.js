import React, { Component } from 'react'
import noimg from './noimg.jpg'
export default class NewsItem extends Component {
  render() {
      let {title, desc, imgurl,newsurl,author,publishedAt} = this.props;
    return (
        <div className='my-3'>
        <div className="card" >
        <img src={imgurl?imgurl:noimg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {publishedAt?new Date(publishedAt).toGMTString():"unknown"}</small></p>
          <a href={newsurl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
        </div>
      </div>
      </div>
    )
  }
}
