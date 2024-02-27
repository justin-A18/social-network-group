import { useState } from 'react';

export const HomePage = () => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleResize = (e) => {
		e.target.style.height = 'auto';
		e.target.style.height = e.target.scrollHeight + 'px';
	};

	return (
		<section className='w-full grid xl:grid-cols-[1fr_20rem]'>
			<div className='w-full md:w-[80%] mx-auto p-8'>
				<header className='w-full min-h-28'>
					<form className='w-full h-full flex items-center gap-2 border-2 bg-transparent border-[#222] p-3 rounded-md'>
						<div className='w-12 h-full'>
							<img
								className='rounded-full'
								src='https://cdn.hero.page/pfp/079dad16-a558-4435-8c78-12a5d8bd0c55-lovely-anime-avatar-anime-pfp-cute-avatars-2.png'
								alt='avatar'
							/>
						</div>
						<div className='w-full'>
							<textarea
								value={value}
								onChange={handleChange}
								onInput={handleResize}
								placeholder='¿QUÉ ESTÁS PENSANDO?'
								className='resize-none w-full px-2 border-b-2 border-[#222] outline-none bg-transparent text-white overflow-hidden'></textarea>
							<footer className='flex items-center justify-between mt-2'>
								<ul className='text-blue-400 flex items-center gap-2'>
									<li className='cursor-pointer'>
										<i className='bx bx-image-alt bx-sm'></i>
									</li>
									<li className='cursor-pointer'>
										<i className='bx bxs-video bx-sm'></i>
									</li>
									<li className='cursor-pointer'>
										<i className='bx bxs-file-gif bx-sm'></i>
									</li>
								</ul>

								<button
									type='submit'
									className='bg-blue-400 p-2 rounded-md hover:opacity-80 transition-opacity duration-300'>
									Publicar
								</button>
							</footer>
						</div>
					</form>
				</header>
			</div>
			<div className='bg-black'>s</div>
		</section>
	);
};
