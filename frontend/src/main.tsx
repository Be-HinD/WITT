import App from './App.tsx'
import './index.css'
import { CookiesProvider } from 'react-cookie'

export default function Root() {
	return (
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<App />
		</CookiesProvider>
	)
}
