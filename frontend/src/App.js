import React, { Suspense } from 'react';
import './App.css';
import 'css/dark.css';
import 'css/all.css';
import 'css/light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'components/bases/Loader';
import router from 'routes/router'
import { RouterProvider } from 'react-router-dom';

export default function App() {
	document.body.setAttribute('data-theme', 'light')
	return (
		<Suspense fallback={<Loader/>}>
		<RouterProvider router={router} />
		</Suspense>
	);
}

