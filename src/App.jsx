import { useState, useEffect } from 'react'
import './App.css'
// import Icon from './search.svg'
import Movie from './Movie';
const url = `https://www.omdbapi.com/?apikey=${proess.env.VITE_API_KEY}`

 function Icon () {
    return (
     <>
     <svg className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
    <path  strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
     </>
    )
  }

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
        <main className='text-white  w-4/5 m-auto py-10'>
            <h1 className='text-3xl text-center font-bold mb-10'><span className='text-yellow-400'>IM</span>not<span className='text-yellow-400'>DB</span></h1>
            <div className='relative text-slate-400'>
                <input placeholder='Search Movie' onKeyDown={(e) => {e.code == "Enter" ? searchMovie(search) : null }} onChange={(e) => {setSearch(e.target.value)}} value={search} className='border border-slate-700 w-full p-2 caret-slate-600 outline-none bg-slate-800 text-slate-400 rounded' type="text" name="" id="" />
                <div onClick={() => {searchMovie(search)}}>
                    <Icon />
                </div>
            </div>

            {searched && movies?.length > 0 ? 
            (<div className='grid grid-cols-2 md:grid-cols-5 gap-5 mt-10'>
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
