import styled from "styled-components";
import { colors, fonts } from "../../constants";

export const SubHeading = styled.h3`
    font-family: ${fonts.display};
    font-weight: 700;
    color: ${colors.white};
    background: ${props => props.bgColor || colors.darkBlue};
    box-shadow: -5px 5px 0 ${colors.black};
    margin: 0 0 0 5px;
    margin-bottom: ${props => props.compact ? `5px` : `20px`}
    padding: 6px 10px 4px;
    text-transform: uppercase;
    font-size: ${props => props.compact ? `20px` : `30px`};
    line-height: 1.25;
    display: ${props => props.compact ? `inline-block` : `table`};
`;