import React from 'react'
import UserProfile from './UserProfile'
import ActionBar from './ActionBar'
import character from '../assets/tree.png'

const mainstyle = {
	width: '360px',
	height: '800px',
	padding: '22px 14px',
	backgroundColor: 'rgba(17, 17, 17)',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
} as React.CSSProperties

function Main() {
	return (
		<div style={mainstyle}>
			<UserProfile />
			<div>
				<img src={character} />
			</div>
			<ActionBar />
		</div>
	)
}

export default Main
