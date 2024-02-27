import PropTypes from 'prop-types';
import { SideBar } from './SideBar';

export const SocialLayout = ({ children }) => {
	return (
		<main className='w-full min-h-screen grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] bg-black'>
			<SideBar />
			{children}
		</main>
	);
};

SocialLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
