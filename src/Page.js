import React, { useEffect, useState } from "react"
import styled, { css, keyframes } from "styled-components"

const msToSecs = ms => (ms/1000) % 60 + 's'

const InlineStyles = css`
	${({ inlineStyles }) => inlineStyles && css`
		${inlineStyles}
	`}
`

const InitialStyles = css`
	${({ initialStyles }) => initialStyles && css`
		${initialStyles}
	`}
`

const DisplayStyles = css`
	${({ displayStyles }) => displayStyles && css`
		${displayStyles}
	`}
`

const TransitionStyles = css`
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
	`}
`

const Slide = styled.div`
        position: absolute;
        height: 100%;
		transition: opacity 1s ease;
		${({
			isCurrent
		   }) => isCurrent ? css`
			opacity: 1;
		` : css`
			opacity: 0;
		`}
        ${InlineStyles}    
        ${InitialStyles}
		${DisplayStyles}
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
	InitialStyles,
	DisplayStyles,
	TransitionInKeyFrame,
	TransitionOutKeyFrame,
	transitionPhase,
	isCurrent,
	Type
}) => {
	const [transition, setTransition] = useState({ keyframe: null, duration: null })

    useEffect(() => {
    	if (isCurrent) {
    		if (transitionPhase === 1) {
				console.log(1)
				setTransition({
					keyframe: keyframes`${TransitionInKeyFrame}`,
					duration: TransitionInTime
				})
    		} else if (transitionPhase === 3) {
				console.log(3)
    			setTransition({
					keyframe: keyframes`${TransitionOutKeyFrame}`,
					duration: TransitionOutTime
				})
    		} else {
				if (transitionPhase === 0) console.log(0)
				if (transitionPhase === 2) console.log(2)
				setTransition({
					keyframe: null,
					duration: null
				})
    		}
    	}
    }, [isCurrent, transitionPhase, TransitionInKeyFrame, TransitionOutKeyFrame, TransitionInTime, TransitionOutTime])

	return <Slide 
		className="page" 		
		keyframe={transition?.keyframe}
		duration={transition?.duration && msToSecs(transition?.duration)}
		inlineStyles={CssProps}
		initialStyles={transitionPhase === 0 && InitialStyles}
		displayStyles={isCurrent && transitionPhase === 2 && DisplayStyles}
		isCurrent={isCurrent}
	>
		{ Type === "Image" ? <img src={Url} alt="" width={600} /> : <h3>{Text}</h3> }
	</Slide>
}

export default Page