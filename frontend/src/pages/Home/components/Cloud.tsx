import React, { useEffect, useState } from 'react'

function Cloud(blur: number, size: number) {
	// const outerStyle = {
	// 	position: 'absolute',
	// 	width: `${size}px`,
	// 	height: `${size}px`,
	// 	borderRadius: `${size}px`,
	// 	backgroundColor: 'rgba(255, 255, 255, 0.3)',
	// 	filter: `blur(${blur}px)`,
	// 	zIndex: '1',
	// 	opacity: '0',
	// } as React.CSSProperties

	// const innerStyle = {
	// 	position: 'absolute',
	// 	width: `${size * 0.6}px`,
	// 	height: `${size * 0.6}px`,
	// 	borderRadius: `${size}px`,
	// 	backgroundColor: 'rgba(115, 72, 150, 0.4)',
	// 	filter: `blur(${blur}px)`,
	// 	zIndex: '0',
	// 	opacity: '0',
	// } as React.CSSProperties

	const outerStyleClass = `absolute bg-[#ffffff4c] z-[1] opacity-0 rounded-full`
	const innerStyleClass = `absolute bg-[#ffffff4c] z-0 opacity-0 rounded-full`

	// const [outerEffect, setOuterEffect] = useState(outerStyle)
	// const [innerEffect, setInnerEffect] = useState(innerStyle)
	const [outerEffect, setOuterEffect] = useState(outerStyleClass)
	const [innerEffect, setInnerEffect] = useState(innerStyleClass)

	useEffect(() => {
		const timer = setTimeout(() => {
			// setOuterEffect({ ...outerEffect, opacity: '1', transition: 'opacity 1s' })
			// setInnerEffect({ ...innerEffect, opacity: '1', transition: 'opacity 1s' })
			setOuterEffect(outerEffect.replace('opacity-0', 'opacity-100') + ' transition-opacity duration-1000')
			setInnerEffect(innerEffect.replace('opacity-0', 'opacity-100') + ' transition-opacity duration-1000')
		}, 2000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{/* <div style={outerEffect}></div> */}
			{/* <div style={innerEffect}></div> */}
			<div style={{ width: `${size}px`, height: `${size}px`, filter: `blur(${blur}px)` }} className={outerEffect}></div>
			<div
				style={{ width: `${size * 0.6}px`, height: `${size * 0.6}px`, filter: `blur(${blur}px)` }}
				className={innerEffect}
			></div>
		</>
	)
}

export default Cloud
