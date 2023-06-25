import React from "react"

function Movie({ movie }) {

    return (
        <div className='col-span-1 bg-slate-800 rounded overflow-hidden'>
            <div className='w-full'>
                <img className='w-full' src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/404"} alt="" />
            </div>
            <div className="flex items-center justify-between p-2">
                <p>{movie.Type}</p>
                <p>{movie.Year}</p>
            </div>
        </div>
    )
}

export default Movie