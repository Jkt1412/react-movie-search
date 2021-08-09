import React from "react"

function MovieCard(props){
    return (
        <div className="card">

            <img className="card--img" 
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.data.poster_path}`} 
            alt={props.data.title + " Poster"} />

            <div className="card--content">
                <p className="card--title">{props.data.original_title}</p>
                <p><small>Release Date : {props.data.release_date}</small></p>
                <p><small>RATING : {props.data.vote_average}</small></p>
                <p>{props.data.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard