import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export default class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 3
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    async componentDidMount() {
        console.log("cdm");
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(50);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    handleNext = async () => {
        console.log("next");
        this.props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(50);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
        this.props.setProgress(100);
    }

    handlePrev = async () => {
        this.props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page - 1}&pageSize=1${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(50);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        this.props.setProgress(100);
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>Top Headlines</h2>
                {this.state.loading && <Spinner />}
                {!this.state.loading && (
                    <div className="row">
                        {this.state.articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title}
                                    desc={element.description}
                                    imgurl={element.urlToImage}
                                    newsurl={element.url}
                                    author={element.author}
                                    publishedAt={element.publishedAt}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <div className='d-flex justify-content-between'>

                    <button disabled={this.state.page <= 1 ? true : false} type="button" className="btn btn-dark mx-3" onClick={this.handlePrev}>prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize) ? true : false} type="button" className="btn btn-dark mx-3" onClick={this.handleNext}>next</button>
                </div>
            </div>
        );
    }
}