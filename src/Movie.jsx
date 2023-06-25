import React from "react"

function Movie({ movie }) {

    return (
        <div className='col-span-1'>
            <div className='w-full'>
                <img className='w-full' src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/404"} alt="" />
            </div>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
        </div>
    )
}

export default Movie