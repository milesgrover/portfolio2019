import styled from "styled-components";
import { colors, fonts } from "../../constants";

const colorMap = {
    primary: colors.pink,
    secondary: colors.medBlue,
    tertiary: colors.gray,
}

export const TechTag = styled.div`
    font-family: ${fonts.display};
    font-weight: 700;
    font-size: ${props => props.mini ? `16px` : `24px`};
    line-height: 1;
    background: ${props => colorMap[props.usage]};
    box-shadow: -3px 3px 0 ${colors.black};
    text-transform: uppercase;
    display: inline-block;
    color: ${colors.white};
    padding: 6px 10px 4px;
    margin: ${props => props.mini ? `0 5px 0 3px` :`0 10px 10px 3px`};
`;