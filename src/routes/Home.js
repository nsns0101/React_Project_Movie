//index page

import React from 'react';
import axios from 'axios';    //fetch로 get하는 것 보다 시간 절약
import Movie from '../components/Movie.js';
import "./Home.css"
//class Component  (function Component를 쓰면 동적 state를 못씀)
class App extends React.Component {

    state = {
        isLoading: true,
        movies: [],

    }

    getMovies = async () => {
        const {
            data: {
                data: { movies }
            } //movies.data.data.movies
            //sort_by=rating은 순위대로 정렬
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        // console.log(movies);

        this.setState({
            movies,    //movies : movies
            isLoading: false,
        });

    }

    //render 함수가 실행되면 호출하는 함수
    componentDidMount() { //render가 되면 실행하는 함수
        // console.log("compontDidMount 함수 실행");
        this.getMovies();
    }

    render() {  //React는 Class의 render메서드를 자동실행
        // console.log("render 함수 실행");     
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {
                    isLoading ? (
                        <div className="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    ) : (
                            <div className="movies">
                                {
                                    movies.map(movie => (
                                        // console.log(movie);
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            genres={movie.genres}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                        />
                                    ))
                                }
                            </div>
                        )
                }
            </section>
        );


    }
}


export default App;
