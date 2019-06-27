import React from "react";
import styled from "styled-components";
import { CloseButton } from ".";
import { colors, sizes } from "../constants";
import NoiseBG from "../assets/images/bg-capsule-bw.png";

class ModalOverlayBase extends React.Component {
    render() {
        const Project = this.props.project;
        if (Project) {
            return (
                <div className={this.props.className}>
                    <ModalContent>
                        <CloseButton to={this.props.category} />
                        <Project />
                    </ModalContent>
                </div>
            );
        } else {
            return null;
        }
    }
    onCloseModal = () => {
        if (typeof this.props.onClose === "function") {
            this.props.onClose();
        }
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
    padding: 10px 15px 15px;
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