import { Route, Routes } from 'react-router-dom';
import { SocialRouter } from '../Social/Routes/SocialRouter';
import { AuthRouter } from '../Auth/routes/AuthRouter';

export const Router = () => {
	return (
		<Routes>
			<Route
				path='/auth/*'
				element={<AuthRouter />}
			/>

			<Route
				path='/*'
				element={<SocialRouter />}
			/>
		</Routes>
	);
};
