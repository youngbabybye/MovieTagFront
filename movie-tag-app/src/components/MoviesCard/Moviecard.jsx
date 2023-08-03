import "./moviecard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
    return (
        <article className="card-wrapper">
            <Link className="card">
                <img src={props.movie.poster} alt="poster" className="poster" />
                <p className="title">
                    {props.movie.nameRu.length > 20
                        ? props.movie.nameRu.slice(0, 19) + "..."
                        : props.movie.nameRu}
                </p>
                <p className="rating">Рейтинг: {props.movie.rating}</p>
            </Link>
            <div className="more-info">
                <p className="title-hover">{props.movie.nameRu}</p>
                <p className="description">
                    {props.movie.description.slice(0, 150) + "..."}
                </p>
                <div className="movie-tags-box">
                    <p className="movie-tags">Категории: </p>
                    {props.movie.movieTagsDTOs.slice(0, 5).map((tag) => {
                        return (
                            <p className="tag-name" key={tag.id}>
                                {tag.nameEng[0].toUpperCase() +
                                    tag.nameEng.slice(1)}
                            </p>
                        );
                    })}
                </div>
            </div>
        </article>
    );
};
export { MovieCard };
