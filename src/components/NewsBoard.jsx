import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=496a221f0afe4153863bd4542e970421`;
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching the news.');
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return <p>Loading...</p>; // Add a loading indicator
    }

    if (error) {
        return <p>{error}</p>; // Display an error message
    }

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map(news => (
                <NewsItem key={news.title} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
}

export default NewsBoard;
