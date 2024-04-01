import App from './App.tsx'
import ReactDOM from 'react-dom'
import './index.css'
import { CookiesProvider } from 'react-cookie'
import React from 'react'

ReactDOM.render(
	<React.StrictMode>
		{/* @ts-expect-error build */}
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<App />
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
