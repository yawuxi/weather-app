// react + redux
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './scss/_null.scss'
import './scss/_fonts.scss'
import './scss/_ui.scss'
import './scss/_mixins.scss'
import './index.scss';

// components
import App from './containers/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
