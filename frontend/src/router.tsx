import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import CameraPage from './pages/Quiz/cameraPage'
import SolveQuizPage from './pages/Quiz/solveQuiz'

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
	{
		path: '/quiz/camera',
		element: <CameraPage />,
	},
	{
		path: '/quiz/solve',
		element: <SolveQuizPage />,
	},
])

export default router
