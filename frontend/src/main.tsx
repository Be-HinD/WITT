import App from './App.tsx'
import './index.css'
import { CookiesProvider } from 'react-cookie'
import { createRoot } from 'react-dom/client'
import React from 'react'
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
	<React.StrictMode>
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<App />
		</CookiesProvider>
	</React.StrictMode>
)
