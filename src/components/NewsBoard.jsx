import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=496a221f0afe4153863bd4542e970421`;
        fetch(URL)
            .then(response => response.json()) // Corrected: Call .json() as a function
            .then(data => setArticles(data.articles))
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., set an error state or display an error message.
            });
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
}

export default NewsBoard;
