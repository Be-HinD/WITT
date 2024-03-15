import React, { useEffect, useState } from 'react'

function Cloud(blur: number, size: number) {
	const outerStyle = {
		position: 'absolute',
		width: `${size}px`,
		height: `${size}px`,
		borderRadius: `${size}px`,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		filter: `blur(${blur}px)`,
		zIndex: '1',
		opacity: '0',
	} as React.CSSProperties

	const innerStyle = {
		position: 'absolute',
		width: `${size * 0.6}px`,
		height: `${size * 0.6}px`,
		borderRadius: `${size}px`,
		backgroundColor: 'rgba(115, 72, 150, 0.4)',
		filter: `blur(${blur}px)`,
		zIndex: '0',
		opacity: '0',
	} as React.CSSProperties

	const [outerEffect, setOuterEffect] = useState(outerStyle)
	const [innerEffect, setInnerEffect] = useState(innerStyle)

	useEffect(() => {
		const timer = setTimeout(() => {
			setOuterEffect({ ...outerEffect, opacity: '1', transition: 'opacity 1s' })
			setInnerEffect({ ...innerEffect, opacity: '1', transition: 'opacity 1s' })
		}, 2000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			<div style={outerEffect}></div>
			<div style={innerEffect}></div>
		</>
	)
}

export default Cloud
