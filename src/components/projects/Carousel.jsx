import React from "react";
import styled from "styled-components";
import { HeroImage } from "./HeroImage";
import GridHero from "./GridHero";
import { colors, fonts } from "../../constants";
import NextImg from "../../assets/icons/next.svg";

class CarouselBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }

    componentDidMount() {
        if (this.props.carouselStartIndex) {
            this.setState({
                currentSlide: this.props.carouselStartIndex
            });
        }
    }

    handleNextClick = (e) => {
        e.stopPropagation();
        const max = this.props.heroes.length - 1;
        let nextIndex = this.state.currentSlide + 1;
        if (nextIndex > max) {
            nextIndex = 0;
        }
        this.setState({
            currentSlide: nextIndex,
        });
    }

    handlePrevClick = (e) => {
        e.stopPropagation();
        let prevIndex = this.state.currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = this.props.heroes.length - 1;
        }
        this.setState({
            currentSlide: prevIndex,
        });
    }

    render() {
        const rotateHeroes = this.props.heroes.map((h, i) => {
            const newHero = {...h};
            newHero.slot = i - this.state.currentSlide;
            return newHero;
        });
        return (
            <div className={this.props.className}>
                <CarouselItems fillContent={this.props.fillContent}>
                    {rotateHeroes.length > 1 &&
                        <>
                            <PrevBtn onClick={this.handlePrevClick}>
                                <img src={NextImg} alt="previous" />
                            </PrevBtn>
                            <NextBtn onClick={this.handleNextClick}>
                                <img src={NextImg} alt="next" />
                            </NextBtn>
                        </>
                    }
                    {this.renderHeroes(rotateHeroes)}
                    
                    {!this.props.hideHelperText &&
                        <HelperText>
                            {this.props.fillContent ? "click anywhere to close" : "click to expand"}
                        </HelperText>
                    }

                </CarouselItems>

                {this.renderCaptions(rotateHeroes)}
                
                
            </div>
        );
    }

    renderHeroes = (heroes) => {
        return heroes.map((hero, index) => {
            const translateX = hero.slot * 100;
            const CarouselHero = hero.type === "grid" ? CarouselGridHero : CarouselImageHero;
            return (
                <CarouselHero
                    key={index}
                    {...hero}
                    onClick={this.handleHeroClick}
                    style={
                        {
                            transform: `translateX(${translateX}%)`,
                        }
                    }
                />
            )
        });
    }

    renderCaptions = (heroes) => {
        if (heroes.some(h => h.caption)) {
            return (
                <CarouselHeroCaption fillContent={this.props.fillContent}>
                    {
                        heroes.map((hero, index) => {
                            const opacity = hero.slot === 0 ? 1 : 0;
                            return (
                                    <span
                                        key={index}
                                        style={{opacity: opacity}}
                                    >
                                        {hero.caption}
                                    </span>
                            );
                        })
                    }
                </CarouselHeroCaption>
            )
        }
    }

    handleHeroClick = () => {
        if (typeof this.props.heroClick === "function") {
            this.props.heroClick(this.props.heroes, this.state.currentSlide)
        }
    }
}

const Carousel = styled(CarouselBase)`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const CarouselItems = styled.div`
    position: relative;
    box-shadow: ${props => props.fillContent ? `none` : `-5px 5px 0 ${colors.black}`};
    border: ${props => props.fillContent ? `none` : `2px solid ${colors.black}`};
    flex: 1;
    margin: ${props => props.fillContent ? `0` : ` 0 0 5px 5px`};
    max-width: 100%;
    overflow: hidden;
`;

const CarouselHeroCaption = styled.div`
    margin-top: 15px;
    display: grid;
    padding: ${props => props.fillContent ? `0 15px 15px 15px` : `0`};
    span {
        transition: opacity 250ms ease-out;
        grid-column: 1 / 1;
        grid-row: 1 / 1;
    }
`;

const CarouselImageHero = styled(HeroImage)`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    box-shadow: none;
    border: none;
    transition: transform 250ms ease-out;
    `;
    
    const CarouselGridHero = styled(GridHero)`
    position: absolute;
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    padding: 20px;
    margin: 0;
    box-shadow: none;
    border: none;
    transition: transform 250ms ease-out;
    justify-items: center;
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

const HelperText = styled.span`
    display: block;
    font-family: ${fonts.display};
    font-weight: 600;
    position: absolute;
    bottom: 10px;
    right: 10px;
    pointer-events: none;
    background: ${colors.lightBlue};
    padding: 3px 5px;
`;

export default Carousel;