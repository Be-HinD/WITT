import App from './App.tsx'
import './index.css'
import { CookiesProvider } from 'react-cookie'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container!)
const client = new QueryClient()

root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<CookiesProvider defaultSetOptions={{ path: '/' }}>
				<App />
			</CookiesProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
