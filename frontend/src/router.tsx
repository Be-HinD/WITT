import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Quiz from './pages/Quiz'

const router = createBrowserRouter([
	{
		path: 'auth',
		element: <Login />,
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/quiz',
		element: <Quiz />,
	},
])

export default router
