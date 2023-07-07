

export default function Header() {

  return (
		<div className=' relative'>
			<img
				className='  object-cover h-[80vh] w-full'
				src='https://image.tmdb.org/t/p/original/faXT8V80JRhnArTAeYXz0Eutpv9.jpg'
				alt=''
			/>
			<button className=' bg-opacity-20 absolute bottom-0 left-4 shadow-lg py-4 px-8 m-4 rounded-md bg-slate-600 hover:bg-slate-500'>
				Play
			</button>
		</div>
	)
}
