import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { CloseButton } from ".";
import { colors, sizes } from "../constants";
import NoiseBG from "../assets/images/bg-capsule-bw.png";
import Carousel from "./projects/Carousel";

class ModalOverlayBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dismiss: false,
            fullImage: null,
            carouselStartIndex: 0,
        }
    }
    render() {
        const Project = this.props.project;
        if (this.state.dismiss) {
            return <Redirect to={this.props.category} />;
        } else {
            if (Project) {
                return (
                    <div className={this.props.className} onClick={this.handleLightDismiss}>
                        <ModalContent onClick={this.noDismiss} fillContent={!!this.state.fullImage}>
                            <CloseButton to={this.props.category} />
                            {this.state.fullImage ? 
                                <Carousel
                                    heroClick={this.closeFullImage}
                                    heroes={this.state.fullImage}
                                    carouselStartIndex={this.state.carouselStartIndex}
                                    fillContent
                                />
                            :
                                <Project
                                    heroClick={this.heroClick}
                                    carouselStartIndex={this.state.carouselStartIndex}
                                />
                            }
                        </ModalContent>
                    </div>
                );
            } else {
                return null;
            }
        }
    }

    noDismiss = (e) => {
        e.stopPropagation();
    }

    handleLightDismiss = () => {
        this.setState({
            dismiss: true,
        });
    }

    heroClick = (heroes, current) => {
        const newHeroes = heroes.map(hero => {
            return Object.assign({}, hero, {
                bgSize: "contain",
                align:"center",
                bgColor: "#ccc"
            });
        });

        this.setState({
            fullImage: newHeroes,
            carouselStartIndex: current
        });
    }

    closeFullImage = (heroes, current) => {
        this.setState({
            fullImage: null,
            carouselStartIndex: current,
        });
    }
}

const ModalOverlay = styled(ModalOverlayBase)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    height: calc(100% - 40px);
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url(${NoiseBG});
    display: flex;
    justify-content: center;
    @media (min-width: ${sizes.breakpoints.md}) {
        padding: 30px;
        height: calc(100% - 60px);
    }
`;

const ModalContent = styled.div`
    width: 100%;
    overflow: auto;
    max-width: 1400px;
    padding: ${props => props.fillContent ? `0` : `10px 15px 15px`};
    background: ${colors.white};
    box-shadow: -12px 12px 0 ${colors.black};
    position: relative;
    animation: scaleIn 150ms ease-out;
    @media (min-width: ${sizes.breakpoints.md}) {
        width: 80%;
        max-height: calc(100% - 60px);
    }
    @keyframes scaleIn {
        0% {
            transform: scale(0.8);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: (1);
        }
    }
`;

export default ModalOverlay;