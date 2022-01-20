import React, { Component } from "react"
import Page from "./Page"

export default class Pagination extends Component {
    _mounted = true

    constructor(props) {
        super(props)

        this.state = {
            currentPage: 0,
            transitionPhase: 0
        }

        this.tick = this.tick.bind(this)
    }

    tick(timestamp) {
        if (this.start === undefined)
            this.start = timestamp;

        const { pages } = this.props
        const { currentPage, transitionPhase } = this.state
        const transitionTimes = {
            0: 0,
            1: pages[currentPage]?.Transition?.TransitionInTime,
            2: pages[currentPage]?.Transition?.DisplayTime,
            3: pages[currentPage]?.Transition?.TransitionOutTime
        }        
        const transitionTime = transitionTimes[transitionPhase]

        let timeElapsedThisPhase = timestamp - this.start

        if (timeElapsedThisPhase > transitionTime) {
            this.start = timestamp

            let newPage = currentPage
            const newPhase = (transitionPhase + 1) % Object.keys(transitionTimes).length         
            const isLastTransitionPhase = transitionPhase === (Object.keys(transitionTimes).length - 1)

            if (isLastTransitionPhase) {                
                newPage = (currentPage + 1) % pages.length                        
            }
                        
            this.setState({
                transitionPhase: newPhase,
                currentPage: newPage
            })
        }

        if (this._mounted) {
            // this.requestAnimationId = window.requestAnimationFrame(this.tick);
            window.requestAnimationFrame(this.tick);
        }
    }

    componentDidMount() {
        this.tick()
    }

    // static getDerivedStateFromProps(props, state){
    // }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        const { pages, CssProps } = this.props
        const { currentPage, transitionPhase } = this.state
                
        return <div className={"list"} style={CssProps}>
            {
                pages.map((page, index) => <Page                     
                    {...page}
                    key={index}
                    isCurrent={currentPage === index}
                    transitionPhase={transitionPhase}                    
                />)
            }
        </div>
    }
}
