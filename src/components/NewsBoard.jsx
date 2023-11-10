import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                let URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=496a221f0afe4153863bd4542e970421`;
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching the news.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                Array.isArray(articles) &&
                articles.map((news, index) => (
                    <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                ))
            )}
        </div>
    );
};

export default NewsBoard;
