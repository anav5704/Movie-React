import React from "react"

function Movie({ movie }) {

    return (
        <div className='col-span-1 bg-slate-800 rounded overflow-hidden'>
            <div className='w-full'>
                <img className='w-full' src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/404"} alt="" />
            </div>
           <div className="p-2">
                <p>{movie.Title}</p>
                <div className="flex items-center justify-between">
                    <p>{movie.Year}</p>
                        <p>{movie.Type}</p>
                </div>
           </div>
        </div>
    )
}

export default Movie