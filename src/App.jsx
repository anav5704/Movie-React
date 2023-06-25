import { useState, useEffect } from 'react'
import './App.css'
import Icon from './search.svg'
import Movie from './Movie';
const url = "http://www.omdbapi.com/?apikey=413b7415";

function App() {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [searched, setSearched] = useState(false); 
    
    async function searchMovie (title) {
        try {
            const response = await fetch(`${url}&s=${title}`)
            const data = await response.json()
            setMovies(data.Search)
            setSearched(true);
            console.log(data.Search)
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <>
    <div className='bg-slate-900 min-h-screen'>
        <main className='text-white  w-4/5 m-auto pt-10'>
            <h1 className='text-3xl text-center font-bold mb-10'><span className='text-yellow-400'>IM</span>(not)<span className='text-yellow-400'>DB</span></h1>
            <div className='relative'>
                <input onChange={(e) => {setSearch(e.target.value)}} value={search} className='border border-slate-700 w-full p-2 caret-slate-600 outline-none bg-slate-800 text-slate-400 rounded' type="text" name="" id="" />
                <img onClick={() => {searchMovie(search)}} src={Icon} alt="" className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"/>
            </div>

            {searched && movies?.length > 0 ? 
            (<div className='grid grid-cols-4 gap-5 mt-10'>
                    {movies.map( (movie) => <Movie key={movie.imdbID} movie={movie} />)}
                </div>)
            : searched ?
            (<h2 className='mt-10 text-xl text-center'>No Movies Found</h2>) 
            :(null)}

        </main> 
    </div>
    </>
  )
}

export default App
