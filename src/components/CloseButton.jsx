import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CloseX from "../assets/icons/close.svg";
import { colors } from "../constants";

const CloseButtonBase = (props) => {
    return (
        <Link {...props}>
            <img src={CloseX} alt="close" />
        </Link>
    );
}

const CloseButton = styled(CloseButtonBase)`
    background: ${colors.pink};
    color: ${colors.white};
    box-shadow: -3px 3px 0 ${colors.black};
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    height: 30px;
    width: 30px;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    img {
        width: 16px;
        height: 16px;
    }
    &:hover,
    &:focus {
        background: ${colors.darkBlue};
    }
    &:active {
        transform: translate(-1px, 1px);
        box-shadow: -2px 2px 0 ${colors.black};
    }
`;

export default CloseButton;