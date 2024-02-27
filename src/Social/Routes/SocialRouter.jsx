import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { SocialLayout } from '../layout/SocialLayout';

export const SocialRouter = () => {
	return (
		<SocialLayout>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/*'
					element={<Navigate to='/' />}
				/>
			</Routes>
		</SocialLayout>
	);
};
