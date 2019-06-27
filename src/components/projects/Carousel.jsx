import React from "react";
import styled from "styled-components";
import { HeroImage } from "./HeroImage";
import { colors } from "../../constants";
import NextImg from "../../assets/icons/next.svg";

class CarouselBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }

    handleNextClick = () => {
        const max = this.props.heroes.length - 1;
        let nextIndex = this.state.currentSlide + 1;
        if (nextIndex > max) {
            nextIndex = 0;
        }
        this.setState({
            currentSlide: nextIndex,
        });
    }

    handlePrevClick = () => {
        let prevIndex = this.state.currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = this.props.heroes.length - 1;
        }
        this.setState({
            currentSlide: prevIndex,
        });
    }

    render() {
        const current = this.props.heroes[this.state.currentSlide]
        return (
            <div className={this.props.className}>
                <PrevBtn onClick={this.handlePrevClick}>
                    <img src={NextImg} alt="previous" />
                </PrevBtn>
                <NextBtn onClick={this.handleNextClick}>
                    <img src={NextImg} alt="next" />
                </NextBtn>
                <CarouselHero
                    title={current.title}
                    image={current.image}
                />
            </div>
        );
    }
}

const Carousel = styled(CarouselBase)`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

const CarouselHero = styled(HeroImage)`
    position: absolute;
    width: calc(100% - 9px);
    height: calc(100% - 9px);
`;

const NextBtn = styled.button`
    background: ${colors.gray};
    color: ${colors.white};
    box-shadow: -3px 3px 0 ${colors.black};
    border: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 5px;
    height: 24px;
    width: 24px;
    outline: 0;
    z-index: 3;
    img {
        width: 7px;
        height: 12px;
        position: relative;
        right: -1px;
        top: 1px;
    }
    &:hover {
        background: ${colors.darkBlue};
    }
    &:active {
        transform: translate(-1px, 1px);
        box-shadow: -2px 2px 0 ${colors.black};
    }
`;

const PrevBtn = styled.button`
    background: ${colors.gray};
    color: ${colors.white};
    box-shadow: -3px 3px 0 ${colors.black};
    border: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 15px;
    height: 24px;
    width: 24px;
    outline: 0;
    z-index: 3;
    img {
        width: 7px;
        height: 12px;
        transform: scale(-1, 1);
        position: relative;
        left: -1px;
        top: 1px;
    }
    &:hover {
        background: ${colors.darkBlue};
    }
    &:active {
        transform: translate(-1px, 1px);
        box-shadow: -2px 2px 0 ${colors.black};
    }
`;

export default Carousel;