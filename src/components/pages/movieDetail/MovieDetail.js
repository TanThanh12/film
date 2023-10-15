import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetail() {
    const [movie, setMovie] = useState();
    const { id } = useParams();
    const getData = () => {
        axios
            .get(`http://api.themoviedb.org/3/movie/${id}?apikey=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(function (response) {
                setMovie(response.data.result);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='movie'>
            <div className='left'>
                <img className='backdrop' src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ""}`} />
            </div>
            <div className='right'>
                <div className='poster'>
                    <img className='movie_poster' src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                </div>
                <div className='info'>
                    <div className='title'>{movie ? movie.original_title : ""}</div>
                    <div className='tagline'>{movie ? movie.tagline : ""}</div>
                    <div className='geners'>
                        {movie&&movie.geners
                        ?movie.geners.map((gener) => (
                            <>
                                <span className='movie_gener' id={gener.id}>{gener.name}</span>
                            </>
                        ))
                    : ""}
                    </div>
                </div>
                <div className='synopsis'>
                    <div className='synopsisText'>Synopsis</div>
                    <div>{movie?movie.overview:""}</div>
                </div>
            </div>
        </div>
    )
}