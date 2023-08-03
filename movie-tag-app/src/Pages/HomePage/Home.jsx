import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MoviesCard/Moviecard";

const Home = () => {
    function compare(a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating === b.rating) return 0;
        if (a.rating < b.rating) return 1;
    }
    const [movies, setMovies] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch("http://37.140.241.219/api/Movie")
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
            });
    }, []);

    useEffect(() => {
        fetch("http://37.140.241.219/api/Tag")
            .then((res) => res.json())
            .then((data) => {
                setTags(data);
            });
    }, []);

    return (
        <section className="page">
            <header className="head">
                <h1>Лучшие фильмы</h1>
                <div className="notice">
                    На данной странице отображены лучшие фильмы, отсортированные
                    по рейтингу
                </div>
            </header>

            <div className="main">
                <div className="movies-cards">
                    {movies &&
                        movies
                            .sort(compare)
                            .map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                </div>

                <aside className="tags-box">
                    <h2 className="subtitle">Категории поиска: </h2>
                    <div className="tag-in-box">
                        {tags &&
                            tags.map((tag) => {
                                return (
                                    <p key={tag.id} className="tag-name">
                                        {tag.nameEng}
                                    </p>
                                );
                            })}
                    </div>
                    <h2 className="subtitle">Категории исключения: </h2>
                    <div className="tag-out-box">
                        {tags &&
                            tags.map((tag) => {
                                return (
                                    <p key={tag.id} className="tag-name">
                                        {tag.nameEng}
                                    </p>
                                );
                            })}
                    </div>
                </aside>
            </div>
        </section>
    );
};
export { Home };
