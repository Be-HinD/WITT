import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import CameraPage from './pages/Quiz/Camera'
import SolveQuizPage from './pages/Quiz/solveQuiz'
import Follow from './pages/Follow'
import MainWrapper from './components/MainWrapper'
import Error from './pages/Error'
import Follower from './pages/Follow/Follower'
import Following from './pages/Follow/Following'

const router = createBrowserRouter([
	{
		path: 'auth',
		element: <Login />,
	},
	{
		path: '/',
		element: <MainWrapper />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'follow',
				element: <Follow />,
				children: [
					{
						path: '',
						element: <Follower />,
					},
					{
						path: 'follower',
						element: <Follower />,
					},
					{
						path: 'following',
						element: <Following />,
					},
				],
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
		],
	},
])

export default router
