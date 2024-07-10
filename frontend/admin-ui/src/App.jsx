import React, { Suspense } from 'react';
import './App.css';
import 'src/css/dark.css';
import 'src/css/all.css';
import 'src/css/light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'src/components/bases/Loader';
import router from 'src/routes/router';
import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider } from 'react-router-dom';

export default function App() {
	document.body.setAttribute('data-theme', 'light')
	return (
		<Provider store={store}>
			<Suspense fallback={<Loader />}>
				<RouterProvider router={router} />
			</Suspense>
		</Provider>
	);
}

