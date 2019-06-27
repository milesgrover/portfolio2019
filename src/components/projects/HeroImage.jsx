import styled from "styled-components";
import { colors } from "../../constants";

export const HeroImage = styled.div`
    position: relative;
    overflow: hidden;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: -5px 5px 0 ${colors.black};
    border: 2px solid ${colors.black};
    margin: 0 0 5px 5px;
    height: 100%;
    img {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
    &:after {
        content: ${props => !props.hideTitle ? `attr(title)` : null};
        position: absolute;
        display: inline-block;
        top: 5px;
        left: 8px;
        background: ${colors.gray};
        padding: 5px 10px;
        box-shadow: -3px 3px 0 ${colors.black};
        font-family: Catamaran, sans-serif;
        font-weight: 700;
        font-size: 16px;
        color: ${colors.white};
    }
`;