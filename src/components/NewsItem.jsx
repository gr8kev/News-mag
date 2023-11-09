
import image from "../assets/news.jpg"

const NewsItem = ({ title, description, src, url }) => {
    const truncatedTitle = title.slice(0, 50);
    const truncatedDescription = description ? description.slice(0, 90) : "No description available.";

    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{ maxWidth: "345px" }}>
            <img src={src ? src : image} alt={`${truncatedTitle} - News Image`} style={{ height: "200px", width: "360px" }} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{truncatedTitle}</h5>
                <p className="card-text">{truncatedDescription}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}

export default NewsItem;
