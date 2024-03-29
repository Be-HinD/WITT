import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Quiz from './pages/Quiz'
import Follow from './pages/Follow'
import MainWrapper from './components/MainWrapper'
import Error from './pages/Error'
import FollowerTab from './pages/Follow/FollowerTab'
import FollowingTab from './pages/Follow/FollowingTab'
import Search from './pages/Search'
// import ResultPage from './pages/Quiz/Result'

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
						element: <FollowerTab />,
					},
					{
						path: 'following',
						element: <FollowingTab />,
					},
				],
			},
			{
				path: 'quiz',
				element: <Quiz />,
			},
			// {
			// 	path: 'quiz/result',
			// 	element: <ResultPage />,
			// },
			{
				path: 'search',
				element: <Search />,
			},
		],
	},
])

export default router
