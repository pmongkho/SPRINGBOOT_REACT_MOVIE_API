import axios from 'axios'

export interface Movie {
	id?: number
	imdbId: string
	releaseDate: string
	trailerLink: string
	genres: [string]
	poster: string
	backdrops: [string]
	reviewIds: [string]
}

export default async function HomePage() {
	const { data } = await axios.get<Movie[]>(
		'http://localhost:8080/api/v1/movies'
	)

	return (
		<div>
			<h1 className=' ml-4 p-4 text-4xl text-left'>Movies</h1>
			<div className=' overflow-x-auto flex  no-scrollbar p-4'>
				{data.map((movie) => (

						<img
							className='cursor-pointer block m-2 w-80 rounded-xl shadow-lg transition hover:scale-110 duration-200 '
							src={movie.poster}
							alt='poster'
						/>
			
				))}
			</div>
		</div>
	)
}
