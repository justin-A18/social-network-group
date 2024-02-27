import { NavLink } from 'react-router-dom';

export const SideBar = () => {
	return (
		<aside className='w-full py-3 px-4 sm:py-8 md:px-5 fixed bottom-0 sm:relative flex sm:flex-col gap-10 border-t sm:border-t-0 sm:border-r border-[#222]'>
			<div className='hidden sm:block'>
				<img
					className='lg:block hidden w-25 h-10 invert object-cover'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'
					alt=''
				/>
			</div>
			<ul className='w-full flex sm:flex-col sm:gap-6 text-white'>
				<li className='w-full p-3 rounded-md hover:bg-[#1A1A1A]'>
					<NavLink className='text-lg w-full flex justify-center lg:justify-normal items-center gap-3'>
						<i className='bx bx-home-alt-2 bx-sm'></i>
						<span className='hidden lg:block'>Inicio</span>
					</NavLink>
				</li>
				<li className='w-full p-3 rounded-md hover:bg-[#1A1A1A]'>
					<NavLink className='text-lg w-full flex justify-center lg:justify-normal items-center gap-3'>
						<i className='bx bx-search bx-sm'></i>
						<span className='hidden lg:block'>Busqueda</span>
					</NavLink>
				</li>
				<li className='w-full p-3 rounded-md hover:bg-[#1A1A1A]'>
					<NavLink className='text-lg w-full flex justify-center lg:justify-normal items-center gap-3'>
						<i className='bx bx-compass bx-sm'></i>
						<span className='hidden lg:block'>Explorar</span>
					</NavLink>
				</li>
				<li className='w-full p-3 rounded-md hover:bg-[#1A1A1A]'>
					<NavLink className='text-lg w-full flex justify-center lg:justify-normal items-center gap-3'>
						<i className='bx bx-bell bx-sm'></i>
						<span className='hidden lg:block'>Notificaciones</span>
					</NavLink>
				</li>
				<li className='w-full p-3 rounded-md hover:bg-[#1A1A1A]'>
					<NavLink className='text-lg w-full flex justify-center lg:justify-normal items-center gap-3'>
						<i className='bx bx-user bx-sm'></i>
						<span className='hidden lg:block'>Perfil</span>
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};
