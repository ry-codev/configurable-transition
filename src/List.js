import React, { useEffect, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import "./list.css"

const Slide = styled.div`
        position: absolute;
        height: 100%;
        z-index: ${props => props.initial & props.index === 0 ? 100 : "unset" };
        ${({
            current,
            keyframe,
            direction,
            iterationCount,
            duration,
            timingFunction,
        }) => keyframe && css`
          z-index: ${current ? 100 : 10};
          animation-name: ${keyframe};
          animation-direction: ${direction};
          animation-iteration-count: ${iterationCount};
          animation-duration: ${duration};
          animation-timing-function: ${timingFunction};
        `}   
    `

const List = ({
    keyframeIn,
    keyframeOut,
    slides,
    styles,
    animation: {
        delay: animationDelay,
        direction: animationDirection,
        iterationCount: animationIterationCount,
        duration: animationDuration,
        timingFunction: animationTimingFunction
    },
    transition: {
        transitionInTime,
        displayTime = 4000,
        transitionOutTime
    }
}) => {
    const [initial, setInitial] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const transitionIn = keyframes`${keyframeIn}`
    const transitionOut = keyframes`${keyframeOut}`

    // useInterval(() => {
    //     switch(transitionPhase) {
    //         case 0:
    //             setTransitionPhase(1)
    //             setKeyframe(transitionIn);
    //             break;
    //         case 1:
    //             setKeyframe(null)
    //             setTransitionPhase(2)
    //             break;
    //         case 3:
    //             setKeyframe(null)
    //             setTransitionPhase(0)
    //             break;
    //         default:
    //             setKeyframe(transitionOut);
    //             setTransitionPhase(3)
    //             break;
    //     }
    //     setTransitionTime(transitionTimes[transitionPhase])
    // }, transitionTime)

    const getSlideTransition = pageIndex => {
        if (initial) return null

        if ((pageIndex === currentPage - 1) || (currentPage === 0 && pageIndex === slides.length - 1)) {
            return transitionOut
        } else if (pageIndex === currentPage) {
            return transitionIn
        } else {
            return null;
        }
    }

    useEffect(() => {
        const nextPage = (currentPage + 1) % slides.length

        const timerId = setInterval(() => {
            if (!initial) {
                setCurrentPage(nextPage)
            }
        }, displayTime)

        return () => clearInterval(timerId)
    }, [currentPage, slides, initial, displayTime])

    useEffect(() => {
        setTimeout(() => {
            setInitial(false)
            setCurrentPage(1)
        }, displayTime)
    }, [displayTime])

    return <div className={"list"} style={styles}>
        <div className={`page`}>
            {
                slides.map((slideImg, index) => <Slide
                    className={"slide"}
                    key={index}
                    index={index}
                    initial={initial}
                    current={index === currentPage}
                    keyframe={getSlideTransition(index)}
                    direction={animationDirection}
                    iterationCount={animationIterationCount}
                    duration={animationDuration}
                    timingFunction={animationTimingFunction}
                    delay={animationDelay}
                >
                    <img src={slideImg} alt={""} />
                </Slide>)
            }
        </div>
    </div>
}

export default List
