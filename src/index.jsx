// react + redux
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.scss';

// components
import App from './containers/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
