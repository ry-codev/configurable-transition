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
            duration,
        }) => keyframe && css`
          z-index: ${current ? 100 : 10};
          animation-name: ${keyframe};
          animation-direction: normal;
          animation-iteration-count: 1;
          animation-duration: ${duration};
          animation-timing-function: ease-in;
        `}   
    `

const msToSecs = ms => (ms/1000) % 60 + 's'

const List = ({
    keyframeIn,
    keyframeOut,
    slides,
    styles,
    transition: {
        transitionInOutTime = 500,
        displayTime = 4000
    }
}) => {
    const [initial, setInitial] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [transitionTime, setTransitionTime] = useState(displayTime + transitionInOutTime)
    const transitionIn = keyframes`${keyframeIn}`
    const transitionOut = keyframes`${keyframeOut}`

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
        }, transitionTime)

        return () => clearInterval(timerId)
    }, [currentPage, slides, initial, transitionTime])

    useEffect(() => {
        setTimeout(() => {
            setInitial(false)
            setCurrentPage(1)
        }, transitionTime)
    }, [transitionTime])

    useEffect(() => {
        setTransitionTime(displayTime + transitionInOutTime)
    }, [displayTime, transitionInOutTime])

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
                    duration={msToSecs(transitionInOutTime)}
                >
                    <img src={slideImg} alt={""} />
                </Slide>)
            }
        </div>
    </div>
}

export default List
