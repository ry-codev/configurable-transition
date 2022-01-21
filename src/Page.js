import React, { useEffect, useState } from "react"
import styled, { css, keyframes } from "styled-components"

const msToSecs = ms => (ms/1000) % 60 + 's'

const InlineStyles = css`
	${({ inlineStyles }) => inlineStyles && css`
		${inlineStyles}
	`}
`

const TransitionStyles = css`
	transition: all 1s ease;
	${({            
		keyframe,
		duration
	}) => keyframe && css`
		z-index: 100;
		animation-name: ${keyframe};
		animation-direction: normal;
		animation-iteration-count: 1;
		animation-duration: ${duration};
		animation-timing-function: ease;
		animation-fill-mode: both;
	`}
`

const Slide = styled.div`
        position: absolute;
        height: 100%;		
		${({
			isCurrent,
			transitionPhase
		   }) => isCurrent && transitionPhase !== 0 ? css`
			opacity: 1;
		` : css`
			opacity: 0;
		`}
        ${InlineStyles}
        ${TransitionStyles}
    `

const Page = ({
	CssProps,
	Url,
	Text,
	Transition: {
		TransitionInTime,
		TransitionOutTime
	},
	TransitionInKeyFrame,
	TransitionOutKeyFrame,
	transitionPhase,
	isCurrent,
	Type
}) => {
	const [transition, setTransition] = useState({ keyframe: null, duration: null })

    useEffect(() => {
    	if (isCurrent) {
			console.log(transitionPhase)
			if (transitionPhase === 0) {
				console.log('delay')
				setTransition({
					keyframe: null,
					duration: null
				})
			} else if (transitionPhase === 1) {
				console.log('sliding in + display')
				setTransition({
					keyframe: keyframes`${TransitionInKeyFrame}`,
					duration: TransitionInTime
				})
    		} else {
				console.log('sliding out')
				setTransition({
					keyframe: keyframes`${TransitionOutKeyFrame}`,
					duration: TransitionOutTime
				})
    		}
    	}
    }, [isCurrent, transitionPhase, TransitionInKeyFrame, TransitionOutKeyFrame, TransitionInTime, TransitionOutTime])

	return <Slide 
		className="page" 		
		keyframe={transition?.keyframe}
		duration={transition?.duration && msToSecs(transition?.duration)}
		inlineStyles={CssProps}
		isCurrent={isCurrent}
		transitionPhase={transitionPhase}
	>
		{ Type === "Image" ? <img src={Url} alt="" width={600} /> : <h3>{Text}</h3> }
	</Slide>
}

export default Page