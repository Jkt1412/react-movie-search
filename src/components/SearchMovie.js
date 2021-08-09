import React , { useState } from "react"
import MovieCard from "./MovieCard"

function SearchMovie(){

    const [query , setQuery] = useState('')
    const [movies , setMovies] = useState([])

    async function handleSubmit(event){
        event.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=7ab75076681bc424ddd60a475debf125&language=en-US&query=${query}&page=1&include_adult=false`
        
        try{
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        }catch(err){
            console.error(err)
        }
        
    }
    const movieList = movies.filter(movie => movie.poster_path).map((movie) => {
        return (<MovieCard key={movie.id} data={movie}/>)
    })
    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="query">Movie Search</label>
            <input type="text" className="input" 
            name="query" placeholder="i.e Jurassic Park"
            value={query} onChange={(e)=>setQuery(e.target.value)} />
            <button className="button" type="submit">Search</button>
        </form>
        {movieList}
        </>
    )
}

export default SearchMovie